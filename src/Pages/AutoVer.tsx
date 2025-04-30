import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Auto from '../Model/Auto';
import { findAutoWithPatente } from '../API/Auto/buscarAuto';
import { ColumnaAccion } from '../Components/ColumnaAccion';
import Persona from '../Model/Persona';
import { buscarPersonaConDni } from '../API/Persona/buscarPersona';
import { BotonesPopUp } from '../Components/popUpBorrar';

export const AutoVer = () => {
    const { miPatente } = useParams<{ miPatente: string }>();
    console.log(miPatente);
    const [auto, setAuto] = useState<Auto | undefined>(undefined);

    const [propietario, setPropietario] = useState<Persona | undefined>(undefined);

    const [popUp, setPopUp] = useState<string>('popup');

    const obtenerAutoConPatente = async (patente: string) => {
        const response = await findAutoWithPatente(patente);
        setAuto(response);
        console.log(response);
    };

    const obtenerPropietario = async () => {
        if (auto) {
            const dni = auto!.idDueño;
            const persona = await buscarPersonaConDni(dni);
            console.log(persona);
            setPropietario(persona);
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
        obtenerAutoConPatente(miPatente!);
    }, [miPatente]);

    return (
        <>
            <div className="inicio">
                <div className="detalle">
                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
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
