import { baseURL } from '../BaseURL';

export const personaConDni = async (dnipersona) => {
    const response = await baseURL.get(`/persona/${dnipersona}`);
    return response.data;
};
