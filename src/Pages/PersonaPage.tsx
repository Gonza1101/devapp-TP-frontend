import { useState, useEffect } from 'react';
import { listarPersona } from '../API/Persona/listarPersonas';
import Persona from '../Model/Persona';
import { ListarPersona } from '../Components/Listado';

export const PersonaPage = () => {
    const [lista, setLista] = useState<Persona[]>([]);

    const obtenerLista = async () => {
        const personas = await listarPersona();
        setLista(personas);
    };

    const agregarPersonaNueva = () => {
        return 'agregar';
    };

    useEffect(() => {
        obtenerLista();
    }, []);
    return (
        <>
            <div>
                <h2>Titulo PERSONA</h2>
                <h3>Todas las Personas </h3>
                <button onClick={agregarPersonaNueva}>Agregar Nuevo (en verde)</button>
                <ListarPersona key={lista.length} personas={lista} />
            </div>
        </>
    );
};
