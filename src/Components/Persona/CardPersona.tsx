import { useState } from 'react';
import Persona from '../../Model/Persona';
import { BotonAccion } from '../Botones/BotonAccion';
import { BotonesPopUp } from '../popUpBorrar';

type cardPersonaProps = {
    persona: Persona;
    accionVer: (id: string) => void;
    accionEditar: (id: string) => void;
    accionEliminar: (id: string) => void;
};
export const CardPersona: React.FC<cardPersonaProps> = ({ persona, accionVer, accionEditar, accionEliminar }) => {
    const [mostrar, setMostrar] = useState<string>('popup');
    const img = `https://rickandmortyapi.com/api/character/avatar/${persona.img}.jpeg`;
    const botonVer = () => {
        accionVer(persona.id!);
    };
    const botonEditar = () => {
        accionEditar(persona.id!);
    };
    const botonEliminar = () => {
        setMostrar('popup mostrar');
    };
    const handlerCancelar = () => {
        setMostrar('popup');
    };
    const handlerEliminar = () => {
        accionEliminar(persona.id!);
        setMostrar('popup');
    };
    return (
        <>
            <img src={img} alt="alternatetext" />
            <div className="filaCuerpo">
                <p>{persona.nombre}</p>
                <p>{persona.apellido}</p>
                <p>{persona.dni}</p>
            </div>
            <div className="botonesAccion">
                <BotonAccion key={'ver'} txt={'🔍'} clase={'ver'} accion={botonVer} />
                <BotonAccion key={'editar'} txt={'📝'} clase={'editar'} accion={botonEditar} />
                <BotonAccion key={'borrar'} txt={'🔫'} clase={'borrar'} accion={botonEliminar} />
                <div id="popup" className={mostrar}>
                    <BotonesPopUp
                        key={'Persona'}
                        txt={`¿Realmente quiere eliminar a ${persona.nombre}`}
                        eliminar={handlerEliminar}
                        cancelar={handlerCancelar}
                    ></BotonesPopUp>
                </div>
            </div>
        </>
    );
};
