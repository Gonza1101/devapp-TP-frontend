import Persona from '../../Model/Persona';
import { baseURL } from '../BaseURL';

export const listarPersona = async () => {
    const response = await baseURL.get<Persona[]>('/personas');
    const personas = response.data;
    return personas;
};
