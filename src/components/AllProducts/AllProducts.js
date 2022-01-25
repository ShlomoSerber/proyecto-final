import { useContext } from "react";
import "./AllProducts.css"
import { ProductsContext } from "../../store/productsContext";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import Products from "../Products/Products";

function AllProducts() {
    const { productos, secciones } = useContext(ProductsContext);

    return (
        <div>
            <SecondaryNavbar categorias={secciones}/>
            <h1 className="productos-title">Productos</h1>
            <Products productos={productos}/>
        </div>
    );
}

export default AllProducts;