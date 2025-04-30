import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { autoConId } from '../API/Auto/autoConId';
import Auto from '../Model/Auto';
import { EdicionAuto } from '../Components/Auto/edicionAuto';

export const AutoEditar = () => {
    const { idAuto } = useParams<{ idAuto: string }>();
    const [auto, setAuto] = useState<Auto>();

    const obtenerAutoConId = async (idAuto: string) => {
        const response = await autoConId(idAuto);
        setAuto(response);
    };

    useEffect(() => {
        obtenerAutoConId(idAuto!);
    }, [idAuto]);

    return <>{idAuto ? <EdicionAuto key={idAuto} auto={auto!} /> : null}</>;
};
