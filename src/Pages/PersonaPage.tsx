import { useState, useEffect } from 'react';
import { listarPersonas } from '../API/Persona/listarPersonas';
import Persona from '../Model/Persona';
import { Listado } from '../Components/Listado';
import { useNavigate } from 'react-router-dom';
import { deletePersona } from '../API/Persona/deletePersona';

export const PersonaPage = () => {
    const [lista, setLista] = useState<Persona[]>([]);

    const navegarA = useNavigate();

    const obtenerLista = async () => {
        const personas: Persona[] = await listarPersonas();
        setLista(personas);
    };
    const verPersona = (id: string) => {
        navegarA(`/persona/${id}`);
    };
    const editarPersona = (id: string) => {
        navegarA(`/persona/edit/${id}`);
    };
    const eliminarPersona = (id: string) => {
        deletePersona(id);
        obtenerLista();
    };
    const agregarPersonaNueva = () => {
        navegarA('/persona/add');
    };

    useEffect(() => {
        obtenerLista();
    }, []);
    return (
        <>
            <div className="inicio">
                <div className="listado">
                    <p>PERSONA</p>
                    <Listado
                        key={lista.length}
                        listaPersonas={lista}
                        listaAutos={undefined}
                        ver={verPersona}
                        editar={editarPersona}
                        eliminar={eliminarPersona}
                    />
                    <button className="agregarPersona" onClick={agregarPersonaNueva}>
                        🙋‍♂️ Agregar Persona 🙋‍♀️
                    </button>
                </div>
            </div>
        </>
    );
};
