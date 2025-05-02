import { useState } from 'react';
import Auto from '../../Model/Auto';
import { BotonAccion } from '../Botones/botonAccion';
import { BotonesPopUp } from '../popUpBorrar';
import '../../CSS/botenesAccion.css';

type cardAutoProps = {
    auto: Auto;
    accionVer: (id: string) => void;
    accionEditar: (id: string) => void;
    accionEliminar: (id: string) => void;
};
export const CardAuto: React.FC<cardAutoProps> = ({ auto, accionVer, accionEditar, accionEliminar }) => {
    const [mostrar, setMostrar] = useState<string>('popup');
    const img = `https://rickandmortyapi.com/api/character/avatar/${auto.img}.jpeg`;
    const botonVer = () => {
        accionVer(auto.patente);
    };
    const botonEditar = () => {
        accionEditar(auto.id!);
    };
    const botonEliminar = () => {
        accionEliminar(auto.id!);
    };
    const handlerCancelar = () => {
        setMostrar('popup');
    };
    const handlerEliminar = () => {
        accionEliminar(auto.id!);
        setMostrar('popup');
    };
    return (
        <>
            <img src={img} alt="alternatetext" />
            <p> {auto.marca}</p>
            <p>{auto.modelo}</p>
            <p>{auto.anio}</p>
            <p>{auto.patente}</p>
            <div className="botonesAccion">
                <BotonAccion key={'ver'} txt={'🔍'} clase={'ver'} accion={botonVer} />
                <BotonAccion key={'editar'} txt={'📝'} clase={'editar'} accion={botonEditar} />
                <BotonAccion key={'borrar'} txt={'🔫'} clase={'borrar'} accion={botonEliminar} />
                <div id="popup" className={mostrar}>
                    <BotonesPopUp
                        key={'Persona'}
                        txt={`¿Realmente quiere eliminar este Auto`}
                        eliminar={handlerEliminar}
                        cancelar={handlerCancelar}
                    ></BotonesPopUp>
                </div>
            </div>
        </>
    );
};
