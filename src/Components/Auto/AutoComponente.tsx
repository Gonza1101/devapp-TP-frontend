import { useEffect, useState } from 'react';
import { listadoAuto } from '../../API/Auto/listadoAuto';
import Auto from '../../Model/Auto';
import { useNavigate } from 'react-router-dom';
import { Listado } from '../Listado';

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
            <div className="inicio">
                <div className="listado">
                    <p>AUTO</p>
                    <Listado key={'auto'} tipo={'auto'} listado={autos} ver={ver} editar={editar} eliminar={eliminar} />
                    {/* <button className="agregarPersona" onClick={agregarPersona}>
                        🙋‍♂️ Agregar Persona 🙋‍♀️
                    </button> */}
                </div>
            </div>
        </>
    );
};
