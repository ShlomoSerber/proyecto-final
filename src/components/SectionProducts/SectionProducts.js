import { useContext } from "react";
import "./SectionProducts.css"
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../store/productsContext.js";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import ProductCard from "../ProductCard/ProductCard";

function SectionProducts() {
    const { productos, secciones } = useContext(ProductsContext);
    const { seccionParam } = useParams();

    const seccionPrincipal = secciones.length > 0 ? secciones.filter(seccion => seccion.seccion === seccionParam) : [];
    const productosSeccion = productos.length > 0 ? productos.filter(producto => producto.seccionPrincipal === seccionParam) : [];

    return ( 
        <div className="background-color">
            <SecondaryNavbar categorias={seccionPrincipal[0].subSecciones}/>
            <h1 className="productos-title">{seccionParam}</h1>
            <ProductCard productos={productosSeccion}/>
        </div> 
    );
}

export default SectionProducts;