import Auto from '../../Model/Auto';
import { baseURL } from '../BaseURL';

export const autoConId = async (idAuto: string) => {
    const response = await baseURL.get<Auto>(`/auto/id/${idAuto}`);
    return response.data;
};
