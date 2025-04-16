import Persona from '../../Model/Persona';
import { baseURL } from '../BaseURL';

export const editarPersona = async (dniPersona: string, datosNuevos: Persona) => {
    const response = await baseURL.put(
        `/persona/${dniPersona}`,
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
    return response.data;
};
