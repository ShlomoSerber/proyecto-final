import { useContext } from "react";
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

    return (
        <div>
            <SecondaryNavbar categorias={secciones}/>
            <ThirdNavbar subCategorias={
                subSecciones.length > 0 ? 
                subSecciones[0].subSecciones
                : []
            }/>
            <div className="product-view-background">
                <div className="product-image-and-text">
                    <img className="product-view-image" src={objetoProducto.length > 0 ? objetoProducto[0].urlImagen : []} alt=""></img>
                    <div className="product-details">
                        <h2 className="product-title">{objetoProducto.length > 0 ? objetoProducto[0].nombre : ""}</h2>
                        <h3 className="product-title">{objetoProducto.length > 0 ? objetoProducto[0].descripcionChica : ""}</h3>
                    </div>
                    
                </div>     
                <div>
                    {/*Add to cart */}
                </div>
            </div>
        </div>
    );
}

export default ProductView;