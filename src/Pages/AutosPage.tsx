import React, { useEffect } from 'react';
import Auto from '../Model/Auto';
import { listadoAuto } from '../API/Auto/listadoAuto';
import { Listado } from '../Components/Listado';
import { useNavigate } from 'react-router-dom';

export const AutoPage = () => {
    const [lista, setLista] = React.useState<Auto[]>([]);
    const navegarA = useNavigate();
    const obtenerLista = async () => {
        const autos = await listadoAuto();
        setLista(autos);
    };
    const handlerVer = (patente: string) => {
        console.log(patente);
        navegarA(`/auto/${patente}`);
    };
    const handlerEditar = (idAuto: string) => {
        console.log(idAuto);
        navegarA(`/auto/edit/${idAuto}`);
    };
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
