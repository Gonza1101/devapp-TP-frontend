import React, { useEffect } from 'react';
import Auto from '../Model/Auto';
import { listaAuto } from '../API/Auto/listaAutos';
import { Listado } from '../Components/Listado';
import { useNavigate } from 'react-router-dom';

export const AutoPage = () => {
    const [lista, setLista] = React.useState<Auto[]>([]);
    const navegarA = useNavigate();

    //obtengo una lista solo de Autos.
    const obtenerLista = async () => {
        const autos = await listaAuto();
        setLista(autos);
    };
    const handlerVer = (patente: string) => {
        navegarA(`/auto/${patente}`);
    };
    const handlerEditar = () => {};
    const handlerEliminar = () => {};

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
                        ver={handlerVer}
                        editar={handlerEditar}
                        eliminar={handlerEliminar}
                    ></Listado>
                </div>
            </div>
        </>
    );
};
