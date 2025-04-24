import { useNavigate, useParams } from 'react-router-dom';
import { editPersona } from '../API/Persona/editPersona';
import '../CSS/formulario.css';
import Persona from '../Model/Persona';
import { useEffect, useRef, useState } from 'react';
import { personaConId } from '../API/Persona/persocaConId';

export const EditarPersona = () => {
    const { idPersona } = useParams<{ idPersona: string }>();
    const [persona, setPersona] = useState<Persona | undefined>(undefined);
    const obtenePersonaConId = async (idPersona: string) => {
        const response = await personaConId(idPersona);
        setPersona(response);
    };
    const navegarA = useNavigate();
    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputApellidRef = useRef<HTMLInputElement>(null);
    const inputDniRef = useRef<HTMLInputElement>(null);
    const inputFechaNacimientoRef = useRef<HTMLInputElement>(null);
    const inputGeneroRef = useRef<HTMLInputElement>(null);
    const inputEsDonanteRef = useRef<HTMLInputElement>(null);

    const handlerEditar = () => {
        if (
            !(
                inputNombreRef.current!.value &&
                inputApellidRef.current!.value &&
                inputDniRef.current!.value &&
                inputFechaNacimientoRef.current!.value &&
                inputGeneroRef.current!.value === ' '
            )
        ) {
            editarPersona();
        } else {
            alert('Complete todos los datos');
        }
    };

    const editarPersona = async () => {
        const personaEditada: Persona = {
            nombre: inputNombreRef.current!.value,
            apellido: inputApellidRef.current!.value,
            dni: inputDniRef.current!.value,
            fechaNacimiento: inputFechaNacimientoRef.current!.value,
            genero: inputGeneroRef.current!.value.toLowerCase(),
            esDonante: inputEsDonanteRef.current!.checked,
            autos: []
        };
        const rta = await editPersona(idPersona!, personaEditada);
        console.log(rta === 200);
        if (rta === 200) {
            navegarA('/personas');
        } else {
            alert('error 400');
        }
    };

    useEffect(() => {
        obtenePersonaConId(idPersona!);
    }, [idPersona]);
    return (
        <>
            <div className="inicio">
                <div className="formulario">
                    <p className="titulo">Persona Nueva</p>
                    <form className="editar">
                        <p>Nombre</p>
                        <input ref={inputNombreRef} type="Nombre" defaultValue={persona?.nombre} />
                        <label>Apellido</label>
                        <input ref={inputApellidRef} type="Apellido" defaultValue={persona?.apellido} />
                        <label>DNI</label>
                        <input ref={inputDniRef} type="DNI" defaultValue={persona?.dni} />
                        <label>Fecha de Nacimiento</label>
                        <input
                            ref={inputFechaNacimientoRef}
                            type="date"
                            name="fecha_nacimiento"
                            value={persona?.fechaNacimiento}
                        ></input>
                        <label>Donante</label>
                        <input id="true" type="checkbox" ref={inputEsDonanteRef} />
                        <label htmlFor="true">Sí</label>
                        <label>Genero</label>
                        <input ref={inputGeneroRef} list="genero" type="text" defaultValue={persona?.genero} />
                        <datalist id="genero">
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino"></option>
                            <option value="NoBinario"></option>
                        </datalist>
                    </form>
                    <div className="botonesAccion">
                        <button onClick={handlerEditar} className="agregarPersona">
                            👍 Modificar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
