import './ItemProducto.css'

const ItemProducto = ({nombre, id, marca, urlImagen, seccionPrincipal, subSeccion, precio, stock, descripcionChicha, editar, eliminar}) => {

    return ( 
        <>
            <tr className="contenedorItemProducto">
                <td><img src={urlImagen} className="producto-imagen-admin"/></td>
                <td>{nombre}</td>
                <td>${precio}</td>
                <td>{stock}</td>
                <td>{seccionPrincipal}</td>
                <td>{subSeccion}</td>
                <td className="contenedorBotonesItemProducto">
                    <button className="editar-button" onClick={() => editar(id)}>Ver/Editar</button>
                    <button className="eliminar-button" onClick={() => eliminar(id)}>Eliminar</button>
                </td>
            </tr>
            <tr className='productos-responsive'>
                <td>
                    <img src={urlImagen} className="producto-imagen-responsive"/>
                    <div>
                        <button className="editar-button-responsive" onClick={() => editar(id)}>Ver/Editar</button>
                        <button className="eliminar-button-responsive" onClick={() => eliminar(id)}>Eliminar</button>
                    </div>
                </td>
                <td className="table-data-responsive">
                    <h6>{nombre}</h6>
                    <p>{`Precio: ${precio}`}</p>
                    <p>{`Seccion: ${seccionPrincipal}`}</p>
                    <p>{`Subseccion: ${subSeccion}`}</p>
                </td>
            </tr>
        </>
    );
}
 
export default ItemProducto;