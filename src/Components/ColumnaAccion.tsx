import React from 'react';
import { useNavigate } from 'react-router-dom';
import Persona from '../Model/Persona';

type accionProps = {
    persona: Persona;
};
export const ColumnaAccion: React.FC<accionProps> = ({ persona }) => {
    const navegarA = useNavigate();

    const accionVer = () => {
        navegarA(`/persona/${persona.dni}`);
    };
    const accionEditar = () => {
        navegarA('/persona');
    };
    const accionBorrar = () => {};

    return (
        <>
            <div>
                <button onClick={accionVer}>Ver (azul)</button>
                <button onClick={accionEditar}>Editar (amarillo)</button>
                <button onClick={accionBorrar}>Borrar(rojo)</button>
            </div>
        </>
    );
};
