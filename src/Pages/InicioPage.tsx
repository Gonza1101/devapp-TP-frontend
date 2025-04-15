import { Link } from 'react-router-dom';

export const InicioPage = () => {
    return (
        <>
            <div>
                <h2>Bienvenido a la APP de Personas | Autos & Personas[Autos]</h2>
                <Link to={'/personas'}>Personas </Link>
                <Link to={'/autos'}> Autos</Link>
            </div>
        </>
    );
};
