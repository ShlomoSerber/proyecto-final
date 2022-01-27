import { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../../../store/usersContext';
import ItemUsuario from './ItemUsuario/ItemUsuario';
import './UsersAdmin.css'
import FormUsers from './FormUsers/FormUsers'

const UsersAdmin = () => {

    const { usuarios, setUsuarios } = useContext(UsersContext)

    const [verForm, setVerForm] = useState(false)

    const togglePermisoAdmin = (id) => {
        let user = usuarios.find(usuario => usuario.id === id)
        let array = usuarios.filter(usuario => usuario.id !== id)
        array.unshift({ ...user, admin: !user.admin })
        setUsuarios(array)
    }

    return (
        <div className="contenedorABMUsuarios">
            {
                verForm ?
                    <FormUsers setVerForm={setVerForm}/>
                    : <button className="add-user-button" onClick={() => setVerForm(true)}>Agregar Usuario</button>
            }
            <div className="contenedorItemsUsuarios">

                <table className="table">
                    <tbody className='table-header-users'>
                        <tr className="text-white">
                            <th className='column-title'>Nombre de usuario</th>
                            <th className='responsive-title'>Usuario</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </tbody>

                    <tbody className='users-table-header-responive'>
                        <tr className='users-responsive blue-background'>
                            <th className='responsive blue-background'>
                                <h2 className='responsive-title responsive'>Usuarios</h2>
                            </th>
                        </tr>
                    </tbody>

                    <tbody>
                        {
                            usuarios.map(usuario => (
                                <ItemUsuario key={usuario.id} togglePermisoAdmin={togglePermisoAdmin} {...usuario} />
                            ))
                        }
                    </tbody>
                </table>

            </div>


        </div>
    );
}

export default UsersAdmin;