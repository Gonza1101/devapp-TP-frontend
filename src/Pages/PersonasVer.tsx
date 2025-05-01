import { DetallePersona } from '../Components/Persona/DetallePersona';
import { useParams } from 'react-router-dom';
export const VerPersona = () => {
    const { dni } = useParams<{ dni: string }>();

    return <> {dni ? <DetallePersona key={dni} dni={dni}></DetallePersona> : null}</>;
};
