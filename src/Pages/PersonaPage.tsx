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
            <div className="inicio">
                <p>PERSONA</p>
                {/* <button className="agregarPersona" onClick={agregarPersonaNueva}>
                    Agregar Persona
                </button> */}
                {/* <p>Lista de Personas</p> */}
            </div>
            <Listado key={lista.length} listaPersonas={lista} listaAutos={undefined} />
            <div className="inicio">
                <button className="agregarPersona" onClick={agregarPersonaNueva}>
                    Agregar Persona
                </button>
            </div>

        </>
    );
};
