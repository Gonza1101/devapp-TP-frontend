import Persona from '../../Model/Persona';
import { ColumnaAccion } from '../ColumnaAccion';

type cardPersonaProps = {
    persona: Persona;
    accionVer?: (id: string) => void;
    accionEditar?: (id: string) => void;
    accionEliminar?: (id: string) => void;
};
export const CardPersona: React.FC<cardPersonaProps> = ({ persona, accionVer, accionEditar, accionEliminar }) => {
    const img = `https://rickandmortyapi.com/api/character/avatar/${persona.img}.jpeg`;
    const botonVer = () => {
        accionVer(persona.dni!);
    };
    const botonEditar = () => {
        accionEditar(persona.id!);
    };
    const botonEliminar = () => {
        accionEliminar(persona.id!);
    };
    return (
        <>
            <img src={img} alt="alternatetext" />
            <div className="filaCuerpo">
                <p>{persona.nombre}</p>
                <p>{persona.apellido}</p>
                <p>{persona.dni}</p>
            </div>
            <div>
                <ColumnaAccion
                    key={persona.id}
                    ver={true}
                    editar={true}
                    eliminar={true}
                    tipo={'persona'}
                    botonVer={botonVer}
                    botonEditar={botonEditar}
                    botonEliminar={botonEliminar}
                ></ColumnaAccion>
            </div>
        </>
    );
};
