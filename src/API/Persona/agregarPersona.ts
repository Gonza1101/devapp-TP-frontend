import { baseURL } from '../BaseURL';
import Persona from '../../Model/Persona';

export const addPerson = async (personaNueva: Persona) => {
    console.log(personaNueva.fechaNacimiento!.replace('-', ','));
    const nac = new Date(personaNueva.fechaNacimiento!.replace('-', ','));
    const response = await baseURL.post(
        '/persona',
        JSON.stringify({
            nombre: personaNueva.nombre,
            apellido: personaNueva.apellido,
            dni: personaNueva.dni,
            fechaNacimiento: nac,
            genero: personaNueva.genero,
            esDonante: personaNueva.esDonante,
            img: Math.floor(Math.random() * 100)
        }),
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    return response.data;
};
