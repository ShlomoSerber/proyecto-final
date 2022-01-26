import { useContext, useEffect } from "react";
import "./ProductView.css"
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../store/productsContext";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import ThirdNavbar from "../ThirdNavbar/ThirdNavbar";

function ProductView() {
    const { productos, secciones } = useContext(ProductsContext);
    const { id } = useParams();
    const objetoProducto = productos.length > 0 ? productos.filter(producto => producto.id == id) : [];

    const subSecciones =
    secciones.length > 0 ?
    id !== undefined ?
    secciones.filter(seccion => seccion.seccion == objetoProducto[0].seccionPrincipal)
    : []
    : [];

    let precioTotal = 0;
    const setPrecioTotal = cantidad => {
        console.log(cantidad);
        console.log(parseInt(precioTotal) * parseInt(cantidad))
        precioTotal = objetoProducto.length > 0 ? objetoProducto[0].precio * parseInt(cantidad) : 0;
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
                                <p className="product-text">{`Cantidad: ${producto.cantidad}`}</p>
                                <p className="product-text">{producto.oferta ? "En oferta: Si" : "En oferta: No"}</p>
                                <h4 className="product-title">{`Precio: $${producto.precio}`}</h4>
                            </div>  
                        </div>     
                        <div className="add-cart-card">
                            <h4 className="add-cart-card-title">{`Precio total: $${precioTotal}`}</h4>
                            <div>
                                <input className="cantidad" type="number" placeholder="0" onChange={(e) => e.target.value > 1 && e.target.value <= producto.stock ? setPrecioTotal(e.target.value) : e.target.value = 1}></input>
                                <p className="product-text">{producto.stock > 0 ? `Stock: ${producto.stock}` : "No hay stock"}</p>
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