import { baseURL } from '../BaseURL';

export const deletePersona = (idPersona: string) => {
    const response = baseURL.delete(`/persona/${idPersona}`);

    return response;
};
