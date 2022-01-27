import { Link } from 'react-router-dom';
import './CardSlider.css'

const CardSlider = ({ nombre, urlImagen, descripcionChica, precio, stock, id}) => {
    return (
        <>
            {/* <div className="card" style={{ width: '18rem' }}>
                <img style={{ height: '250px' }} className="card-img-top" src={`${urlImagen}`} alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}

            <Link to={`productos/producto/${id}`} className="producto-card">
                <img src={urlImagen} className="producto-imagen" alt="" />
                <div className="producto-text">
                    <h5 className="producto-title">{nombre}</h5>
                    <p className="producto-description">{descripcionChica}</p>
                    <p className="producto-description">{`Precio: $${precio}`}</p>
                    {
                        stock === 0 ?
                            <p className="producto-no-stock">No hay Stock</p>
                            : <div></div>
                    }
                </div>
            </Link>
        </>
    );
}

export default CardSlider; 