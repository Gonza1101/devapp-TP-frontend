import { baseURL } from '../BaseURL';

export const listarPersona = async () => {
    try {
        const response = await baseURL.get('/personas');
        const personas = response.data;
        return personas;
    } catch (error) {
        console.log(error);
        return [];
    }
};
