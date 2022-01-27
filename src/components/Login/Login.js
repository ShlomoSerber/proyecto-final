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
                setCurrentUser([user])
                setValues(initialValues)
                setWarning(false)
            } else {
                setWarning(true)
            }
        } else {
            setWarning(true)
        }
    }

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <div className='login-background'>
            {
                currentUser.length === 0 ?
                    <form className='login-form' onSubmit={(e) => ingresar(e)} action="">
                        <h2 className='login-form-title'>Login</h2>
                        <div className='form-item'>
                            <label className='item-label' htmlFor="">Nombre de usuario</label>
                            <input className="item-input" name='username' id='username' onChange={(e) => handleInputChange(e.target.name, e.target.value)} type="text" />
                        </div>
                        <div className='form-item'>
                            <label className='item-label' htmlFor="">Contraseña</label>
                            <input className="item-input" name='password' id='password' onChange={(e) => handleInputChange(e.target.name, e.target.value)} type="password" />
                        </div>
                        {
                            warning ?
                                <div className="w-100">
                                    <Alert className="alert" severity="error">Nombre de usuario o contraseña incorrectos!</Alert>
                                </div>
                                : ""
                        }
                        <button className='login-button'>Ingresar</button>
                        <Link className='item-label m-0-auto' to="/registro">No tenes cuenta? Registrate!</Link>
                        
                    </form>
                    :
                    <div>
                        <h3 className='item-label text-center'>Hola {currentUser[0].username}</h3>
                        <p className='item-label text-center'>Ya iniciaste sesión</p>
                        <Link className='item-label' to="/productos">
                            <p className='text-center'>Ir a comprar</p>
                        </Link>
                    </div>
            }
        </div>
    );
}

export default Login;
