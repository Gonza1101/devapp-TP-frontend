import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { editAuto } from '../../API/Auto/editAuto';
import Auto from '../../Model/Auto';

type edicionAuto = {
    auto: Auto;
};
export const EdicionAuto: React.FC<edicionAuto> = ({ auto }) => {
    const navegarA = useNavigate();
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
            marca: inputMarcaRef.current!.value,
            modelo: inputModeloRef.current!.value,
            anio: inputAnioRef.current!.value,
            color: inputColorRef.current!.value,
            numeroChasis: inputNumeroChasisRef.current!.value,
            motor: inputMotorRef.current!.value,
            patente: inputPatenteRef.current!.value
        };
        const rta = await editAuto(auto.id!, autoEditado);
        if (rta.status === 200) {
            navegarA('/autos');
        } else {
            alert('error 400');
        }
    };
    return (
        <>
            <div className="inicio">
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
                        <button onClick={handlerEditar} className="agregarPersona">
                            👍 Modificar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
