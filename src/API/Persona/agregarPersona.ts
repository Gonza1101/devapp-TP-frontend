import { baseURL } from '../BaseURL';
import Persona from '../../Model/Persona';

export const addPerson = async (personaNueva: Persona) => {
    const response = await baseURL.post(
        '/persona',
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

// export const addPerson = async () => {
//     const response = await baseURL.post(
//         '/persona',
//         JSON.stringify({
//             nombre: 'Bruno',
//             apellido: 'Wayne',
//             dni: '11222333',
//             fechaDeNacimiento: '1932-4-7',
//             genero: 'masculino',
//             esDonante: 'true',
//             auto: []
//         }),
//         {
//             headers: { 'Content-Type': 'application/json' }
//         }
//     );
//     return response.data;
// };
