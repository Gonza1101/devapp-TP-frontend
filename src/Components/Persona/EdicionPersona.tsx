import { useNavigate } from 'react-router-dom';
import Persona from '../../Model/Persona';
import { useRef } from 'react';
import { editPersona } from '../../API/Persona/editPersona';
import { BotonAccion } from '../Botones/botonAccion';

type edicionPersona = {
    persona: Persona;
};
export const EdicionPersona: React.FC<edicionPersona> = ({ persona }) => {
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
            esDonante: inputEsDonanteRef.current!.checked.toString(),
            autos: []
        };
        const rta = await editPersona(persona.id!, personaEditada);
        console.log(rta === 200);
        if (rta === 200) {
            navegarA('/personas');
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
                        <p>Nombre</p>
                        <input ref={inputNombreRef} type="Nombre" defaultValue={persona?.nombre} />

                        <p>Apellido</p>
                        <input ref={inputApellidRef} type="Apellido" defaultValue={persona?.apellido} />

                        <p>DNI</p>
                        <input ref={inputDniRef} type="DNI" defaultValue={persona?.dni} />

                        <p>Fecha de Nacimiento</p>
                        <label>{}</label>
                        <input
                            ref={inputFechaNacimientoRef}
                            type="Date"
                            name="fecha_nacimiento"
                            defaultValue={persona?.fechaNacimiento}
                        ></input>

                        <p>Donante </p>
                        <input id="true" type="checkbox" ref={inputEsDonanteRef} />
                        <label htmlFor="true">Sí</label>

                        <p>Genero</p>
                        <input ref={inputGeneroRef} list="genero" type="text" defaultValue={persona?.genero} />
                        <datalist id="genero">
                            <option value="Masculino"></option>
                            <option value="Femenino"></option>
                            <option value="NoBinario"></option>
                        </datalist>
                    </form>
                    <div className="botonesAccion">
                        <BotonAccion
                            key={'modificar'}
                            txt={'👍 Modificar'}
                            clase={'agregarPersona'}
                            accion={handlerEditar}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
