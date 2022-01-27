import './ItemUsuario.css'

const ItemUsuario = ({username, email, id, admin, permisoAdmin, setPermisoAdmin, togglePermisoAdmin}) => {
    return ( 
        <>
            <tr className='user-view'>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <button className={admin ? "button-outline full-text" : "button-fill full-text"} onClick={() => togglePermisoAdmin(id)}>{admin ? "Sacar permisos de admin" : "Dar permisos de admin"}</button>
                    <button className={admin ? "button-outline small-text" : "button-fill small-text"} onClick={() => togglePermisoAdmin(id)}>{admin ? "Dar admin" : "Sacar admin"}</button>
                </td>
            </tr>
            <tr className='user-view-responsive'>
                <td>
                    <h6 className='responsive-text'>{`Usuario: ${username}`}</h6>
                    <p className='responsive-text'>{`Email: ${email}`}</p>
                    <button className={admin ? "button-outline full-text" : "button-fill full-text"} onClick={() => togglePermisoAdmin(id)}>{admin ? "Sacar permisos de admin" : "Dar permisos de admin"}</button>
                    <button className={admin ? "button-outline small-text" : "button-fill small-text"} onClick={() => togglePermisoAdmin(id)}>{admin ? "Dar admin" : "Sacar admin"}</button>
                </td>
            </tr>
        </>
    );
}
 
export default ItemUsuario;