import './Registro.css'
import FormUsers from '../Admin/UsersAdmin/FormUsers/FormUsers'
import { Link } from 'react-router-dom';

const Registro = () => {
    return (
        <div>
            <h3>Registrate!</h3>
            <FormUsers />
            <Link className='w-25' to="/login">Ya tengo cuenta</Link>
        </div>
    );
}
 
export default Registro;