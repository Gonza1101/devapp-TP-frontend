import { baseURL } from '../BaseURL';
import Auto from '../../Model/Auto';

export const findAutoWithPatente = async (patenteAuto: string) => {
    const response = await baseURL.get<Auto>(`/persona/${patenteAuto}`);
    return response.data;
};
