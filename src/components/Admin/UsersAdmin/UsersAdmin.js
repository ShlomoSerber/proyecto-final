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
        <div className="d-flex flex-column justify-content-center">
            {
                verForm ?
                    <FormUsers setVerForm={setVerForm}/>
                    : <button className="btn btn-success w-50" onClick={() => setVerForm(true)}>Agregar Producto</button>
            }
            <h2 className="text-center">Usuarios</h2>
            <div className="contenedorItemsUsuarios">

                <table className="table">
                    <tbody>
                        <tr className="bg-dark text-white">
                            <th>Nombre de usuario</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
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