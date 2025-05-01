import React, { useEffect, useState } from 'react';
import Auto from '../../Model/Auto';
import Persona from '../../Model/Persona';
import { personaConDni } from '../../API/Persona/buscarPersona';
import { ColumnaAccion } from '../ColumnaAccion';

type detalleAutoProps = {
    auto: Auto;
};
export const DetalleAuto: React.FC<detalleAutoProps> = ({ auto }) => {
    const [propietario, setPropietario] = useState<Persona | undefined>(undefined);
    const [popUp, setPopUp] = useState<string>('popup');
    const obtenerPropietario = async () => {
        if (auto) {
            const dni = auto!.idDueño;
            const persona = await ersonaConDni(dni);
            console.log(persona);
            setPropietario(persona);
        }
    };
    const img = (auto: Auto) => {
        if (auto) {
            return `https://rickandmortyapi.com/api/character/avatar/${auto.img}.jpeg`;
        } else {
            return '';
        }
    };
    const verDueño = async () => {
        await obtenerPropietario();
        setPopUp('popup mostrar');
    };
    const acccionCancelar = () => {
        setPopUp('popup');
    };
    const editarAuto = () => {};
    const eliminarAuto = () => {};

    useEffect(() => {
        setPopUp('popup');
    }, []);

    return (
        <>
            <div className="inicio">
                <div className="detalle">
                    <img src={img(auto)} alt="" />
                    <div className="detalleDato">
                        <p> Que bonito Auto</p>
                        <p>Marca: {auto?.marca}</p>
                        <p>{auto?.idDueño}</p>
                        <p>Modelo: {auto?.modelo}</p>
                        <p>Año: {auto?.anio}</p>
                        <p>Color: {auto?.color}</p>
                        <p>Numero de Chasis: {auto?.numeroChasis}</p>
                        <p>Motor: {auto?.motor}</p>
                        <p>Patente: {auto?.patente}</p>
                    </div>
                </div>
                <div className="botonesAutos">
                    <ColumnaAccion
                        key={auto?.id}
                        ver={false}
                        editar={false}
                        eliminar={false}
                        tipo={'auto'}
                        botonVer={verDueño}
                        botonEditar={editarAuto}
                        botonEliminar={eliminarAuto}
                    ></ColumnaAccion>
                </div>
            </div>
            {/* <div id="popup" className={popUp}>
                    <div className="filaPersona">
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="alternatetext" />
                        <div className="filaCuerpo">
                            <p>{propietario!.nombre}</p>
                            <p>{propietario!.apellido}</p>
                            <p>{propietario!.dni}</p>
                        </div>
                        {propietario ? (
                            <BotonesPopUp
                                key={propietario?.dni}
                                tipo="auto"
                                cancelar={acccionCancelar}
                                eliminar={eliminarAuto}
                            ></BotonesPopUp>
                        ) : null}
                        </div>
                </div> */}
        </>
    );
};
