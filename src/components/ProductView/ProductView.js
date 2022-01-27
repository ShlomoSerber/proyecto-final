import { useContext, useEffect, useState } from "react";
import "./ProductView.css"
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../store/productsContext";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import ThirdNavbar from "../ThirdNavbar/ThirdNavbar";
import { UsersContext } from "../../store/usersContext";

const ProductView = () => {
    const { productos, secciones } = useContext(ProductsContext);
    const {usuarios, setUsuarios, currentUser, setCurrentUser} = useContext(UsersContext)
    const { carrito, setCarrito, cantProdCarrito, setCantProdCarrito } = useContext(UsersContext)
    const { id } = useParams();
    const objetoProducto = productos.length > 0 ? productos.filter(producto => producto.id == id) : [];
    let precioInicial = objetoProducto.length > 0 ? objetoProducto[0].stock > 0 ? objetoProducto[0].precio : 0 : 0;
    const [precioTotal, setPrecioTotal] = useState(precioInicial);
    const [cantidadProd, setCantidad] = useState(0)

    const agregarAlCarrito = () => {
        setCarrito([...carrito, ...objetoProducto])
        setCantProdCarrito([...cantProdCarrito, {cantidad: parseInt(cantidadProd), id: parseInt(id)}])
    }

    useEffect(() => {
        setCurrentUser([
            {
            username: currentUser[0].username,
            email: currentUser[0].email,
            password: currentUser[0].password,
            arraysCarrito: {carrito, cantProdCarrito},
            admin: currentUser[0].admin,
            id: currentUser[0].id
            }
        ])
    }, [carrito])

    const setVarios = (e) => {
        setCantidad(e.target.value)
        setPrecioTotal(precioInicial * e.target.value)
    }

    const subSecciones =
    secciones.length > 0 ?
    id !== undefined ?
    secciones.filter(seccion => seccion.seccion == objetoProducto[0].seccionPrincipal)
    : []
    : [];

    console.log(precioTotal);

    return (
        <>
            <SecondaryNavbar categorias={secciones}/>
            <ThirdNavbar subCategorias={
                subSecciones.length > 0 ? 
                subSecciones[0].subSecciones
                : []
            }/>
            {
                objetoProducto.length > 0 ?
                objetoProducto.map(producto => 
                    <div className="product-view-background" key={producto.id}>
                        <div className="product-image-and-text">
                            <img className="product-view-image" src={producto.urlImagen} alt=""></img>
                            <div className="product-details">
                                <h2 className="product-title">{producto.nombre}</h2>
                                <h4 className="product-title">{producto.descripcionChica}</h4>
                                <p className="product-text">{producto.descripcionGrande}</p>
                                <p className="product-text product-text-margin">{`Marca: ${producto.marca}`}</p>
                                <p className="product-text">{producto.oferta ? "En oferta: Si" : "En oferta: No"}</p>
                                <h4 className="product-text">{`Precio: $${producto.precio}`}</h4>
                            </div>  
                        </div>     
                        <div className="add-cart-card">
                            <h4 className="add-cart-card-title">{`Precio total: $${precioTotal}`}</h4>
                            <div>
                                <p className="product-text-center">Cantidad:</p>
                                <input className="cantidad" type="number" placeholder="0" onChange={(e) => e.target.value > 0 && e.target.value <= producto.stock ? setPrecioTotal(e.target.value * precioInicial) : e.target.value = 1}></input>
                                <p className={producto.stock > 0 ? "product-text-center" : "product-text-center red-text"}>{producto.stock > 0 ? `Stock: ${producto.stock}` : "No hay stock"}</p>
                            </div>
                            <div className="buttons-container">
                                <button className="product-button" type="submit" onClick={() => agregarAlCarrito()}>
                                    <i className="bi bi-cart-plus m-1"></i>
                                    Agregar al carrito
                                </button>
                                <button className="product-button">Comprar</button>
                            </div>
                        </div>
                    </div>
                )
                : <div></div>
            }
        </>
    );
}

export default ProductView;