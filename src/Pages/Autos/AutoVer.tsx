import { useParams } from 'react-router-dom';
import { DetalleAuto } from '../../Components/Auto/DetalleAuto';
import '../../CSS/listadoFila.css';
export const AutoVer = () => {
    const { miPatente } = useParams<{ miPatente: string }>();

    return <> {miPatente ? <DetalleAuto key={miPatente} patente={miPatente} /> : null}</>;
};
