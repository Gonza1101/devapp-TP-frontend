import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Auto from '../Model/Auto';
import { findAutoWithPatente } from '../API/Auto/buscarAuto';
import { ColumnaAccion } from '../Components/ColumnaAccion';
import { Fila } from '../Components/Fila';

export const AutoVer = () => {
    const { miPatente } = useParams<{ miPatente: string }>();
    const [auto, setAuto] = useState<Auto | undefined>(undefined);

    const obtenerAutoConPatente = async (patente: string) => {
        const response = await findAutoWithPatente(patente);
        setAuto(response);
    };

    useEffect(() => {
        obtenerAutoConPatente(miPatente!);
        console.log('AUTO VER');
        console.log(auto!.id);
    }, []);

    return (
        <>
            <div className="inicio">
                <div className="detalle">
                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
                    <div className="detalleDato">
                        <p> Que bonito Auto</p>
                        <p>Marca: {auto?.marca}</p>
                        <p>Modelo: {auto?.modelo}</p>
                        <p>Año: {auto?.anio}</p>
                        <p>Color: {auto?.color}</p>
                        <p>Numero de Chasis: {auto?.numeroDeChasis}</p>
                        <p>Motor: {auto?.motor}</p>
                        <p>Patente: {auto?.patente}</p>
                        {/* <ColumnaAccion key={auto!.patente} persona={persona} auto={auto} listar={actualizarLista}></ColumnaAccion> */}
                    </div>
                    {/* <Fila key={auto.id} auto={auto!} persona={undefined} listar={actualizarLista}></Fila> */}
                </div>
            </div>
        </>
    );
};
