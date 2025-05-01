import { useEffect, useState } from 'react';
import { Listado } from '../Listado';
import Persona from '../../Model/Persona';
import { listarPersonas } from '../../API/Persona/listarPersonas';
import { useNavigate } from 'react-router-dom';
import { deletePersona } from '../../API/Persona/deletePersona';

export const PersonaComponente = () => {
    const navegarA = useNavigate();
    const [personas, setpersona] = useState<Persona[]>([]);
    const listado = async () => {
        const personas = await listarPersonas();
        setpersona(personas);
    };
    const agregarPersona = () => {
        navegarA('/persona/add');
    };
    const ver = (dniPersona: string) => {
        navegarA(`/persona/${dniPersona}`);
    };
    const editar = (idPersona: string) => {
        navegarA(`/persona/edit/${idPersona}`);
    };
    const eliminar = async (idPersona: string) => {
        const rtaEliminar = await deletePersona(idPersona);
        if (rtaEliminar.status === 200) {
            alert('Eliminado');
        } else {
            alert('Ocurrio un Error');
        }
    };

    useEffect(() => {
        listado();
    }, [personas]);
    return (
        <>
            <div className="inicio">
                <div className="listado">
                    <p>PERSONA</p>
                    <Listado
                        key={'persona'}
                        tipo={'persona'}
                        listado={personas}
                        ver={ver}
                        editar={editar}
                        eliminar={eliminar}
                    />
                    <button className="agregarPersona" onClick={agregarPersona}>
                        🙋‍♂️ Agregar Persona 🙋‍♀️
                    </button>
                </div>
            </div>
        </>
    );
};
