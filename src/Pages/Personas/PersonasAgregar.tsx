import { useNavigate } from 'react-router-dom';
import { addPerson } from '../../API/Persona/agregarPersona';
import Persona from '../../Model/Persona';
import { useRef } from 'react';
import { BotonAccion } from '../../Components/Botones/botonAccion';

export const AgregarPersona = () => {
    const navegarA = useNavigate();
    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputApellidRef = useRef<HTMLInputElement>(null);
    const inputDniRef = useRef<HTMLInputElement>(null);
    const inputFechaNacimientoRef = useRef<HTMLInputElement>(null);
    const inputGeneroRef = useRef<HTMLInputElement>(null);
    const inputEsDonanteRef = useRef<HTMLInputElement>(null);

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
            genero: inputGeneroRef.current!.value.toLowerCase(),
            esDonante: inputEsDonanteRef.current!.checked.toString(),
            autos: []
        };
        await addPerson(personaNueva);
        navegarA('/personas');
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
                        <input ref={inputFechaNacimientoRef} type="date" name="fecha_nacimiento"></input>
                        <p>Donante</p>
                        <input id="true" type="checkbox" ref={inputEsDonanteRef} />
                        <label htmlFor="true">Sí</label>
                        <p>Genero</p>
                        <input ref={inputGeneroRef} list="genero" type="text" />
                        <datalist id="genero">
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="NoBinario">No Binario</option>
                        </datalist>
                    </form>
                    <div className="botonesAccion">
                        <BotonAccion
                            key={'agregar'}
                            txt={'👍 Agregar'}
                            clase={'agregarPersona'}
                            accion={handlerAgregar}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
