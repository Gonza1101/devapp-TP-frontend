import { baseURL } from '../BaseURL';
import Auto from '../../Model/Auto';

export const findAutoWithId = async (idAuto: string) => {
    const response = await baseURL.get<Auto>(`/auto/${idAuto}`);
    return response.data;
};
