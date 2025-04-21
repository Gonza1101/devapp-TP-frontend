import React from 'react';
import { useNavigate } from 'react-router-dom';
import Persona from '../Model/Persona';
import Auto from '../Model/Auto';
import '../CSS/botenesAccion.css';

type accionProps = {
    persona: Persona | undefined;
    auto: Auto | undefined;
};
export const ColumnaAccion: React.FC<accionProps> = ({ persona, auto }) => {
    const navegarA = useNavigate();

    const accionVerPersona = () => {
        navegarA(`/persona/${persona!.dni}`); // =>VerPersona
    };
    const accionEditarPersona = () => {
        navegarA('/persona');
    };
    const accionBorrar = () => {};

    return (
        <>
            <div className="botonesAccion">
                <button className="ver" onClick={accionVerPersona}>
                    🔍
                </button>
                <button className="editar" onClick={accionEditarPersona}>
                    📝
                </button>
                <button className="borrar" onClick={accionBorrar}>
                    🔫
                </button>
            </div>
        </>
    );
};
