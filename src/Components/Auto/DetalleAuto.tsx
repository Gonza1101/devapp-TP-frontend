import React, { useEffect, useState } from 'react';
import Auto from '../../Model/Auto';
import Persona from '../../Model/Persona';
import { personaConDni } from '../../API/Persona/buscarPersona';
import { findAutoWithPatente } from '../../API/Auto/buscarAuto';
import { BotonAccion } from '../Botones/botonAccion';
import '../../CSS/botenesAccion.css';

type detalleAutoProps = {
    patente: string;
};

export const DetalleAuto: React.FC<detalleAutoProps> = ({ patente }) => {
    const [popUp, setPopUp] = useState<string>('popup');
    const [auto, setAuto] = useState<Auto>();
    const [propietario, setPropietario] = useState<Persona | undefined>(undefined);

    const autoActual = async (miPatente: string) => {
        const response = await findAutoWithPatente(miPatente!);
        setAuto(response);
    };
    const obtenerPropietario = async () => {
        const persona = await personaConDni(auto.idDueño!);
        console.log(persona);
        setPropietario(persona);
    };
    const img = (auto: Auto) => {
        if (auto) {
            return `https://rickandmortyapi.com/api/character/avatar/${auto.img}.jpeg`;
        } else {
            return '';
        }
    };
    const verDueño = () => {
        obtenerPropietario();
        setPopUp('popup mostrar');
    };
    const acccionCancelar = () => {
        setPopUp('popup');
    };
    const editarAuto = () => {};
    const eliminarAuto = () => {};

    useEffect(() => {
        autoActual(patente);
    }, [patente, auto, popUp]);

    return (
        <>
            <div className="inicio">
                <div className="detalle">
                    <img src={img(auto)} alt="" />
                    <div className="detalleDato">
                        <p>Marca: {auto?.marca}</p>
                        <p>Dueño: {auto?.idDueño}</p>
                        <p>Modelo: {auto?.modelo}</p>
                        <p>Año: {auto?.anio}</p>
                        <p>Color: {auto?.color}</p>
                        <p>Numero de Chasis: {auto?.numeroChasis}</p>
                        <p>Motor: {auto?.motor}</p>
                        <p>Patente: {auto?.patente}</p>
                    </div>
                </div>
                <div className="filaCuerpo">
                    <div className="botonesAccion">
                        <BotonAccion key={'ver'} txt={'🔍'} clase={'ver'} accion={verDueño} />
                    </div>
                </div>
            </div>
            <div id="popup" className={popUp}>
                {propietario !== undefined ? (
                    <div className="">
                        <div className="filaAuto">
                            <div className="filaCuerpo">
                                <img src={propietario.img} alt="imgDueño" />
                                <p>{propietario.nombre}</p>
                                <p>{propietario.apellido}</p>
                                <p>{propietario.dni}</p>
                            </div>
                            <div className="botonesAccion">
                                <BotonAccion key={'atras'} txt={'Volver'} clase={'ver'} accion={acccionCancelar} />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};
