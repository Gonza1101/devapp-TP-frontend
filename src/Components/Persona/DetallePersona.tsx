import React from 'react';
import Persona from '../../Model/Persona';
import { CardAuto } from '../Auto/CardAuto';
import { useNavigate } from 'react-router-dom';

type detallePersonaProps = {
    persona: Persona;
};
export const DetallePersona: React.FC<detallePersonaProps> = ({ persona }) => {
    const navegarA = useNavigate();
    const imgPersona = `https://rickandmortyapi.com/api/character/avatar/${persona?.img}.jpeg`;

    const agregarAuto = () => {};
    const ver = (id: string) => {
        navegarA(`/auto/${id}`);
    };
    const editar = (idAuto: string) => {
        navegarA(`/auto/edit/${idAuto}`);
    };
    const eliminar = (idAuto: string) => {
        console.log('Tengo que ir al Eliminar del Auto con ID');
        console.log(idAuto);
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
    // useEffect(() => {
    // }, []);
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
                </div>
                <div className="listado">
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
                </div>
                <div>
                    <button className="agregarPersona" onClick={agregarAuto}>
                        🚗 Agregar Auto 🚙
                    </button>
                </div>
            </div>
        </>
    );
};
