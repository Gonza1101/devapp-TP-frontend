import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarPersonaConDni } from '../API/Persona/buscarPersona';
import Persona from '../Model/Persona';
import { CardAuto } from '../Components/CardAuto';

export const VerPersona = () => {
    const { dni } = useParams<{ dni: string }>();
    const [persona, setPersona] = useState<Persona>();
    const navegarA = useNavigate();

    const obtenePersonaConDni = async (dniPersona: string) => {
        const response = await buscarPersonaConDni(dniPersona);
        setPersona(response);
    };
    const agregarAuto = () => {};
    const ver = (id: string) => {
        navegarA(`/auto/${id}`);
    };
    const editar = (idAuto: string) => {
        console.log('Tengo que ir al Edit del Auto con ID');
        console.log(idAuto);
    };
    const eliminar = (idAuto: string) => {
        console.log('Tengo que ir al Eliminar del Auto con ID');
        console.log(idAuto);
    };
    //las dependencia que se agregan en [] son la que useEffect
    // debe tener en cuenta para un eventual cambio y actualizar
    useEffect(() => {
        obtenePersonaConDni(dni!);
    }, [dni]);

    return (
        <>
            <div className="inicio">
                <div className="listado">
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
                    {persona?.autos!.map((a) => (
                        <CardAuto
                            key={a.id}
                            desde={''}
                            auto={a}
                            accionVer={ver}
                            accionEditar={editar}
                            accionEliminar={eliminar}
                        />
                    ))}
                    <div>
                        <button className="agregarPersona" onClick={agregarAuto}>
                            🚗 Agregar Auto 🚙
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
