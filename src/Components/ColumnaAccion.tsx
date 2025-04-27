import React, { useEffect, useState } from 'react';
import { BorrarComponente } from './BorrarComponente';
import '../CSS/botenesAccion.css';
import '../CSS/popup.css';

type accionProps = {
    tipo: string;
    accionVer: () => void;
    accionEditar: () => void;
    accionEliminar: () => void;
};
export const ColumnaAccion: React.FC<accionProps> = ({ tipo, accionVer, accionEditar, accionEliminar }) => {
    const [clase, setClase] = useState<string>('popupborrar');

    const handlerVer = () => {
        accionVer();
    };
    const handlerEditar = () => {
        accionEditar();
    };
    const handlerBorrar = () => {
        setClase('popupborrar mostrar');
    };

    const handlerCancelar = () => {
        setClase('popupborrar');
    };
    const handlerEliminar = () => {
        accionEliminar();
    };

    useEffect(() => {}, []);

    return (
        <>
            <div className="botonesAccion">
                <button className="ver" onClick={handlerVer}>
                    🔍
                </button>
                <button className="editar" onClick={handlerEditar}>
                    📝
                </button>
                <button className="borrar" onClick={handlerBorrar}>
                    🔫
                </button>
            </div>
            <div id="popupBorrar" className={clase}>
                <BorrarComponente key={tipo} eliminar={handlerEliminar} cancelar={handlerCancelar}></BorrarComponente>
            </div>
        </>
    );
};
