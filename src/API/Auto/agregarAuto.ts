import Auto from '../../Model/Auto';
import { baseURL } from '../BaseURL';

export const addAuto = async (autoNuevo: Auto) => {
    const response = await baseURL.post(
        '',
        JSON.stringify({
            id: autoNuevo.id,
            dniDueño: autoNuevo.idDueño,
            marca: autoNuevo.marca,
            modelo: autoNuevo.modelo,
            anio: autoNuevo.año,
            color: autoNuevo.color,
            numeroChasis: autoNuevo.numeroDeChasis,
            motor: autoNuevo.motor,
            patente: autoNuevo.papente
        }),
        {
            headers: { 'Content-Type': 'applocation/json' }
        }
    );
    return response.data;
};
