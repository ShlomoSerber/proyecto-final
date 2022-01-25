import './Products.css'

const Products = ({productos}) => {
    
    return (
        <div>
            <div className="productos-cards-container">
                {
                    productos.length > 0 ?
                    productos.map(producto =>
                        <div className="card producto-card" style={{width: "18rem"}} key={producto.id}>
                            <img src={producto.urlImagen} className="card-img-top producto-imagen" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcionChica}</p>
                                <p className="card-text">{`Precio: $${producto.precio}`}</p>
                            </div>
                        </div>
                    )
                    : <div></div>
                }
            </div>
        </div>
     );
}
 
export default Products;