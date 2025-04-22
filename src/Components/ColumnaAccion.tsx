import React, { useEffect, useState } from 'react';
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
    const [tipo, setTipo] = useState<string>('');

    const definirTipo = (persona: Persona | undefined) => {
        if (persona) {
            setTipo('persona');
        } else {
            setTipo('auto');
        }
    };

    const accionVer = () => {
        if (tipo === 'persona') {
            navegarA(`/persona/${persona!.dni}`); // =>VerPersona
        } else {
            navegarA(`/auto/${auto?.id}`);
        }
    };
    const accionEditar = () => {
        if (tipo === 'persona') {
            navegarA(`/persona/edit/${persona!.id}`); // =>EditarPersona
        } else {
            navegarA('/auto');
        }
    };
    const accionBorrar = () => {};

    useEffect(() => {
        definirTipo(persona);
    }, []);

    return (
        <>
            <div className="botonesAccion">
                <button className="ver" onClick={accionVer}>
                    🔍
                </button>
                <button className="editar" onClick={accionEditar}>
                    📝
                </button>
                <button className="borrar" onClick={accionBorrar}>
                    🔫
                </button>
            </div>
        </>
    );
};
