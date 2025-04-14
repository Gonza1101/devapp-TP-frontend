import React from 'react';
import Persona from '../Model/Persona';
import { Fila } from './Fila';

type listarProps = {
    personas: Persona[];
};

export const Listar: React.FC<listarProps> = ({ personas }) => {
    return (
        <>
            <h2>Aca va el listado del array que me llegue</h2>
            {/* TODO Mapear el listado y mandar cada objeto a Fila.sx */}
            {personas.map((p) => (
                <Fila key={p.dni} persona={p} />
            ))}
        </>
    );
};
