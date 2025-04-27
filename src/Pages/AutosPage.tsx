import React, { useEffect } from 'react';
import Auto from '../Model/Auto';
import { listaAuto } from '../API/Auto/listaAutos';
import { Listado } from '../Components/Listado';

export const AutoPage = () => {
    const [lista, setLista] = React.useState<Auto[]>([]);

    //obtengo una lista solo de Autos.
    const obtenerLista = async () => {
        const autos = await listaAuto();
        setLista(autos);
    };

    useEffect(() => {
        obtenerLista();
    }, []);
    return (
        <>
            <div className="inicio">
                <div className="listado">
                    <p>AUTOS</p>
                    <Listado
                        key={lista.length}
                        listaPersonas={undefined}
                        listaAutos={lista}
                        listado={obtenerLista}
                    ></Listado>
                </div>
            </div>
        </>
    );
};
