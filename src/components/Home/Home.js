import './Home.css'
import Carrousel from '../Carrousel';
import Card from '../Card';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../store/productsContext';
import { objetoSecciones } from "../../assets/data/objetoSecciones"
import ProductCard from '../ProductCard/ProductCard';


const Home = () => {

    const {productos} = useContext(ProductsContext)

    const productosOferta = 
    productos !== undefined && productos.length > 0 ?
    productos.filter(prod => prod.oferta === true)
    : [];
    const productosDestacados = 
    productos !== undefined && productos.length > 0 ?
    productos.filter(prod => prod.destacado === true)
    : [];

    return (
        <>
            {/* Boton y Carrousel */}
            <div className='carrouselAndButton'>
                <Carrousel />
                <div className='d-flex justify-content-center'>
                <Link to='/productos' className='m-3'><button className='carrousel-button'><h5 className='no-padding-margin'>Empezá a Comprar</h5></button></Link>
                </div>
            </div>

            <div>
                <div className='containerCardsTypeProducts containerGlobal'>
                    <h3 className='text-center'>Nuestras categorias</h3>
                    <div className='container-product-cards'>
                        {objetoSecciones.map(seccion => (
                            <div key={seccion.id} className='mt-5'>
                                <Card  {...seccion} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='containerCardsOnSaleProducts containerGlobal'>
                <h3 className='text-center'>Productos en oferta</h3>
                <div className='container-product-cards'>
                {productosOferta.map(producto => (
                    <div key={producto.id} className='mt-5'>
                        <Link className={producto.stock === 0 ? "opacity producto-card" : "producto-card"} to={`/productos/producto/${producto.id}`} key={producto.id}>
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
                        </div>
                    ))}
                </div>
            </div>   
            <div className='containerCardsTypeProducts containerGlobal'>
                <h3 className='text-center'>Productos destacados</h3>
                <div className='container-product-cards'>
                {productosDestacados.map(producto => (
                    <div key={producto.id} className='mt-5'>
                        <Link className={producto.stock === 0 ? "opacity producto-card" : "producto-card"} to={`/productos/producto/${producto.id}`} key={producto.id}>
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
                        </div>
                    ))}
                </div>
            </div>  
        </>
    );
}

export default Home;