import './Registro.css'
import FormUsers from '../Admin/UsersAdmin/FormUsers/FormUsers'
import { Link } from 'react-router-dom';

const Registro = () => {
    return (
        <div className='registro-background'>
            <h2 className='registro-form-title'>Registrate!</h2>
            <FormUsers />
            <Link className='link' to="/login">Ya tengo cuenta</Link>
        </div>
    );
}
 
export default Registro;