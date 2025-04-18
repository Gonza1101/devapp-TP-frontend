import { useState, useEffect } from 'react';
import { listarPersona } from '../API/Persona/listarPersonas';
import Persona from '../Model/Persona';
import { Listado } from '../Components/Listado';
import { useNavigate } from 'react-router-dom';

export const PersonaPage = () => {
    const [lista, setLista] = useState<Persona[]>([]);
    const navegarA = useNavigate();

    const obtenerLista = async () => {
        const personas = await listarPersona();
        setLista(personas);
    };

    const agregarPersonaNueva = () => {
        navegarA('/persona');
    };

    useEffect(() => {
        obtenerLista();
    }, []);
    return (
        <>
            <div>
                <h2>Titulo PERSONA</h2>
                <h3>Todas las Personas</h3>
                <button onClick={agregarPersonaNueva}>Agregar Nuevo (en verde)</button>
                <Listado key={lista.length} listaPersonas={lista} listaAutos={undefined} />
            </div>
        </>
    );
};
