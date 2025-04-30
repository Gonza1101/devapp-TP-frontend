import { useEffect, useState } from 'react';
import { buscarPersonaConDni } from '../API/Persona/buscarPersona';
import Persona from '../Model/Persona';
import { DetallePersona } from '../Components/Persona/DetallePersona';
import { useParams } from 'react-router-dom';

export const VerPersona = () => {
    const { dni } = useParams<{ dni: string }>();
    const [persona, setPersona] = useState<Persona>();

    const personaConDni = async () => {
        const response = await buscarPersonaConDni(dni!);
        setPersona(response);
    };
    //las dependencia que se agregan en [] son la que useEffect
    // debe tener en cuenta para un eventual cambio y actualizar
    useEffect(() => {
        personaConDni();
    }, [dni]);

    return <> {dni ? <DetallePersona key={dni} persona={persona!}></DetallePersona> : null}</>;
};
