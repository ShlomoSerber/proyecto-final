import { useContext } from "react";
import "./SubSectionProducts.css"
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../store/productsContext";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import ProductCard from "../ProductCard/ProductCard";

function SubSectionProducts() {
    const { productos } = useContext(ProductsContext);
    const { subSeccionParam } = useParams();

    const productosSubSeccion = productos.length > 0 ? productos.filter(producto => producto.subSeccion === subSeccionParam) : [];

    return ( 
        <div className="background-color">
            <SecondaryNavbar categorias={[]}/>
            <h1 className="productos-title">{subSeccionParam}</h1>
            <ProductCard productos={productosSubSeccion}/>
        </div> 
    );
}

export default SubSectionProducts;