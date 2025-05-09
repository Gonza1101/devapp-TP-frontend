import { useNavigate } from 'react-router-dom';
import Persona from '../../Model/Persona';
import { useRef } from 'react';
import { editPersona } from '../../API/Persona/editPersona';
import { BotonAccion } from '../Botones/BotonAccion';

type edicionPersona = {
    persona: Persona;
    accionConfirmar?: () => void;
    accionCancelar: () => void;
};
export const EdicionPersona: React.FC<edicionPersona> = ({ persona, accionConfirmar, accionCancelar }) => {
    const navegarA = useNavigate();
    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputApellidRef = useRef<HTMLInputElement>(null);
    const inputDniRef = useRef<HTMLInputElement>(null);
    const inputFechaNacimientoRef = useRef<HTMLInputElement>(null);
    const inputGeneroRef = useRef<HTMLInputElement>(null);
    const inputEsDonanteRef = useRef<HTMLInputElement>(null);

    const handlerCancelar = () => {
        if (accionConfirmar) {
            accionCancelar();
        } else {
            navegarA('/personas');
        }
    };
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
            handlerThen();
        } else {
            alert('Complete todos los datos');
        }
    };
    const handlerThen = () => {
        if (accionConfirmar) {
            accionConfirmar();
        } else {
            navegarA('/personas');
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
        if (rta === 200) {
            alert('Persona Editada');
        } else {
            alert('error 400');
        }
    };
    return (
        <>
            <div className="formulario">
                <p className="titulo">Editar Persona</p>
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
                    <BotonAccion key={'modificar'} txt={'👍 Modificar'} clase={'ver'} accion={handlerEditar} />
                    <BotonAccion key={'cancelar'} txt={'Cancelar'} clase={'borrar'} accion={handlerCancelar} />
                </div>
            </div>
        </>
    );
};
