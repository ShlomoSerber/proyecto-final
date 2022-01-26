import './Carrousel.css'
import imagenSuper1 from '../../assets/images/imagenSuper_1.jpg'
import imagenSuper2 from '../../assets/images/imagenSuper_2.jpg'
import imagenSuper3 from '../../assets/images/imagenSuper_3.jpg'

const Carrousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{height: "450px"}} src={imagenSuper1} className="d-block w-100" alt="Imagen supermercado" />
                    </div>
                    <div className="carousel-item">
                        <img style={{height: "450px"}} src={imagenSuper2} className="d-block w-100" alt="Imagen supermercado2" />
                    </div>
                    <div className="carousel-item">
                        <img style={{height: "450px"}} src={imagenSuper3} className="d-block w-100" alt="ImagenSupermercado3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carrousel;