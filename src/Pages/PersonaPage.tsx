import { useState, useEffect } from 'react';
import { listarPersona } from '../API/Persona/listarPersonas';
import Persona from '../Model/Persona';
import { Listado } from '../Components/Listado';
import { useNavigate } from 'react-router-dom';
import '../CSS/style.css';

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
                <button className="agregarPersona" onClick={agregarPersonaNueva}>
                    Agregar Nuevo (en verde)
                </button>
                <p>Lista de Personas</p>
                <Listado key={lista.length} listaPersonas={lista} listaAutos={undefined} />
            </div>
        </>
    );
};
