import { useNavigate } from 'react-router-dom';

export const InicioPage = () => {
    const navigate = useNavigate();
    const verPersonas = () => {
        navigate('/personas');
    };

    const verAutos = () => {
        navigate('/autos');
    };
    return (
        <>
            <h2>Bienvenido a la APP de Personas | Autos & Personas[Autos]</h2>
            <button onClick={verPersonas}>Persona</button>
            <button onClick={verAutos}>Auto</button>
        </>
    );
};
