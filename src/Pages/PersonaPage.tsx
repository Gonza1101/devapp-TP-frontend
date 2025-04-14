import { useState } from 'react';
import { Listar } from '../Components/Listado';
import { listarPersona } from '../API/Persona/listarPersonas';
import Persona from '../Model/Persona';

export const PersonaPage = () => {
    const [lista, setLista] = useState<Persona[]>([]);
    const obtenerLista = async () => {
        const personas = await listarPersona();
        setLista(personas.personas);
    };
    // useEffect(() => {
    // });
    return (
        <>
            <h2>Estas son todas las Personas Titulo PERSONA</h2>
            <button onClick={obtenerLista}> Agregar Nuevo en VERDE</button>
            {/*TODO Ir a una Pantalla de Creacion de Persona */}
            <Listar key={lista.length} personas={lista} />
        </>
    );
};
