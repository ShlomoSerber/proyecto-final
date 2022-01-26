import { Link } from "react-router-dom";
import "./ThirdNavbar.css";

function ThirdNavbar({subCategorias}) {
    return (
        <div className="third-navbar">
            <nav className="subSecciones-buttons">
                {
                    subCategorias.length > 0 ?
                    <h2 className="subSecciones-title">Sub-Categorias:</h2>
                    : <div></div>
                }
                {
                    subCategorias.length > 0 ?
                    subCategorias.map(subCategoria =>
                        <Link to={`/productos/subSeccion/${subCategoria.seccion}`} key={subCategoria.id}>
                            <button className="subSeccion-button">{subCategoria.seccion}</button>
                        </Link>
                    )
                    : <div></div>
                }
            </nav>
        </div>
    );
}

export default ThirdNavbar;