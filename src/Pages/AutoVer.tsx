import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Auto from '../Model/Auto';
import { findAutoWithPatente } from '../API/Auto/buscarAuto';
import { ColumnaAccion } from '../Components/ColumnaAccion';

export const VerAuto = () => {
    const { patente } = useParams<{ patente: string }>();
    const [auto, setAuto] = useState<Auto>();

    const obtenerAutoConPatente = async (patente: string) => {
        const rtaAuto = await findAutoWithPatente(patente);
        setAuto(rtaAuto);
    };

    useEffect(() => {
        obtenerAutoConPatente(patente!);
    }, [patente]);

    return (
        <div>
            <h2> Que bonito Auto</h2>
            <h3>Marca: {auto?.marca}</h3>
            <h3>Modelo: {auto?.modelo}</h3>
            <h3>Año: {auto?.anio}</h3>
            <h3>Color: {auto?.color}</h3>
            <h3>Numero de Chasis: {auto?.numeroDeChasis}</h3>
            <h3>Motor: {auto?.motor}</h3>
            <h3>Patente: {auto?.patente}</h3>
            <ColumnaAccion key={auto?.patente} auto={auto} persona={undefined}></ColumnaAccion>
        </div>
    );
};
