import { useContext, useEffect, useState } from 'react';
import './FormUsers.css'
import { v4 as uuidv4 } from 'uuid';
import {UsersContext} from '../../../../store/usersContext'
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';

const FormUsers = ({setVerForm}) => {

    const { usuarios, setUsuarios, currentUser } = useContext(UsersContext)


    const initialValues = {
        id: uuidv4(),
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        admin: false
    }

    const [values, setValues] = useState(initialValues)
    const [darAdmin, setDarAdmin] = useState(false)

    const [warningContraseña, setWarningContraseña] = useState(false)
    const [warningUsername, setWarningUsername] = useState(false)
    const [warningEmail, setWarningEmail] = useState(false)
    const [warningRequired, setWarningRequired] = useState(false)
    const [mostrarExito, setMostrarExito] = useState(false)


    const handleInputChange = (name, value) => {
        setValues({ ...values, [name]: value })
    }

    const hacerAdmin = () => {
        setDarAdmin(!darAdmin)
    }

    useEffect(() => {
        handleInputChange("admin", darAdmin)
    }, [darAdmin])


    const guardarUsuario = (e) => {
        e.preventDefault()
        if(validacion()) {
            setUsuarios([...usuarios, values])
            setValues(initialValues)
            setWarningContraseña(false)
            setWarningUsername(false)
            setWarningEmail(false)
            setWarningRequired(false)
            setMostrarExito(true)
        }
    }

    useEffect(() => {
        if(mostrarExito){
            setTimeout(() => {
                setMostrarExito(false)
            }, 4000);
        }
    },[mostrarExito])

    useEffect(() =>{
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    },[usuarios])


    const validacion = () => {
        let retorno = true
        
        if(!estaCompleto()) {
            retorno = false
            setWarningRequired(true)
        }else{
            setWarningRequired(false)
        }

        if(values.password !== values.confirmPassword) {
            retorno = false
            setWarningContraseña(true)
        }else{
            setWarningContraseña(false)
        }

        if(usuarios.some(usuario => usuario.username == values.username)) {
            retorno = false
            setWarningUsername(true)
        }else{
            setWarningUsername(false)
        }

        if(usuarios.some(usuario => usuario.email === values.email)) {
            retorno = false
            setWarningEmail(true)
        }else{
            setWarningEmail(false)
        }
        return retorno
    }

    const estaCompleto = () => {
        for (const key in values) {
            if(values[key] === "") {
                return false
            }
        }
        return true
    }

    return (
        <>
        <form onSubmit={(e) => guardarUsuario(e)} action="" className="contenedorFormUsers">
            <h2 className="tituloFormUsers">Datos del usuario</h2>
            <div className="itemForm">
                <label className="item-label" htmlFor="Username">Nombre de usuario</label>
                <input className="item-input" onChange={(e) => handleInputChange(e.target.name, e.target.value)} autoComplete='off' type="text" id='Username' name='username' />
                {
                    warningUsername ?
                        <div className="w-100">
                            <Alert severity="error" className="alert">Ese nombre de usuario está en uso</Alert>
                        </div>
                        : ""
                }
            </div>
            <div className="itemForm">
                <label className="item-label" htmlFor="Email">Email</label>
                <input className="item-input" onChange={(e) => handleInputChange(e.target.name, e.target.value)} autoComplete='off' type="email" id='Email' name="email" />
                {
                    warningEmail ?
                    <div className="w-100">
                            <Alert severity="error" className="alert">Ese email ya tiene una cuenta</Alert>
                        </div>
                        : ""
                    }
            </div>
            <div className="itemForm">
                <label className="item-label" htmlFor="firstPassword">Contraseña</label>
                <input className="item-input" onChange={(e) => handleInputChange(e.target.name, e.target.value)} autoComplete='off' type="password" id='firstPassword' name='password' />
            </div>
            <div className="itemForm">
                <label className="item-label" htmlFor="confirmPassword">Confirmar contraseña</label>
                <input className="item-input" onChange={(e) => handleInputChange(e.target.name, e.target.value)} autoComplete='off' type="password" id='confirmPassword' name="confirmPassword" />
                {
                    warningContraseña ?
                    <div className="w-100">
                            <Alert severity="error" className="alert">Las contraseñas no coinciden</Alert>
                        </div>
                        : ""
                }
            </div>
            {
                currentUser.length > 0 && currentUser[0].admin ?
                    <div>
                        <label className="item-label" htmlFor="admin">Dar persmisos de Admin</label>
                        <Switch onClick={() => hacerAdmin()} id='admin' name="admin" />
                    </div>
                    : ""

            }            
            {
                warningRequired ?
                    <div className="w-100">
                        <Alert severity="error" className="alert">Debes completar todos los datos!</Alert>
                    </div>
                    : ""
            }
            {
                mostrarExito ?
                    <div className="w-100">
                        <Alert severity="success" className="alert">Agregado con éxito!</Alert>
                    </div>
                    : ""
            }
            <div className='tituloFormUsers'>
                <button className='button'>Guardar usuario</button>
            </div>
        </form>
        {
            currentUser.length > 0 && currentUser[0].admin ?
                <button className='button' onClick={() => setVerForm(false)}>Cerrar</button>
                : ""
        }
    </>
    );
}

export default FormUsers;