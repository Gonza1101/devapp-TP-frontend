import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findAutoWithPatente } from '../API/Auto/buscarAuto';
import { DetalleAuto } from '../Components/Auto/DetalleAuto';
import Auto from '../Model/Auto';

export const AutoVer = () => {
    const { miPatente } = useParams<{ miPatente: string }>();
    const [auto, setAuto] = useState<Auto>();

    const autoConPatente = async () => {
        const response = await findAutoWithPatente(miPatente!);
        setAuto(response);
    };

    useEffect(() => {
        autoConPatente();
    }, [auto]);

    return <> {miPatente ? <DetalleAuto key={miPatente} auto={auto!}></DetalleAuto> : null}</>;
};
