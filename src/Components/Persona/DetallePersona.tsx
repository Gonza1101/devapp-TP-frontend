import React, { useEffect, useState } from 'react';
import Persona from '../../Model/Persona';
import { CardAuto } from '../Auto/CardAuto';
import { useNavigate } from 'react-router-dom';
import { patchAuto } from '../../API/Auto/patchAuto';
import { BotonAccion } from '../Botones/BotonAccion';
import { AgregarAuto } from '../Auto/agregarAuto';
import { personaConId } from '../../API/Persona/personaConId';
import { deletePersona } from '../../API/Persona/deletePersona';
import { BotonesPopUp } from '../popUpBorrar';
import { EdicionPersona } from './EdicionPersona';
import { EdicionAuto } from '../Auto/EdicionAuto';

type detallePersonaProps = {
    dni: string;
};
export const DetallePersona: React.FC<detallePersonaProps> = ({ dni }) => {
    const [persona, setPersona] = useState<Persona>();
    const [verAgregar, setVerAgregar] = useState<string>('popup');
    const [verEditar, setVerEditar] = useState<string>('popup');
    const [verEditarAuto, setVerEditarAuto] = useState<string>('popup');
    const [mostrar, setMostrar] = useState<string>('popup');
    const navegarA = useNavigate();
    //Busco la Persona con el DNI pasado por parametro en URL.
    const personaActual = async (dniPersona: string) => {
        const response = await personaConId(dniPersona);
        setPersona(response);
    };
    const imgPersona = `https://rickandmortyapi.com/api/character/avatar/${persona?.img}.jpeg`;

    //Acciones que tendran los botones sobre la Persona.
    const agregarAuto = () => {
        // navegarA(`/auto/add/${persona?.dni}`);
        setVerAgregar('popup mostrar');
    };
    const handlerEditar = () => {
        // navegarA(`/persona/edit/${persona?.id}`);
        setVerEditar('popup mostrar');
    };
    const handlerConfirmar = () => {
        setVerEditar('popup');
    };
    const handlerEliminar = () => {
        setMostrar('popup mostrar');
    };

    const borrarPersona = async () => {
        const rtaEliminar = await deletePersona(persona!.id!);
        if (rtaEliminar.status === 200) {
            alert('Eliminado');
            navegarA('/personas');
        } else {
            alert('Ocurrio un Error');
        }
    };
    //Acciones que tendran los botones sobre la lista de autos de la Persona.

    const handlerEliminarAuto = (idAuto: string) => {
        console.log(idAuto);
        if (idAuto !== undefined) {
            patchAuto(persona!.id!, idAuto);
        }
    };
    const handlerCancelar = () => {
        setVerAgregar('popup');
        setMostrar('popup');
        setVerEditar('popup');
    };
    const ver = (id: string) => {
        navegarA(`/auto/${id}`);
    };
    const esDonante = () => {
        if (persona?.esDonante) {
            return 'Si';
        } else {
            return 'No';
        }
    };
    //las dependencia que se agregan en [] son la que useEffect
    // debe tener en cuenta para un eventual cambio y actualizar
    useEffect(() => {
        personaActual(dni);
        // setMostrar('popup');
    }, [dni, verAgregar, verEditar, verEditarAuto]);
    return (
        <>
            <div className="inicio">
                <div className="detalle">
                    <img src={imgPersona} alt="" />
                    <div className="detalleDato">
                        <p>Nombre: {persona?.nombre}</p>
                        <p>Apellido: {persona?.apellido}</p>
                        <p>Dni: {persona?.dni}</p>
                        <p>Fecha de Nacimiento: {persona?.fechaNacimiento}</p>
                        <p>Genero: {persona?.genero}</p>
                        <p>Donante: {esDonante()}</p>
                    </div>
                    <div className="botonesAccion">
                        <BotonAccion key={'agregarAuto'} txt={'🚗 Agregar'} clase={'ver'} accion={agregarAuto} />
                        <BotonAccion key={'editar'} txt={'📝 editar'} clase={'editar'} accion={handlerEditar} />
                        <BotonAccion key={'borrar'} txt={'🗑 Borrar'} clase={'borrar'} accion={handlerEliminar} />
                    </div>
                </div>
                {
                    //TODO Agregar Boton de editar y Borrar
                }
                <div className="listado">
                    <p>Autos</p>
                    {persona !== undefined
                        ? persona?.autos!.map((a) => (
                              <>
                                  <div className="filaAuto">
                                      <div className="filaCuerpo">
                                          <CardAuto
                                              key={a.patente}
                                              auto={a}
                                              accionVer={ver}
                                              //accionEditar={editar}
                                              accionEliminar={handlerEliminarAuto}
                                          />
                                      </div>
                                  </div>
                                  <div className={verAgregar}>
                                      <AgregarAuto
                                          key={'agregar'}
                                          dniPersona={persona.id!}
                                          accionConfirmar={setVerAgregar}
                                          accionCancelar={handlerCancelar}
                                      />
                                  </div>
                                  <div className={verEditarAuto}>
                                      <EdicionAuto
                                          key={'editarAuto'}
                                          id={a.id!}
                                          accionConfirmar={setVerEditarAuto}
                                          accionCancelar={handlerCancelar}
                                      />
                                  </div>
                              </>
                          ))
                        : null}
                </div>
                <div id="popup" className={mostrar}>
                    <BotonesPopUp
                        key={'Persona'}
                        txt={`¿Realmente quiere eliminar a ${persona?.nombre}`}
                        eliminar={borrarPersona}
                        cancelar={handlerCancelar}
                    ></BotonesPopUp>
                </div>
                <div id="popup" className={verEditar}>
                    <EdicionPersona
                        key={'editar'}
                        persona={persona!}
                        accionConfirmar={handlerConfirmar}
                        accionCancelar={handlerCancelar}
                    />
                </div>
            </div>
        </>
    );
};
