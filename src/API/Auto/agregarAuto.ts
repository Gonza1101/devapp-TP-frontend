import Auto from '../../Model/Auto';
import { baseURL } from '../BaseURL';

export const addAuto = async (autoNuevo: Auto) => {
    console.log(autoNuevo);
    const response = await baseURL.post('/auto', JSON.stringify(autoNuevo));
    console.log(response.status);
    console.log(response.data);
    return response;
};
