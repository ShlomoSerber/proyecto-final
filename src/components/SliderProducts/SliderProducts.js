import './SliderProducts.css'
import Slider from "react-slick";
import CardSlider from '../CardSlider';
const SliderProducts = ({ productos }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <>
            <div className='slider-no-responsive'>
                <Slider {...settings}>
                    {productos.map(prod => (
                        <div key={prod.id} className='d-flex justify-content-evenly flex-wrap'>
                            <CardSlider {...prod} />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='slider-responsive'>
                <div className='d-flex justify-content-evenly'>
                    {productos.map(prod => (
                        <div key={prod.id}>
                            <CardSlider {...prod} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SliderProducts;