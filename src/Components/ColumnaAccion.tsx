import React from 'react';
import { useNavigate } from 'react-router-dom';
import Persona from '../Model/Persona';
import Auto from '../Model/Auto';

type accionProps = {
    persona: Persona | undefined;
    auto: Auto | undefined;
};
export const ColumnaAccion: React.FC<accionProps> = ({ persona, auto }) => {
    const navegarA = useNavigate();

    const accionVer = () => {
        navegarA(`/persona/${persona!.dni}`); // =>VerPersona
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
