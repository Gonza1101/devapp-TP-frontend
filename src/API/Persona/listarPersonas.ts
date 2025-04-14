import { personasApi } from './personaApi';

export const listarPersona = async () => {
    const response = await personasApi.get('/personas');
    return response.data;
};
