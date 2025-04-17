import React from 'react';
import Persona from '../Model/Persona';
import Auto from '../Model/Auto';
import { ColumnaAccion } from './ColumnaAccion';

type filaProps = {
    persona?: Persona;
    auto?: Auto;
};
export const Fila: React.FC<filaProps> = ({ persona, auto }) => {
    return (
        <>
            {persona !== undefined ? (
                <div>
                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="alternatetext" />
                    <h3>Nombre: {persona.nombre}</h3>
                    <h3>Apellido: {persona.apellido}</h3>
                    <h3>DNI: {persona.dni}</h3>
                    <ColumnaAccion key={persona!.dni} persona={persona} auto={auto}></ColumnaAccion>
                </div>
            ) : (
                <div>
                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="alternatetext" />
                    <h3>Patente: {auto!.papente}</h3>
                    <h3>Marca: {auto!.marca}</h3>
                    <h3>Modelo: {auto!.modelo}</h3>
                    <h3>Año:{auto!.año}</h3>
                    <ColumnaAccion key={auto!.papente} persona={persona} auto={auto}></ColumnaAccion>
                </div>
            )}
        </>
    );
};
