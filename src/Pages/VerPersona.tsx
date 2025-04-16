import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscarPersonaConDni } from '../API/Persona/buscarPersona';
import Persona from '../Model/Persona';

export const VerPersona = () => {
    const { dni } = useParams<{ dni: string }>();
    // console.log(dni);
    const [persona, setPersona] = useState<Persona | undefined>(undefined);
    // console.log(persona);
    const obtenePersonaConDni = async (dniPersona: string) => {
        const response = await buscarPersonaConDni(dniPersona);
        setPersona(response);
    };
    useEffect(() => {
        console.log('Entre en useEffect');
        obtenePersonaConDni(dni!);
    }, [dni]);

    return (
        <>
            <div>
                <h2>Confirmamos que sos una Persona</h2>
                <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
                <h3>Nombre: {persona?.nombre}</h3>
                <h3>Apellido: {persona?.apellido}</h3>
                <h3>Dni: {persona?.dni}</h3>
                {/* <h3>Fecha de Nacimiento: {persona.fechaNacimiento}</h3> */}
                <h3>Genero: {persona?.genero}</h3>
                <h3>Donante: {persona?.esDonante}</h3>
                <div>
                    lista
                </div>
            </div>
        </>
    );
};
