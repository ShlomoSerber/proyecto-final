import "./ThirdNavbar.css";
import { Link, useNavigate } from "react-router-dom";

function ThirdNavbar({subCategorias}) {
    const navigate = useNavigate();

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
                        <Link to={`/productos/subSeccion/${subCategoria.seccion}`} key={subCategoria.id} className="desktop-tablet-sections">
                            <button className="subSeccion-button">{subCategoria.seccion}</button>
                        </Link>
                    )
                    : <div></div>
                }
                {
                    subCategorias.length > 0 ?
                    <select className="mobile-sections" name="subCategorias">
                        {
                            subCategorias.map(subCategoria =>
                                <option key={subCategoria.id} value={subCategoria.seccion} onClick={() => navigate(`/productos/subSeccion/${subCategoria.seccion}`)}>
                                    {subCategoria.seccion}
                                </option>
                            )
                        }
                    </select>
                    : <div></div>
                }
            </nav>
        </div>
    );
}

export default ThirdNavbar;