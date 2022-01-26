import './ItemProducto.css'

const ItemProducto = ({nombre, id, marca, urlImagen, seccionPrincipal, subSeccion, precio, stock, descripcionChicha, editar, eliminar}) => {

    return (  
        <tr className="contenedorItemProducto">
            <td><img src={urlImagen} className="producto-imagen-admin"/></td>
            <td>{nombre}</td>
            <td>{descripcionChicha}</td>
            <td>${precio}</td>
            <td>{stock}</td>
            <td>{seccionPrincipal}</td>
            <td>{subSeccion}</td>
            <td className="contenedorBotonesItemProducto">
                <button className="btn btn-outline-info mx-1" onClick={() => editar(id)}>Ver/Editar</button>
                <button className="btn btn-outline-danger mx-1"  onClick={() => eliminar(id)}>Eliminar</button>
            </td>
        </tr>
    );
}
 
export default ItemProducto;