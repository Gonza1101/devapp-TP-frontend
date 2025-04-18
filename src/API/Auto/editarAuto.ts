import { baseURL } from '../BaseURL';
import Auto from '../../Model/Auto';
export const editAuto = async (patenteAuto: string, datosAuto: Auto) => {
    const response = await baseURL.put(
        `/auto/${patenteAuto}`,
        JSON.stringify({
            id: datosAuto.id,
            dniDueño: datosAuto.idDueño,
            marca: datosAuto.marca,
            modelo: datosAuto.modelo,
            anio: datosAuto.año,
            color: datosAuto.color,
            numeroChasis: datosAuto.numeroDeChasis,
            motor: datosAuto.motor,
            patente: datosAuto.papente
        }),
        {}
    );
    return response.data;
};
