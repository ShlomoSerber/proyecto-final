import { useContext } from "react";
import "./AllProducts.css"
import { ProductsContext } from "../../store/productsContext";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import ProductCard from "../ProductCard/ProductCard";

function AllProducts() {
    const { productos, secciones } = useContext(ProductsContext);

    return (
        <div className="background-color">
            <SecondaryNavbar categorias={secciones}/>
            <h1 className="productos-title">Productos</h1>
            <ProductCard productos={productos}/>
        </div>
    );
}

export default AllProducts;