import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { personaConDni } from '../API/Persona/personaConDni';
import Persona from '../Model/Persona';

export const PersonaConDni = () => {
    const { dni } = useParams<{ dni: string }>();
    const [persona, setPersona] = useState<Persona>({});

    const obtenePersonaConDni = async (dni: string) => {
        const response = await personaConDni(dni);
        console.log(response);
        setPersona(response)
    };

    useEffect(() => {
        //obtenePersonaConDni(dni!);
    });

    return (
        <>
            <div>
                <h2>Confirmamos que sos una Persona</h2>
                <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
                <h3>Nombre: {persona.nombre}</h3>
                <h3>Apellido: {persona.apellido}</h3>
                <h3>Dni: {persona.dni}</h3>
                {/* <h3>Fecha de Nacimiento: {persona.fechaNacimiento}</h3> */}
                <h3>Genero: {persona.genero}</h3>
                <h3>Donante: {persona.esDonante}</h3>
            </div>
        </>
    );
};
