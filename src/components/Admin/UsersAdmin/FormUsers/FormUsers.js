import './FormUsers.css'
import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect, useState } from 'react';
import {UsersContext} from '../../../../store/usersContext'
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';

const FormUsers = ({setVerForm}) => {

    const { usuarios, setUsuarios } = useContext(UsersContext)


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

   /*  useEffect(() => {
        console.log(values)
    }, [values])
 */

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
        console.log("entra a vlaida")
        let retorno = true
        
        if(!estaCompleto()) {
            console.log("no esta completo")
            retorno = false
            setWarningRequired(true)
        }else{
            setWarningRequired(false)
        }

        if(values.password !== values.confirmPassword) {
            retorno = false
            console.log("contraseñas distinattas")
            setWarningContraseña(true)
        }else{
            setWarningContraseña(false)
        }

        if(usuarios.some(usuario => usuario.username == values.username)) {
            retorno = false
            console.log("username igual")    
            setWarningUsername(true)
        }else{
            setWarningUsername(false)
        }

        if(usuarios.some(usuario => usuario.email === values.email)) {
            retorno = false
            console.log("email igual")
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
        <form onSubmit={(e) => guardarUsuario(e)} action="" className='d-flex flex-column justif-content-center w-50 align-content-center'>
            <h3>Datos del usuario</h3>
            <div>
                <label htmlFor="Username">Nombre de usuario</label>
                <input onChange={(e) => handleInputChange(e.target.name, e.target.value)} autoComplete='off' type="text" id='Username' name='username' />
                {
                    warningUsername ?
                        <div className="w-75">
                            <Alert severity="error">Ese nombre de usuario está en uso</Alert>
                        </div>
                        : ""
                }
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input onChange={(e) => handleInputChange(e.target.name, e.target.value)} autoComplete='off' type="email" id='Email' name="email" />
                {
                    warningEmail ?
                    <div className="w-75">
                            <Alert severity="error">Ese email ya tiene una cuenta</Alert>
                        </div>
                        : ""
                    }
            </div>
            <div>
                <label htmlFor="firstPassword">Contraseña</label>
                <input onChange={(e) => handleInputChange(e.target.name, e.target.value)} autoComplete='off' type="password" id='firstPassword' name='password' />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input onChange={(e) => handleInputChange(e.target.name, e.target.value)} autoComplete='off' type="password" id='confirmPassword' name="confirmPassword" />
                {
                    warningContraseña ?
                    <div className="w-75">
                            <Alert severity="error">Las contraseñas no coinciden</Alert>
                        </div>
                        : ""
                }
            </div>

            <div>
                <label htmlFor="admin">Dar persmisos de Admin</label>
                <Switch onClick={() => hacerAdmin()} id='admin' name="admin" />
            </div>
            
            {
                warningRequired ?
                    <div className="w-75">
                        <Alert severity="error">Debes completar todos los datos!</Alert>
                    </div>
                    : ""
                }
            {
                mostrarExito ?
                <div className="w-75">
                        <Alert severity="success">Agregado con éxito!</Alert>
                    </div>
                    : ""
                }
            <button className='btn btn-success w-50'>Guardar usuario</button>
        </form>
        <button className='btn btn-outline-success w-50' onClick={() => setVerForm(false)}>Cerrar</button>
    </>
    );
}

export default FormUsers;