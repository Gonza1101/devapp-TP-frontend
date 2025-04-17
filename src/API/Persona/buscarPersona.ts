import Persona from '../../Model/Persona';
import { baseURL } from '../BaseURL';

export const buscarPersonaConDni = async (dnipersona: string) => {
    const response = await baseURL.get<Persona>(`/persona/${dnipersona}`);
    return response.data;
};
