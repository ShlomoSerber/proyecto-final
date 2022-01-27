import { Link, useParams } from 'react-router-dom';
import './Card.css'


const Card = ({seccion, urlImagen}) => {
    
    return (
        <>
            {/* ver parametros del router me tira undefined */}
            <div style={{width: '18rem'}}>
                <Link to={`/productos/${seccion}`}> <img className='imgCard shadow' src={urlImagen} alt={seccion}/> </Link>
                <p className='pNombre text-center'>{seccion}</p>
            </div>
        </>
    );
}

export default Card;