import './Home.css'
import { Link } from 'react-router-dom';
import Carrousel from '../Carrousel';
import Card from '../Card';
import Alimentos from '../../assets/images/Alimentos.jpg'
import Limpieza from '../../assets/images/Limpieza.jpg'
import Hogar from '../../assets/images/Hogar.jpg'

const Home = () => {

    const tipoProductos = [
        { id: 1, nombre: 'Alimentos', urlImage: Alimentos },
        { id: 2, nombre: 'Limpieza', urlImage: Limpieza },
        { id: 3, nombre: 'Hogar', urlImage: Hogar }
        
    ]

    return (
        <>
            <div className='carrouselAndButton'>
                <Carrousel />
                <div className='d-flex justify-content-center'>
                    <Link to='/productos' className='m-3'><button className='carrousel-button'><h5 className='no-padding-margin'>Empezá a Comprar</h5></button></Link>
                </div>
            </div>

            <div>
                <div className='containerCardsTypeProducts containerGlobal'>
                    <h3 className='text-center'>Nuestros Productos</h3>
                    <div className='container-product-cards'>
                        {tipoProductos.map(tipo => (
                            <div key={tipo.id} className='mt-5'>
                                <Card  {...tipo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className='containerCardsOnSaleProducts containerGlobal'>
                    <h3 className='text-center'>Nuestras Ofertas no te las pierdas</h3>
                    <div className='container-product-cards'>
                        {tipoProductos.map(tipo => (
                            <div key={tipo.id} className='mt-5'>
                                <Card  {...tipo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className='containerCardsTypeProducts containerGlobal'>
                    <h3 className='text-center'>Nuestros Productos</h3>
                    <div className='container-product-cards'>
                        {tipoProductos.map(tipo => (
                            <div key={tipo.id} className='mt-5'>
                                <Card  {...tipo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;