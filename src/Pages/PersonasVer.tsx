import { DetallePersona } from '../Components/Persona/DetallePersona';
import { useParams } from 'react-router-dom';
export const VerPersona = () => {
    const { dni } = useParams<{ dni: string }>();
    // const [persona, setPersona] = useState<Persona>();

    // const personaConDni = async () => {
    //     const response = await buscarPersonaConDni(dni!);
    //     setPersona(response);
    // };
    // const eliminar = (idAuto: string) => {
    //     patchAuto(persona?.id, idAuto);
    // };
    //las dependencia que se agregan en [] son la que useEffect
    // debe tener en cuenta para un eventual cambio y actualizar

    return <> {dni ? <DetallePersona key={dni} dni={dni}></DetallePersona> : null}</>;
};
