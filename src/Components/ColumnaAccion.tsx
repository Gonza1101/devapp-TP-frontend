import React, { useState } from 'react';
import { BotonesPopUp } from './popUpBorrar';
import '../CSS/botenesAccion.css';
import '../CSS/popup.css';

type accionProps = {
    tipo: string;
    ver: boolean;
    editar: boolean;
    eliminar: boolean;
    botonVer?: () => void;
    botonEditar?: () => void;
    botonEliminar: () => void;
};
export const ColumnaAccion: React.FC<accionProps> = ({
    tipo,
    ver,
    editar,
    eliminar,
    botonVer,
    botonEditar,
    botonEliminar
}) => {
    const [popup, setClase] = useState<string>('popup');

    const handlerBorrar = () => {
        setClase('popup mostrar');
    };

    const handlerCancelar = () => {
        setClase('popup');
    };
    const handlerEliminar = () => {
        botonEliminar();
        setClase('popup');
    };

    return (
        <>
            <div className="botonesAccion">
                {ver ? (
                    <button className="ver" onClick={botonVer}>
                        🔍
                    </button>
                ) : null}
                {editar ? (
                    <button className="editar" onClick={botonEditar}>
                        📝
                    </button>
                ) : null}
                {eliminar ? (
                    <button className="borrar" onClick={handlerBorrar}>
                        🔫
                    </button>
                ) : null}
            </div>
            <div id="popup" className={clase}>
                <BotonesPopUp
                    key={tipo}
                    tipo={tipo}
                    eliminar={handlerEliminar}
                    cancelar={handlerCancelar}
                ></BotonesPopUp>
            </div>
        </>
    );
};
