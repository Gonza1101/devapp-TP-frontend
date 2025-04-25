import React, { useEffect, useState } from 'react';
import Persona from '../Model/Persona';
import Auto from '../Model/Auto';
import { BorrarComponente } from './BorrarComponente';
import '../CSS/botenesAccion.css';
import '../CSS/popup.css';
import { useNavigate } from 'react-router-dom';

type accionProps = {
    persona: Persona;
    auto: Auto;
    listar: () => void;
};
export const ColumnaAccion: React.FC<accionProps> = ({ persona, auto }) => {
    // console.log('Persona');
    // console.log(persona);
    // console.log('Auto');
    // console.log(auto);
    const navegarA = useNavigate();
    const [clase, setClase] = useState<string>('popupborrar');

    const handlerCancelar = () => {
        setClase('popupborrar');
    };

    const handlerEliminar = () => {
        setClase('popupborrar');
    };
    const accionVer = () => {
        if (persona) {
            navegarA(`/persona/${persona?.dni}`); // =>VerPersona
        } else {
            navegarA(`/auto/${auto?.id}`);
        }
    };
    const accionEditar = () => {
        if (persona) {
            navegarA(`/persona/edit/${persona?.id}`); // =>EditarPersona
        } else {
            navegarA('/auto');
        }
    };
    const accionBorrar = () => {
        setClase('popupborrar mostrar');
    };

    useEffect(() => {}, []);

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
            <div id="popupBorrar" className={clase}>
                {persona ? (
                    <BorrarComponente
                        key={persona.id}
                        eliminar={handlerEliminar}
                        cancelar={handlerCancelar}
                    ></BorrarComponente>
                ) : (
                    <BorrarComponente
                        key={auto.id}
                        eliminar={handlerEliminar}
                        cancelar={handlerCancelar}
                    ></BorrarComponente>
                )}
            </div>
        </>
    );
};
