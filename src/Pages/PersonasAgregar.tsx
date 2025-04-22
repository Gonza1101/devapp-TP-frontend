import { addPerson } from '../API/Persona/agregarPersona';
import '../CSS/formulario.css';
import Persona from '../Model/Persona';
import { useRef } from 'react';

export const AgregarPersona = () => {
    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputApellidRef = useRef<HTMLInputElement>(null);
    const inputDniRef = useRef<HTMLInputElement>(null);
    const inputFechaNacimientoRef = useRef<HTMLInputElement>(null);
    const inputGeneroRef = useRef<HTMLInputElement>(null);

    const handlerAgregar = () => {
        if (
            !(
                inputNombreRef.current!.value &&
                inputApellidRef.current!.value &&
                inputDniRef.current!.value &&
                inputFechaNacimientoRef.current!.value &&
                inputGeneroRef.current!.value === ' '
            )
        ) {
            agregarPersonaNueva();
        } else {
            alert('Complete todos los datos');
        }
    };

    const agregarPersonaNueva = async () => {
        const personaNueva: Persona = {
            nombre: inputNombreRef.current!.value,
            apellido: inputApellidRef.current!.value,
            dni: inputDniRef.current!.value,
            fechaNacimiento: inputFechaNacimientoRef.current!.value,
            genero: inputGeneroRef.current!.value,
            esDonante: true,
            autos: []
        };
        const rta = await addPerson();
        console.log(rta);
    };
    return (
        <>
            <div className="inicio">
                <div className="formulario">
                    <p className="titulo">Persona Nueva</p>
                    <form>
                        <p>Nombre</p>
                        <input ref={inputNombreRef} type="Nombre" />
                        <p>Apellido</p>
                        <input ref={inputApellidRef} type="Apellido" />
                        <p>DNI</p>
                        <input ref={inputDniRef} type="DNI" />
                        <p>Fecha de Nacimiento</p>
                        <input ref={inputFechaNacimientoRef} type="Fecha de nacimiento" />
                        <p>Donante</p>
                        <input type="checkbox" />
                        <p>Genero</p>
                        <input ref={inputGeneroRef} list="genero" type="text" />
                        <datalist id="genero">
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino"></option>
                            <option value="No Binario"></option>
                        </datalist>
                    </form>
                    <div className="botonesAccion">
                        <button onClick={handlerAgregar} className="agregarPersona">👍 Agregar </button>
                    </div>
                </div>
            </div>
        </>
    );
};
