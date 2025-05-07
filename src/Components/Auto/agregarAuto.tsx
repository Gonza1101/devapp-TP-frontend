import React, { Dispatch, useRef } from 'react';
// import { redirect, useNavigate } from 'react-router-dom';
import Auto from '../../Model/Auto';
import { addAuto } from '../../API/Auto/agregarAuto';
import { BotonAccion } from '../Botones/BotonAccion';

type agregarProps = {
    dniPersona: string;
    accionConfirmar: Dispatch<React.SetStateAction<string>>;
    accionCancelar: () => void;
};

export const AgregarAuto: React.FC<agregarProps> = ({ dniPersona, accionCancelar, accionConfirmar }) => {
    // const navegarA = useNavigate();
    const inputMarcaRef = useRef<HTMLInputElement>(null);
    const inputModeloRef = useRef<HTMLInputElement>(null);
    const inputAnioRef = useRef<HTMLInputElement>(null);
    const inputColorRef = useRef<HTMLInputElement>(null);
    const inputNumeroChasisRef = useRef<HTMLInputElement>(null);
    const inputMotorRef = useRef<HTMLInputElement>(null);
    const inputPatenteRef = useRef<HTMLInputElement>(null);

    const handlerAgregar = async () => {
        const autoEditado: Auto = {
            idDueño: dniPersona,
            marca: inputMarcaRef.current!.value,
            modelo: inputModeloRef.current!.value,
            anio: inputAnioRef.current!.value,
            color: inputColorRef.current!.value,
            numeroChasis: inputNumeroChasisRef.current!.value,
            motor: inputMotorRef.current!.value,
            patente: inputPatenteRef.current!.value
        };
        const rta = await addAuto(autoEditado);
        if (rta.status === 200) {
            alert(`${rta.data}`);
            accionConfirmar('popup');
        } else {
            alert(`${rta.data}`);
            return false;
        }
    };
    const handlerCancelar = () => {
        // console.log('Cancelar');
        // navegarA(`/persona/${dniPersona}`);
        accionCancelar();
    };
    return (
        <>
            <div className="inicio">
                <div className="formulario">
                    <p className="titulo">Nuevo Auto</p>
                    <form className="editar">
                        <p>Marca</p>
                        <input ref={inputMarcaRef} type="Marca" />

                        <p>Modelo</p>
                        <input ref={inputModeloRef} type="Modelo" />

                        <p>Año</p>
                        <input ref={inputAnioRef} type="Año" />

                        <p>Color</p>
                        <input ref={inputColorRef} type="Colo" />

                        <p>Numero de Chasis</p>
                        <input ref={inputNumeroChasisRef} type="Chasis" />

                        <p>Motor</p>
                        <input ref={inputMotorRef} type="Motor" />

                        <p>Patente</p>
                        <input ref={inputPatenteRef} type="Patente" />
                    </form>
                    <div className="boton">
                        <BotonAccion key={'confirmar'} txt={'Confirmar'} clase={'confirmar'} accion={handlerAgregar} />
                        <BotonAccion key={'cancelar'} txt={'Cancelar'} clase={'cancelar'} accion={handlerCancelar} />
                    </div>
                </div>
            </div>
        </>
    );
};
