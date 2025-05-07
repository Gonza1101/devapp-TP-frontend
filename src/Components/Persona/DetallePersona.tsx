import React, { useEffect, useState } from 'react';
import Persona from '../../Model/Persona';
import { CardAuto } from '../Auto/CardAuto';
import { useNavigate } from 'react-router-dom';
import { personaConDni } from '../../API/Persona/buscarPersona';
import { patchAuto } from '../../API/Auto/patchAuto';
import { BotonAccion } from '../Botones/BotonAccion';
// import { EdicionAuto } from '../Auto/EdicionAuto';
import { AgregarAuto } from '../Auto/agregarAuto';
// import { BotonesPopUp } from '../popUpBorrar';
// import Auto from '../../Model/Auto';
// import { editAuto } from '../../API/Auto/editAuto';

type detallePersonaProps = {
    dni: string;
};
export const DetallePersona: React.FC<detallePersonaProps> = ({ dni }) => {
    const [persona, setPersona] = useState<Persona>();
    const [verAgregar, setVerAgregar] = useState<string>('popup');
    const navegarA = useNavigate();
    //Busco la Persona con el DNI pasado por parametro en URL.
    const personaActual = async (dniPersona: string) => {
        const response = await personaConDni(dniPersona);
        setPersona(response);
    };
    const imgPersona = `https://rickandmortyapi.com/api/character/avatar/${persona?.img}.jpeg`;
    //Acciones que tendran los botones sobre la lista de autos de la Persona.

    const handlerEliminarAuto = (idAuto: string) => {
        console.log(idAuto);
        if (idAuto !== undefined) {
            patchAuto(persona!.id!, idAuto);
        }
    };
    const agregarAuto = () => {
        // navegarA(`/auto/add/${persona?.dni}`);
        setVerAgregar('popup mostrar');
    };
    const handlerCancelar = () => {
        setVerAgregar('popup');
    };
    // const handlerConfirmar = () => {
    //     setPopUp('popup');
    //     personaActual(dni);
    // };
    // const handlerEditar = async (idAuto: string, autoEditado: Auto) => {
    //     const rta = await editAuto(idAuto, autoEditado);
    //     if (rta.status === 200) {
    //         alert('Actualizado');
    //         navegarA('/autos');
    //     } else {
    //         alert('Error 400');
    //     }
    // };

    const ver = (id: string) => {
        navegarA(`/auto/${id}`);
    };
    // const editar = (id: string) => {
    //     console.log(id);
    //     // navegarA(`/auto/edit/${idAuto}`);
    //     setVerAgregar('popup agregar');
    // };
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
        // setPopUp('popup');
    }, [verAgregar]);
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
                    <BotonAccion
                        key={'agregarAuto'}
                        txt={'🚗 Agregar Auto 🚙'}
                        clase={'agregar'}
                        accion={agregarAuto}
                    />
                </div>
                <div className="listado">
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
                                          dniPersona={dni}
                                          accionConfirmar={setVerAgregar}
                                          accionCancelar={handlerCancelar}
                                      />
                                  </div>
                              </>
                          ))
                        : null}
                </div>
            </div>
        </>
    );
};
