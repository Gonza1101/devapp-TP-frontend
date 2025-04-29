import React from 'react';
import Persona from '../Model/Persona';
import Auto from '../Model/Auto';
import { ColumnaAccion } from './ColumnaAccion';
import '../CSS/listadoFila.css';

type filaProps = {
    entidadTipo: string;
    entidad: Persona | Auto;
    accionVer: () => void;
    accionEditar: () => void;
    accionEliminar: () => void;
};

export const Fila: React.FC<filaProps> = ({ entidadTipo, entidad, accionVer, accionEditar, accionEliminar }) => {
    return (
        <>
            {entidadTipo === 'persona' ? (
                <div className="filaPersona">
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="alternatetext" />
                    <div className="filaCuerpo">
                        <p>{entidad.nombre}</p>
                        <p>{entidad.apellido}</p>
                        <p>{entidad.dni}</p>
                    </div>
                    <ColumnaAccion
                        key={entidad.id}
                        tipo={entidadTipo}
                        botonVer={accionVer}
                        botonEditar={accionEditar}
                        botonEliminar={accionEliminar}
                    ></ColumnaAccion>
                </div>
            ) : (
                <div className="filaAuto">
                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="alternatetext" />
                    <div className="filaCuerpo">
                        <p> {entidad.marca}</p>
                        <p>{entidad.modelo}</p>
                        <p>{entidad.anio}</p>
                        <p>{entidad.patente}</p>
                    </div>
                    <ColumnaAccion
                        key={entidad.id}
                        tipo={entidadTipo}
                        botonVer={accionVer}
                        botonEditar={accionEditar}
                        botonEliminar={accionEliminar}
                    ></ColumnaAccion>
                </div>
            )}
        </>
    );
};
