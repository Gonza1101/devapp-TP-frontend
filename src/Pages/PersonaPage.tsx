import { useState, useEffect } from 'react';
import { listarPersonas } from '../API/Persona/listarPersonas';
import Persona from '../Model/Persona';
import { Listado } from '../Components/Listado';
import { useNavigate } from 'react-router-dom';

export const PersonaPage = () => {
    const [lista, setLista] = useState<Persona[]>([]);
    const navegarA = useNavigate();

    const obtenerLista = async () => {
        const personas = await listarPersonas();
        setLista(personas);
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
                    <Listado key={lista.length} listaPersonas={lista} listaAutos={undefined} />
                    <button className="agregarPersona" onClick={agregarPersonaNueva}>
                        🙋‍♂️ Agregar Persona 🙋‍♀️
                    </button>
                </div>
            </div>
        </>
    );
};
