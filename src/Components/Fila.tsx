import React from 'react';
import Persona from '../Model/Persona';
import Auto from '../Model/Auto';
import { ColumnaAccion } from './ColumnaAccion';
import '../CSS/listadoFila.css';

type filaProps = {
    persona?: Persona;
    auto?: Auto;
};

export const Fila: React.FC<filaProps> = ({ persona, auto }) => {
    return (
        <>
            {persona ? (
                <div className="filaPersona">
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="alternatetext" />
                    <div className="filaCuerpo">
                        <p>{persona.nombre}</p>
                        <p>{persona.apellido}</p>
                        <p>{persona.dni}</p>
                    </div>
                    <ColumnaAccion key={persona!.dni} persona={persona} auto={auto}></ColumnaAccion>
                </div>
            ) : (
                <div className="filaAuto">
                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="alternatetext" />
                    <div className="filaCuerpo">
                        <p> {auto?.marca}</p>
                        <p>{auto?.modelo}</p>
                        <p>{auto?.anio}</p>
                        <p>{auto?.patente}</p>
                    </div>
                    <ColumnaAccion key={auto!.patente} persona={persona} auto={auto}></ColumnaAccion>
                </div>
            )}
        </>
    );
};
