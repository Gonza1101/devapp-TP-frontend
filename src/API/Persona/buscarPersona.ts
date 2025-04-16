import Persona from '../../Model/Persona';
import { baseURL } from '../BaseURL';

export const buscarPersonaConDni = async (dnipersona: string) => {
    console.log(dnipersona);
    const response = await baseURL.get<Persona>(`/persona/${dnipersona}`);
    return response.data;
};
