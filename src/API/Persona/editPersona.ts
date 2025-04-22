import Persona from '../../Model/Persona';
import { baseURL } from '../BaseURL';

export const editPersona = async (idPersona: string, datosNuevos: Persona) => {
    const response = await baseURL.put(
        `/persona/${idPersona}`,
        JSON.stringify({
            nombre: datosNuevos.nombre,
            apellido: datosNuevos.apellido,
            dni: datosNuevos.dni,
            fechaDeNacimiento: datosNuevos.fechaNacimiento,
            genero: datosNuevos.genero,
            esDonante: datosNuevos.esDonante
        }),
        {}
    );
    return response.status;
};
