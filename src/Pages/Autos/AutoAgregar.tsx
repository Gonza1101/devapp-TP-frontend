import { useParams } from 'react-router-dom';
import { AgregarAuto } from '../../Components/Auto/agregarAuto';

export const AutoAgregar = () => {
    const { dniPersona } = useParams<{ dniPersona: string }>();

    return <>{dniPersona ? <AgregarAuto key={dniPersona} dniPersona={dniPersona} /> : null}</>;
};
