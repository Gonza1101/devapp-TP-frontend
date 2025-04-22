import { Link } from 'react-router-dom';
import '../CSS/paginaStyle.css';

export const InicioPage = () => {
    return (
        <>
            <div className="inicio">
                <p>Bienvenido a la APP de</p>
                <p>Personas | Autos & Personas[Autos]</p>
                <Link to={'/personas'}>Personas </Link>
                <Link to={'/autos'}> Autos</Link>
            </div>
        </>
    );
};
