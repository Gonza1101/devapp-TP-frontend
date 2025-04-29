import Persona from '../Model/Persona';
import { ColumnaAccion } from './ColumnaAccion';

type cardPersonaProps = {
    persona: Persona;
    accionVer: (id: string) => void;
    accionEditar: (id: string) => void;
    accionEliminar: (id: string) => void;
};
export const CardPersona: React.FC<cardPersonaProps> = ({ persona, accionVer, accionEditar, accionEliminar }) => {
    const botonVer = () => {
        if (persona) {
            accionVer(persona.dni!);
        }
    };
    const botonEditar = () => {
        accionEditar(persona.id!);
    };
    const botonEliminar = () => {
        accionEliminar(persona.id!);
    };
    return (
        <>
            <div className="filaPersona">
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="alternatetext" />
                <div className="filaCuerpo">
                    <p>{persona.nombre}</p>
                    <p>{persona.apellido}</p>
                    <p>{persona.dni}</p>
                </div>
                <ColumnaAccion
                    key={persona.id}
                    tipo={'persona'}
                    botonVer={botonVer}
                    botonEditar={botonEditar}
                    botonEliminar={botonEliminar}
                ></ColumnaAccion>
            </div>
        </>
    );
};
