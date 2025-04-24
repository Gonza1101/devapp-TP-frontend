import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Persona from '../Model/Persona';
import Auto from '../Model/Auto';
import '../CSS/botenesAccion.css';
import { BorrarComponente } from './BorrarComponente';
import { deletePersona } from '../API/Persona/deletePersona';

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
    const borrarEntidad = async (idPersona: string) => {
        const response = await deletePersona(idPersona);
        return response;
    };

    const handlerBorrar = () => {
        borrarEntidad(persona!.id);
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
            <div>
                <BorrarComponente key={persona?.id} borrar={handlerBorrar} entidad={persona!}></BorrarComponente>
            </div>
        </>
    );
};
