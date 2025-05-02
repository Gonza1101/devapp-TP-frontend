import { useEffect, useState } from 'react';
import Persona from '../../Model/Persona';
import { listarPersonas } from '../../API/Persona/listarPersonas';
import { useNavigate } from 'react-router-dom';
import { deletePersona } from '../../API/Persona/deletePersona';
import { CardPersona } from './CardPersona';
import { BotonAccion } from '../Botones/botonAccion';

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
            <div className="listado">
                <p>PERSONA</p>
                <div className="listado">
                    {personas.map((p) => (
                        <div className="filaPersona">
                            <CardPersona
                                key={p.id}
                                persona={p}
                                accionVer={ver}
                                accionEditar={editar}
                                accionEliminar={eliminar}
                            />
                        </div>
                    ))}
                </div>
                <BotonAccion key={'agregar'} txt={'🙋‍♂️ Agregar Persona 🙋‍♀️'} clase={'agregar'} accion={agregarPersona} />
            </div>
        </>
    );
};
