import "./SecondaryNavbar.css";
import { Link, useNavigate } from "react-router-dom";

const SecondaryNavbar = ({categorias}) => {
    const navigate = useNavigate();

    return ( 
        <div className="secondary-navbar">
            <nav className="secciones-buttons">
                {
                    categorias !== undefined && categorias.length > 0 ?
                    <h2 className="secciones-title">Categorias:</h2>
                    : <div></div>
                }
                {
                    categorias !== undefined && categorias.length > 0 ?
                    categorias.map(categoria =>
                        <Link to={`/productos/${categoria.seccion}`} key={categoria.id} className="desktop-tablet-sections">
                            <button className="seccion-button">{categoria.seccion}</button>
                        </Link>
                    )
                    : <div></div>
                }
                {
                    categorias !== undefined && categorias.length > 0 ?
                    <select className="mobile-sections" name="Categorias">
                        {
                            categorias.map(categoria =>
                                <option key={categoria.id} value={categoria.seccion} onClick={() => navigate(`/productos/${categoria.seccion}`)}>
                                    {categoria.seccion}
                                </option>
                            )
                        }
                    </select>
                    : <div></div>
                }
            </nav>
            {/*<div className="search-bar">
                <input type="text" placeholder="Buscar" className="search-input"></input>
                <button className="search-button">Buscar</button>
            </div>*/}
        </div>
    );
}

export default SecondaryNavbar;