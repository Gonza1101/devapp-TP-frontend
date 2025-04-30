import { baseURL } from '../BaseURL';

export const patchAuto = (idPersona: string, idAuto: string) => {
    const response = baseURL.patch(
        `/persona/auto/${idPersona}`,
        JSON.stringify({
            id: idAuto
        })
    );

    return response;
};
