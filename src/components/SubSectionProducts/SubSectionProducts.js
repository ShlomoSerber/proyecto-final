import { useContext } from "react";
import "./SubSectionProducts.css"
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../store/productsContext";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import Products from "../Products/Products";

function SubSectionProducts() {
    const { productos } = useContext(ProductsContext);
    const { subSeccionParam } = useParams();

    const productosSubSeccion = productos.length > 0 ? productos.filter(producto => producto.subSeccion === subSeccionParam) : [];

    return ( 
        <>
            <SecondaryNavbar categorias={[]}/>
            <h1 className="productos-title">{subSeccionParam}</h1>
            <Products productos={productosSubSeccion}/>
        </> 
    );
}

export default SubSectionProducts;