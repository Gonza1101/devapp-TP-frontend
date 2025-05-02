import { useEffect, useState } from 'react';
import { listadoAuto } from '../../API/Auto/listadoAuto';
import Auto from '../../Model/Auto';
import { useNavigate } from 'react-router-dom';
import { CardAuto } from './CardAuto';
import '../../CSS/listadoFila.css';

export const AutoComponente = () => {
    const navegarA = useNavigate();
    const [autos, setAutos] = useState<Auto[]>([]);
    const listado = async () => {
        const lista = await listadoAuto();
        setAutos(lista);
    };
    const ver = (miPatente: string) => {
        navegarA(`/auto/${miPatente}`);
    };
    const editar = (idAuto: string) => {
        navegarA(`/persona/edit/${idAuto}`);
    };
    const eliminar = () => {};

    useEffect(() => {
        listado();
    }, [autos]);
    return (
        <>
            <div className="listado">
                <p>AUTOS</p>
                <div className="listado">
                    {autos.map((a) => (
                        <div className="filaAuto">
                            <div className="filaCuerpo">
                                <CardAuto
                                    key={a.id}
                                    auto={a}
                                    accionVer={ver}
                                    accionEditar={editar}
                                    accionEliminar={eliminar}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
