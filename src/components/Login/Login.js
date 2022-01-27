import { Alert } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from '../../store/usersContext';
import './Login.css'

const Login = () => {

    const { usuarios, currentUser, setCurrentUser } = useContext(UsersContext)

    const initialValues = {
        username: "",
        password: ""
    }

    const [values, setValues] = useState(initialValues)
    const [warning, setWarning] = useState(false)

    const handleInputChange = (name, value) => {
        setValues({ ...values, [name]: value })
    }

    const ingresar = (e) => {
        e.preventDefault()
        let user = usuarios.find(usuario => usuario.username === values.username)
        if (user !== undefined) {
            if (user.password === values.password) {
                console.log("ok")
                setCurrentUser([user])
                setValues(initialValues)
                setWarning(false)
            } else {
                setWarning(true)
                console.log("esat mal")
            }
        } else {
            console.log("no existe")
            setWarning(true)
        }
    }

    /* useEffect(() => {
        console.log(values)
    }, [values]) */

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <div>
            {
                currentUser.length === 0 ?
                    <form onSubmit={(e) => ingresar(e)} action="">
                        <div>
                            <label htmlFor="">Nombre de usuario</label>
                            <input name='username' id='username' onChange={(e) => handleInputChange(e.target.name, e.target.value)} type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Contraseña</label>
                            <input name='password' id='password' onChange={(e) => handleInputChange(e.target.name, e.target.value)} type="password" />
                        </div>
                        {
                            warning ?
                                <div className="w-75">
                                    <Alert severity="error">Nombre de usuario o contraseña incorrectos!</Alert>
                                </div>
                                : ""
                        }
                        <button className='btn btn-primary w-25' >Ingresar</button>
                        <Link className='w-25' to="/registro">No tenes cuenta? Registrate!</Link>
                    </form>
                    :
                    <div>
                        <h4>Hola {currentUser[0].username}</h4>
                        <p>Ya iniciaste sesión</p>
                        <Link className='w-25' to="/productos">Ir a comprar</Link>
                    </div>
            }
        </div>
    );
}

export default Login;
