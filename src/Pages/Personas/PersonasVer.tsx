import { DetallePersona } from '../../Components/Persona/DetallePersona';
import { useParams } from 'react-router-dom';
import '../../CSS/listadoFila.css';
export const VerPersona = () => {
    const { dni } = useParams<{ dni: string }>();

    return <DetallePersona key={dni} dni={dni!} />;
};
