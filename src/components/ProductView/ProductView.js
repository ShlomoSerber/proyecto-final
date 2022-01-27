import { useContext, useEffect, useState } from "react";
import "./ProductView.css"
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../store/productsContext";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import ThirdNavbar from "../ThirdNavbar/ThirdNavbar";
import Alert from '@mui/material/Alert';
import { UsersContext } from "../../store/usersContext";

const ProductView = () => {
    const { id } = useParams();
    const { productos, secciones, setProductos} = useContext(ProductsContext);
    const {usuarios, setUsuarios, currentUser, setCurrentUser} = useContext(UsersContext)
    const { carrito, setCarrito, cantProdCarrito, setCantProdCarrito } = useContext(UsersContext)
    
    const objetoProducto = productos.length > 0 ? productos.filter(producto => producto.id == id) : [];
    
    let precioInicial = objetoProducto.length > 0 ? objetoProducto[0].stock > 0 ? objetoProducto[0].precio : 0 : 0;
    
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadProd, setCantidad] = useState(0)
    const [mostrarExito, setMostrarExito] = useState(false)
    
    const subSecciones =
        secciones.length > 0 ?
            id !== undefined ?
                secciones.filter(seccion => seccion.seccion == objetoProducto[0].seccionPrincipal)
                : []
            : [];

    const agregarAlCarrito = () => {
        let cantP = yaEstaEnElCarrito() 
        if(cantP !== undefined){
            let restoDeCants = cantProdCarrito.filter(cant => cant.id != id)
            restoDeCants.unshift({cantidad: (parseInt(cantP.cantidad) + parseInt(cantidadProd)), id: parseInt(id)})
            setCantProdCarrito(restoDeCants)
        }else{
            setCarrito([...carrito, ...objetoProducto])
            setCantProdCarrito([...cantProdCarrito, {cantidad: parseInt(cantidadProd), id: parseInt(id)}])
        }
        restarStock()
        setMostrarExito(true)
        setCantidad(0)
        setPrecioTotal(0)
    }

    const yaEstaEnElCarrito = () => {
        return cantProdCarrito.find(cant => cant.id == id)
    }

    const restarStock = () => {
        objetoProducto[0].stock -= cantidadProd
        let restoDeProductos = productos.filter(producto => producto.id != id)
        restoDeProductos.unshift(objetoProducto[0])
        setProductos(restoDeProductos)
    }

    useEffect(() => {
        localStorage.setItem("productos", JSON.stringify(productos))
    },[productos])


    useEffect(() => {
        if(mostrarExito){
            setTimeout(() => {
                setMostrarExito(false)
            }, 3000);
        }
    },[mostrarExito])

    const setVarios = (e) => {
        setCantidad(e.target.value)
        setPrecioTotal(precioInicial * e.target.value)
    }

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
                                {
                                    mostrarExito ? 
                                    <Alert className="alert" severity="success">Agregado al carrito!</Alert>
                                    : ""
                                }
                            </div>  
                        </div>     
                        <div className="add-cart-card">
                            <h4 className="add-cart-card-title">{`Precio total: $${precioTotal}`}</h4>
                            <div>
                                <p className="product-text-center">Cantidad:</p>
                                <input value={cantidadProd} className="cantidad" type="number" placeholder="0" onChange={(e) => setVarios(e)}></input>
                                <p className={producto.stock > 0 ? "product-text-center" : "product-text-center red-text"}>{producto.stock > 0 ? `Stock: ${producto.stock}` : "No hay stock"}</p>
                            </div>
                            <div className="buttons-container">
                                <button disabled={cantidadProd == 0} className="product-button" type="submit" onClick={() => agregarAlCarrito()}>
                                    <i className="bi bi-cart-plus m-1"></i>
                                    Agregar al carrito
                                </button>
                                {/* <button className="product-button">Comprar</button> */}                            
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