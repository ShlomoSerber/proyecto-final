import "./SecondaryNavbar.css";
import { Link } from "react-router-dom";

const SecondaryNavbar = ({categorias}) => {

    return ( 
        <div className="secondary-navbar">
            <nav className="secciones-buttons">
                {
                    categorias.length > 0 ?
                    <h2 className="secciones-title">Categorias:</h2>
                    : <div></div>
                }
                {
                    categorias.length > 0 ?
                    categorias[0].seccionPrincipal === true
                    ? categorias.map(categoria =>
                        <Link to={`/productos/${categoria.seccion}`} key={categoria.id}>
                            <button className="seccion-button">{categoria.seccion}</button>
                        </Link>
                    )
                    : categorias.map(categoria =>
                        <Link to={`/productos/subSeccion/${categoria.seccion}`} key={categoria.id}>
                            <button className="seccion-button">{categoria.seccion}</button>
                        </Link>
                    )
                    : <div></div>
                }
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Buscar" className="search-input"></input>
                <button className="search-button">Buscar</button>
            </div>
        </div>
    );
}

export default SecondaryNavbar;