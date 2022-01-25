import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
import { ProductsContext } from '../../store/productsContext';


const Products = () => {
    const { productos, secciones } = useContext(ProductsContext);

    console.log(secciones);
    console.log(productos);
    
    return (
        <div>
            <div className="secondary-navbar">
                <nav className="secciones-buttons">
                    <h2 className="secciones-title">Categorias:</h2>
                    {
                        secciones.length > 0 ?
                        secciones.map(seccion =>
                            <Link to="/productos" key={seccion.id}>
                                <button className="seccion-button">{seccion.seccion}</button>
                            </Link>
                        )
                        : <div></div>
                    }
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar" className="search-input"></input>
                    <button className="search-button">Buscar</button>
                </div>
            </div>
            <h1 className="productos-title">Productos</h1>
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