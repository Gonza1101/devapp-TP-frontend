import React, { useEffect } from 'react';
import Auto from '../Model/Auto';
import { listaAuto } from '../API/Auto/listaAutos';
import { Listado } from '../Components/Listado';

export const AutoPage = () => {
    const [lista, setLista] = React.useState<Auto[]>([]);

    const obtenerLista = async () => {
        const autos = await listaAuto();
        setLista(autos);
    };

    useEffect(() => {
        obtenerLista();
    }, []);
    return (
        <>
            <div>
                <h2>Titulo AUTOS</h2>
                <h3>Todos los Autos</h3>
                <Listado key={lista.length} listaPersonas={undefined} listaAutos={lista}></Listado>
            </div>
        </>
    );
};
