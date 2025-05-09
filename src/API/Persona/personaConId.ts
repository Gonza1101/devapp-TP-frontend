import Persona from '../../Model/Persona';
import { baseURL } from '../BaseURL';

export const personaConId = async (idpersona: string) => {
    const response = await baseURL.get<Persona>(`/persona/${idpersona}`);
    return response.data;
};
