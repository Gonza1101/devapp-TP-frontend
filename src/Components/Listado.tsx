import Persona from '../Model/Persona';
import { Fila } from './Fila';

type listarProps = {
    personas: Persona[];
};

export const ListarPersona: React.FC<listarProps> = ({ personas }) => {
    return (
        <>
            <div>
                <h2>Aca va el listado del array que me llegue</h2>
                {personas.map((p) => (
                    <Fila key={p.dni} persona={p} />
                ))}
            </div>
        </>
    );
};
