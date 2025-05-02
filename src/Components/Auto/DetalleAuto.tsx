import React, { useEffect, useState } from 'react';
import Auto from '../../Model/Auto';
import Persona from '../../Model/Persona';
import { personaConDni } from '../../API/Persona/buscarPersona';
import { ColumnaAccion } from '../ColumnaAccion';
import { CardPersona } from '../Persona/CardPersona';

type detalleAutoProps = {
    auto: Auto;
};
export const DetalleAuto: React.FC<detalleAutoProps> = ({ auto }) => {
    const [popUp, setPopUp] = useState<string>('popup');
    const [propietario, setPropietario] = useState<Persona | undefined>(undefined);

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

    useEffect(() => {}, [auto, popUp]);

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
                <div className="botonesAutos">
                    <ColumnaAccion
                        key={auto?.id}
                        ver={true}
                        editar={false}
                        eliminar={false}
                        tipo={'auto'}
                        botonVer={verDueño}
                        botonEditar={editarAuto}
                        botonEliminar={eliminarAuto}
                    ></ColumnaAccion>
                </div>
            </div>
            <div id="popup" className={popUp}>
                {propietario !== undefined ? (
                    <CardPersona key={'persona'} persona={propietario!} accionVer={verDueño} />
                ) : null}
            </div>
        </>
    );
};
