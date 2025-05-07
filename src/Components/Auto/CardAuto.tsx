import { useState } from 'react';
import Auto from '../../Model/Auto';
import { BotonAccion } from '../Botones/BotonAccion';
// import { BotonesPopUp } from '../popUpBorrar';
import '../../CSS/botenesAccion.css';
// import { useNavigate } from 'react-router-dom';
import { EdicionAuto } from './EdicionAuto';
// import { findAutoWithPatente } from '../../API/Auto/buscarAuto';
import { BotonesPopUp } from '../popUpBorrar';
// import { findAutoWithPatente } from '../../API/Auto/buscarAuto';

type cardAutoProps = {
    auto: Auto;
    accionVer: (id: string) => void;
    // accionEditar: (id: string) => void;
    accionEliminar: (id: string) => void;
};
export const CardAuto: React.FC<cardAutoProps> = ({ auto, accionVer, accionEliminar }) => {
    // const [mostrar, setMostrar] = useState<string>('popup');
    // const [autoCompleto, setAuto] = useState<Auto>();
    const [verEditarAuto, setVerEditarAuto] = useState<string>('popup');
    const [popup, setPopUp] = useState<string>('popup');
    // const navegarA = useNavigate();

    // const obtenerAuto = async (patente: string) => {
    //     const response = await findAutoWithPatente(patente);
    //     setAuto(response);
    // };
    const botonVer = () => {
        accionVer(auto!.patente);
    };
    const botonEditar = () => {
        // accionEditar(auto.id!);
        // navegarA(`/auto/edit/${auto.id!}`);
        setVerEditarAuto('popup editar');
    };
    const eliminar = async () => {
        const idAuto = await (await findAutoWithPatente(auto.patente)).id;
        accionEliminar(idAuto!); //no tengo el id del auto
    };
    const handlerCancelar = () => {
        setVerEditarAuto('popup');
    };
    const handlerEliminar = () => {
        // accionEliminar(auto.id!);
        setPopUp('popup');
    };
    // useEffect(() => {
    //     obtenerAuto(autoPatente);
    // }, [autoPatente]);
    return (
        <>
            <img src={`https://rickandmortyapi.com/api/character/avatar/${auto!.img}.jpeg`} alt={auto.modelo} />
            <p>{auto!.marca}</p>
            <p>{auto!.modelo}</p>
            <p>{auto!.anio}</p>
            <p>{auto!.patente}</p>
            <div className="botonesAccion">
                <BotonAccion key={'ver'} txt={'🔍'} clase={'ver'} accion={botonVer} />
                <BotonAccion key={'editar'} txt={'📝'} clase={'editar'} accion={botonEditar} />
                <BotonAccion key={'borrar'} txt={'🔫'} clase={'borrar'} accion={handlerEliminar} />
            </div>
            <div className={verEditarAuto}>
                <EdicionAuto
                    key={'auto'}
                    patente={auto!.patente}
                    accionConfirmar={setVerEditarAuto}
                    accionCancelar={handlerCancelar}
                />
            </div>
            <div id="popup" className={popup}>
                <BotonesPopUp
                    key={'Auto'}
                    txt={`¿Eliminar el Auto con patente ${auto.patente}`}
                    eliminar={eliminar}
                    cancelar={handlerCancelar}
                ></BotonesPopUp>
            </div>
        </>
    );
};
