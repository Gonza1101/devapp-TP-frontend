import React from 'react';
import '../../CSS/botenesAccion.css';

type botonProps = {
    clase: string;
    txt: string;
    accion: () => void;
};
export const BotonAccion: React.FC<botonProps> = ({ clase, txt, accion }) => {
    return (
        <>
            <button className={clase} onClick={accion}>
                {txt}
            </button>
        </>
    );
};
