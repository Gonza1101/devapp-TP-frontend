import Persona from '../Model/Persona';
import { Fila } from './FilaPersona';

type listarProps = {
    lista: Persona[];
};

export const ListarPersona: React.FC<listarProps> = ({ lista }) => {
    return (
        <>
            <div>
                <h2>Listado de Personas Registradas</h2>
                {lista.map((p) => (
                    <Fila key={lista.length} persona={p} />
                ))}
            </div>
        </>
    );
};
