import React from 'react';
import Persona from '../Model/Persona';
import { ColumnaAccion } from './ColumnaAccion';

type filaProps = {
    persona: Persona;
};
export const Fila: React.FC<filaProps> = ({ persona }) => {
    return (
        <>
            <div>
                <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="alternatetext" />
                <h3>Nombre: {persona.nombre}</h3>
                <h3>Apellido: {persona.apellido}</h3>
                <h3>DNI: {persona.dni}</h3>
                <ColumnaAccion key={persona.dni} persona={persona}></ColumnaAccion>
            </div>
        </>
    );
};
