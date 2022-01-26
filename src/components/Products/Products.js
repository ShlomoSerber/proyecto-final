import { useContext } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../store/productsContext";
import ThirdNavbar from "../ThirdNavbar/ThirdNavbar";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
    const { productos, secciones } = useContext(ProductsContext);

    // Los parametros de el Route (puede ser que sean undefined)
    const { seccionParam } = useParams();
    const { subSeccionParam } = useParams();

    // Los detalles y objetos de una seccion especifica (de nombre igual a seccionParam)
    const seccionDetalles = 
    secciones.length > 0 ? 
    seccionParam !== undefined ?
    secciones.filter(seccion => seccion.seccion == seccionParam) 
    : []
    : [];
    const seccionProductos = 
    productos.length > 0 ?
    seccionParam !== undefined ?
    productos.filter(producto => producto.seccionPrincipal == seccionParam) 
    : []
    : [];

    // Los productos de una subseccion especifica (de nombre igual a subSeccionParam)
    const subSeccionProductos = 
    productos.length > 0 ? 
    subSeccionParam !== undefined ?
    productos.filter(producto => producto.subSeccion == subSeccionParam)
    : []
    : [];

    console.log(seccionDetalles);

    return ( 
        <div className="background-color">
            <SecondaryNavbar categorias={secciones}/>
            <ThirdNavbar categorias={
                seccionParam !== undefined || subSeccionParam !== undefined ?
                seccionDetalles.length === 1 ?
                seccionDetalles[0].subSecciones
                : []
                : []
            }/>
            {
                
            }
            <h1 className="productos-title">{
                subSeccionParam !== undefined ?
                subSeccionParam
                : seccionParam !== undefined ?
                seccionParam
                : "Productos"
            }</h1>
            <ProductCard productos={
                subSeccionParam !== undefined ?
                subSeccionProductos
                : seccionParam !== undefined ?
                seccionProductos
                : productos
            }/>
        </div>
    );
}

export default Products;