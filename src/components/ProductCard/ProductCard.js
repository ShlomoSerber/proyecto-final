import { Link } from "react-router-dom";
import "./ProductCard.css"

function ProductCard({productos}) {
    return (
        <div className="flex-center">
            <div className="productos-cards-container">
                {
                productos.length > 0 ?
                productos.map(producto =>
                    <Link className="producto-card" to={`/productos/producto/${producto.id}`} key={producto.id}>
                        <img src={producto.urlImagen} className="producto-imagen" alt=""/>
                        <div className="producto-text">
                            <h5 className="producto-title">{producto.nombre}</h5>
                            <p className="producto-description">{producto.descripcionChica}</p>
                            <p className="producto-description">{`Precio: $${producto.precio}`}</p>
                            {
                                producto.stock === 0 ? 
                                <p className="producto-no-stock">No hay Stock</p>
                                : <div></div>
                            }
                        </div>
                    </Link>
                )
                : <div></div>
                }
            </div>
        </div>
        
     );
}

export default ProductCard;