import { Link } from 'react-router-dom';
import '../CSS/style.css';

export const InicioPage = () => {
    return (
        <>
            <div className="inicio">
                <p>Bienvenido a la APP de Personas | Autos & Personas[Autos]</p>
                <Link to={'/personas'}>Personas </Link>
                <Link to={'/autos'}> Autos</Link>
            </div>
        </>
    );
};
