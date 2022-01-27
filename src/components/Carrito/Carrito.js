import { useContext } from 'react';
import { UsersContext } from '../../store/usersContext';
import './Carrito.css'

const Carrito = () => {

    const {carrito, setCarrito, cantProdCarrito, setCantProdCarrito} = useContext(UsersContext)
    const eliminar = (id) => {
        if(window.confirm('Estas seguro?')) {
            setCarrito(carrito.filter(producto => producto.id !== id))
            setCantProdCarrito(cantProdCarrito.filter(cant => cant.id !== id))
        }
    }

    return (
        <div className='background-carrito'>
            <h1 className='carrito-title'>Carrito</h1>
            {carrito.length > 0 ?

                <>
                    {carrito.map(producto => (
                        <div key={producto.id} className='carrito-card'>
                            <img className='carrito-image' src={producto.urlImagen} />
                            <div>
                                <h3 className='carrito-text'>{producto.nombre}</h3>
                                <p className='carrito-text'>{producto.descripcionGrande}</p>
                                <h5 className='carrito-text'>Precio unitario = ${producto.precio}</h5>
                                <h5 className='carrito-text'>Subtotal producto = $ {producto.precio * cantProdCarrito.find(cantidad => cantidad.id === producto.id).cantidad}</h5>
                                <div onClick={() => eliminar(producto.id)}>
                                    <button className='carrito-button'>
                                        <i className="bi bi-cart-x m-1"></i>
                                        Eliminar
                                    </button>
                                </div>
                            </div>                         
                        </div>
                    ))}
                    {/*<button className='button' onClick={}>Finalizar compra</button>*/}

                </>
                :

                <div className='carrito-text'>Carrito vacio agrega tus productos</div>
            }
        </div>
    );
}

export default Carrito;