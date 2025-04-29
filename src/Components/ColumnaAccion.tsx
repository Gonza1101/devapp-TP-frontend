import React, { useState } from 'react';
import { BorrarComponente } from './BorrarComponente';
import '../CSS/botenesAccion.css';
import '../CSS/popup.css';

type accionProps = {
    tipo: string;
    botonVer: () => void;
    botonEditar: () => void;
    botonEliminar: () => void;
};
export const ColumnaAccion: React.FC<accionProps> = ({ tipo, botonVer, botonEditar, botonEliminar }) => {
    const [clase, setClase] = useState<string>('popupborrar');

    const handlerBorrar = () => {
        setClase('popupborrar mostrar');
    };

    const handlerCancelar = () => {
        setClase('popupborrar');
    };

    return (
        <>
            <div className="botonesAccion">
                <button className="ver" onClick={botonVer}>
                    🔍
                </button>
                <button className="editar" onClick={botonEditar}>
                    📝
                </button>
                <button className="borrar" onClick={handlerBorrar}>
                    🔫
                </button>
            </div>
            <div id="popupBorrar" className={clase}>
                <BorrarComponente key={tipo} eliminar={botonEliminar} cancelar={handlerCancelar}></BorrarComponente>
            </div>
        </>
    );
};
