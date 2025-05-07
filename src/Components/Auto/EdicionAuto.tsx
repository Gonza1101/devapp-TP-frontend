import React, { Dispatch, useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { editAuto } from '../../API/Auto/editAuto';
import Auto from '../../Model/Auto';
import { BotonAccion } from '../Botones/BotonAccion';
import { findAutoWithPatente } from '../../API/Auto/buscarAuto';

type edicionAuto = {
    patente: string;
    accionConfirmar: Dispatch<React.SetStateAction<string>>;
    accionCancelar: () => void;
};
export const EdicionAuto: React.FC<edicionAuto> = ({ patente, accionConfirmar, accionCancelar }) => {
    // const navegarA = useNavigate();
    const [auto, setAuto] = useState<Auto>();

    const obtenerAuto = async (patente: string) => {
        const response = await findAutoWithPatente(patente);
        setAuto(response);
    };
    const inputMarcaRef = useRef<HTMLInputElement>(null);
    const inputModeloRef = useRef<HTMLInputElement>(null);
    const inputAnioRef = useRef<HTMLInputElement>(null);
    const inputColorRef = useRef<HTMLInputElement>(null);
    const inputNumeroChasisRef = useRef<HTMLInputElement>(null);
    const inputMotorRef = useRef<HTMLInputElement>(null);
    const inputPatenteRef = useRef<HTMLInputElement>(null);

    const handlerConfirmar = () => {
        if (
            inputMarcaRef.current!.value &&
            inputModeloRef.current!.value &&
            inputAnioRef.current!.value &&
            inputColorRef.current!.value &&
            inputNumeroChasisRef.current!.value &&
            inputMotorRef.current!.value &&
            inputPatenteRef.current!.value === ' '
        ) {
            alert('Complete todos los datos');
        } else {
            editarAuto();
        }
    };

    const handlerCancelar = () => {
        // navegarA(`/persona/${auto.idDueño}`);
        accionCancelar();
    };

    const editarAuto = async () => {
        const autoEditado: Auto = {
            idDueño: auto!.idDueño,
            marca: inputMarcaRef.current!.value,
            modelo: inputModeloRef.current!.value,
            anio: inputAnioRef.current!.value,
            color: inputColorRef.current!.value,
            numeroChasis: inputNumeroChasisRef.current!.value,
            motor: inputMotorRef.current!.value,
            patente: inputPatenteRef.current!.value
        };
        const rta = await editAuto(auto!.id!, autoEditado);
        if (rta.status === 200) {
            // navegarA(`/persona/${auto.idDueño}`);
            alert(rta.data);
            accionConfirmar('popup');
        } else {
            alert(rta.data);
        }
    };

    useEffect(() => {
        obtenerAuto(patente);
    }, [patente]);
    return (
        <>
            <div className="formulario">
                <p className="titulo">Edición</p>
                <form className="editar">
                    <p>Marca</p>
                    <input ref={inputMarcaRef} type="Marca" defaultValue={auto?.marca} />

                    <p>Modelo</p>
                    <input ref={inputModeloRef} type="Modelo" defaultValue={auto?.modelo} />

                    <p>Año</p>
                    <input ref={inputAnioRef} type="Año" defaultValue={auto?.anio} />

                    <p>Color</p>
                    <input ref={inputColorRef} type="Colo" defaultValue={auto?.color} />

                    <p>Numero de Chasis</p>
                    <input ref={inputNumeroChasisRef} type="Chasis" defaultValue={auto?.numeroChasis} />

                    <p>Motor</p>
                    <input ref={inputMotorRef} type="Motor" defaultValue={auto?.motor} />

                    <p>Patente</p>
                    <input ref={inputPatenteRef} type="Patente" defaultValue={auto?.patente} />
                </form>
                <div className="botonesAcción">
                    <BotonAccion key={'modificar'} txt={'👍 Modificar'} clase={'agregar'} accion={handlerConfirmar} />
                    <BotonAccion key={'borrar'} txt={'Cancelar'} clase={'cancelar'} accion={handlerCancelar} />
                </div>
            </div>
        </>
    );
};
