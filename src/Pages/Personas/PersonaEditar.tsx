import Persona from '../../Model/Persona';
import { useEffect, useState } from 'react';
import { personaConId } from '../../API/Persona/persocaConId';
import { EdicionPersona } from '../../Components/Persona/EdicionPersona';
import { useParams } from 'react-router-dom';
import '../../CSS/formulario.css';

export const EditarPersona = () => {
    const { idPersona } = useParams<{ idPersona: string }>();
    const [persona, setPersona] = useState<Persona>();

    const obtenePersonaConId = async (idPersona: string) => {
        const response = await personaConId(idPersona);
        setPersona(response);
    };

    useEffect(() => {
        obtenePersonaConId(idPersona!);
    }, [idPersona]);

    return <>{idPersona ? <EdicionPersona key={idPersona} persona={persona!} /> : null}</>;
};
