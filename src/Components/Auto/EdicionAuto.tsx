import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { autoConId } from '../../API/Auto/autoConId';
import { editAuto } from '../../API/Auto/editAuto';
import Auto from '../../Model/Auto';

type edicionAuto = {
    auto: Auto;
};
export const EdicionAuto: React.FC<edicionAuto> = ({ auto }) => {
    const navegarA = useNavigate();
    const inputDniDuenioRef = useRef<HTMLInputElement>(null);
    const inputMarcaRef = useRef<HTMLInputElement>(null);
    const inputModeloRef = useRef<HTMLInputElement>(null);
    const inputAnioRef = useRef<HTMLInputElement>(null);
    const inputColorRef = useRef<HTMLInputElement>(null);
    const inputNumeroChasisRef = useRef<HTMLInputElement>(null);
    const inputMotorRef = useRef<HTMLInputElement>(null);
    const inputPatenteRef = useRef<HTMLInputElement>(null);

    const handlerEditar = () => {
        if (
            !(
                inputDniDuenioRef.current!.value &&
                inputMarcaRef.current!.value &&
                inputModeloRef.current!.value &&
                inputAnioRef.current!.value &&
                inputColorRef.current!.value &&
                inputNumeroChasisRef.current!.value &&
                inputMotorRef.current!.value &&
                inputPatenteRef.current!.value === ' '
            )
        ) {
            editarAuto();
        } else {
            alert('Complete todos los datos');
        }
    };

    const editarAuto = async () => {
        const autoEditado: Auto = {
            idDueño: inputDniDuenioRef.current!.value,
            marca: inputMarcaRef.current!.value,
            modelo: inputModeloRef.current!.value,
            anio: inputAnioRef.current!.value,
            color: inputColorRef.current!.value,
            numeroChasis: inputNumeroChasisRef.current!.value,
            motor: inputMotorRef.current!.value,
            patente: inputPatenteRef.current!.value
        };
        const rta = await editAuto(auto.id!, autoEditado);
        if (rta === 200) {
            navegarA('/autos');
        } else {
            alert('error 400');
        }
    };

    const obtenerAutoConId = async (idAuto: string) => {
        const response = await autoConId(idAuto);
        setAuto(response);
    };

    useEffect(() => {
        obtenerAutoConId(idAuto!);
    }, [idAuto]);
    return (
        <>
            <div className="inicio">
                <div className="formulario">
                    <p className="titulo">Auto</p>
                    <form className="editar">
                        <p>Marca</p>
                        <input ref={inputMarcaRef} type="text" defaultValue={auto?.marca} />
                        <p>Modelo</p>
                        <input ref={inputModeloRef} type="text" defaultValue={auto?.modelo} />
                        <p>Año</p>
                        <input ref={inputAnioRef} type="text" defaultValue={auto?.anio} />
                        <p>Color</p>
                        <input ref={inputColorRef} type="text" value={auto?.color}></input>
                        <p>Numero de Chasis</p>
                        <input ref={inputNumeroChasisRef} type="text" value={auto?.numeroChasis}></input>
                        <p>Motor</p>
                        <input ref={inputMotorRef} type="text" value={auto?.motor}></input>
                        <p>Patente</p>
                        <input ref={inputPatenteRef} type="text" value={auto?.patente}></input>
                    </form>
                    <div className="botonesAcción">
                        <button onClick={handlerEditar} className="agregarPersona">
                            👍 Modificar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
