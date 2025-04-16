import { baseURL } from '../BaseURL';
import Persona from '../../Model/Persona';

export const addPerson = async (personaNueva: Persona) => {
    const response = await baseURL.post(
        '',
        JSON.stringify({
            nombre: personaNueva.nombre,
            apellido: personaNueva.apellido,
            dni: personaNueva.dni,
            fechaDeNacimiento: personaNueva.fechaNacimiento,
            genero: personaNueva.genero,
            esDonante: personaNueva.esDonante
        }),
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    return response.data;
};
