import React from 'react';
import Persona from '../Model/Persona';
import { Link } from 'react-router-dom';
type accionProps = {
    persona: Persona;
};
export const ColumnaAccion: React.FC<accionProps> = ({ persona }) => {

    const accionVer = () => {};
    const accionEditar = () => {};
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
