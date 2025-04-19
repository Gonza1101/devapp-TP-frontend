import React from 'react';
import { useNavigate } from 'react-router-dom';
import Persona from '../Model/Persona';
import Auto from '../Model/Auto';
import '../CSS/style.css';

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
            <div className="botonesAccion">
                <button className="ver" onClick={accionVer}>
                    Ver
                </button>
                <button className="editar" onClick={accionEditar}>
                    Editar
                </button>
                <button className="borrar" onClick={accionBorrar}>
                    Borrar
                </button>
            </div>
        </>
    );
};
