import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarPersonaConDni } from '../API/Persona/buscarPersona';
import Persona from '../Model/Persona';
import { Listado } from './Listado';

export const PersonaDetalle = () => {
    const { dni } = useParams<{ dni: string }>();
    const [persona, setPersona] = useState<Persona>();
    const navegarA = useNavigate();

    const obtenePersonaConDni = async (dniPersona: string) => {
        const response = await buscarPersonaConDni(dniPersona);
        setPersona(response);
    };
    const ver = () => {
        console.log('Estoy en VER');
        navegarA(`/persona/${persona?.dni}`);
    };
    const editar = () => {};
    const eliminar = () => {};
    //las dependencia que se agregan en [] son la que useEffect
    // debe tener en cuenta para un eventual cambio y actualizar
    useEffect(() => {
        obtenePersonaConDni(dni!);
    }, [dni]);

    return (
        <>
            <div className="inicio">
                <div className="detalle">
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
                    <div className="detalleDato">
                        <p>Nombre: {persona?.nombre}</p>
                        <p>Apellido: {persona?.apellido}</p>
                        <p>Dni: {persona?.dni}</p>
                        {/* <h3>Fecha de Nacimiento: {persona.fechaNacimiento}</h3> */}
                        <p>Genero: {persona?.genero}</p>
                        <p>Donante: {persona?.esDonante}</p>
                    </div>
                </div>
                <div className="listado">
                    <Listado
                        key={persona?.dni}
                        listaAutos={persona?.autos}
                        listaPersonas={undefined}
                        ver={ver}
                        editar={editar}
                        eliminar={eliminar}
                    ></Listado>
                </div>
            </div>
        </>
    );
};
