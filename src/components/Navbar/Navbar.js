import { Link } from 'react-router-dom';
import './Navbar.css'
import logoSuper from '../../assets/images/logoSuperSinFondo.png'

const Navbar = () => {
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
                            <li className="nav-item">
                                <Link className="nav-link active" to='/productosAdmin'>Productos Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/usuariosAdmin'>Usuarios Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;