import { Link } from 'react-router-dom';
import './Navbar.css'
import logoSuper from '../../assets/images/logoSuperSinFondo.png'
import { useContext, useEffect } from 'react';
import { UsersContext } from '../../store/usersContext';

const Navbar = () => {

    const { currentUser, setCurrentUser } = useContext(UsersContext)

    const cerrarSesion = () => {
        if (window.confirm("Estas seguro de cerrar sesión?"))
            setCurrentUser([])
    }

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }, [currentUser])

    return (        
        <div className='containerNav'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><img src={logoSuper} alt='' style={{height: "60px"}}/></Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/productos'>Productos</Link>
                            </li>
                            {
                                currentUser.length > 0 && currentUser[0].admin ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to='/productosAdmin'>Productos Admin</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to='/usuariosAdmin'>Usuarios Admin</Link>
                                        </li>
                                    </> : ""
                            }
                        </ul>
                    </div>
                    <div className='justify-content-end'>
                        <Link to={'/carrito'}>
                            <button className='button'><i className=" me-2 bi bi-cart4"></i>{currentUser.length > 0 ? `Carrito de ${currentUser[0].username}` : 'Ir al Carrito'}</button>
                        </Link>
                        {
                            currentUser.length === 0 ?
                                <Link to='/login'>
                                    <button className='button' >Iniciar sesión</button>
                                </Link>
                                :
                                <Link to='/'>
                                    <button className='button' onClick={() => cerrarSesion()}>Cerrar sesión</button>
                                </Link>

                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;