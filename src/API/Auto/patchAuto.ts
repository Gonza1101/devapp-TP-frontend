import { baseURL } from '../BaseURL';

export const patchAuto = (idPersona: string, idAuto: string) => {
    // console.log(idPersona);
    // console.log(idAuto);
    const response = baseURL.patch(
        `/persona/auto/${idPersona}`,
        JSON.stringify({
            id: idAuto
        })
    );

    return response;
};
