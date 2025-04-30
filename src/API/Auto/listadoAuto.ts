import { baseURL } from '../BaseURL';
import Auto from '../../Model/Auto';

export const listadoAuto = async () => {
    const response = await baseURL.get<Auto[]>('/autos');
    const autos = response.data;
    return autos;
};
