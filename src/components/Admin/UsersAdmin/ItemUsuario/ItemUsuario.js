import './ItemUsuario.css'

const ItemUsuario = ({username, email, id, admin, permisoAdmin, setPermisoAdmin, togglePermisoAdmin}) => {
    return (  
        <tr className="contenedorItemProducto">
            <td>{username}</td>
            <td>{email}</td>
            <td className="contenedorBotonesItemProducto">
                <button className={`btn btn${admin ? "-outline": ""}-info mx-1`} onClick={() => togglePermisoAdmin(id)}>{admin ? "Sacar permisos de admin" : "Dar permisos de admin"}</button>
            </td>
        </tr>
    );
}
 
export default ItemUsuario;