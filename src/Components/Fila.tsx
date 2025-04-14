import React from 'react';
import Persona from '../Model/Persona';

type filaProps = {
    persona: Persona;
};
export const Fila: React.FC<filaProps> = ({ persona }) => {
    //TODO hacer la tarjeta

    return (
        <>
            <h2>Nombre: {persona.nombre}</h2>
            <h2>Apellido: {persona.apellido}</h2>
        </>
    );
};
