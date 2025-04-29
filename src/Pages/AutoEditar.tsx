import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { autoConId } from '../API/Auto/autoConId';
import { editAuto } from '../API/Auto/editAuto';
import Auto from '../Model/Auto';

export const AutoEditar = () => {
    const { idAuto } = useParams<{ idAuto: string }>();
    const [auto, setAuto] = useState<Auto | undefined>(undefined);
    const navegarA = useNavigate();

    const inputDniDuenioRef = useRef<HTMLInputElement>(null);
    const inputMarcaRef = useRef<HTMLInputElement>(null);
    const inputModeloRef = useRef<HTMLInputElement>(null);
    const inputAnioRef = useRef<HTMLInputElement>(null);
    const inputColorRef = useRef<HTMLInputElement>(null);
    const inputNumeroChasisRef = useRef<HTMLInputElement>(null);
    const inputMotorRef = useRef<HTMLInputElement>(null);
    const inputPatente = useRef<HTMLInputElement>(null);

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
                inputPatente.current!.value === ' '
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
            numeroDeChasis: inputNumeroChasisRef.current!.value,
            motor: inputMotorRef.current!.value,
            patente: inputPatente.current!.value
        };
    };

    const obtenerAutoConId = async (idAuto: string) => {
        const response = await autoConId(idAuto);
        setAuto(response);
    };
    return (
        <>
            <div className="inicio">
                <div className="formulario">
                    <p className="titulo">Auto</p>
                </div>
            </div>
        </>
    );
};
