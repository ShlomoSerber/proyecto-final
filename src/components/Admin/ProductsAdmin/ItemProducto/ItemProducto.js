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
                <button className="editar-button" onClick={() => editar(id)}>Ver/Editar</button>
                <button className="eliminar-button" onClick={() => eliminar(id)}>Eliminar</button>
            </td>
        </tr>
    );
}
 
export default ItemProducto;