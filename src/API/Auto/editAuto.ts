import { baseURL } from '../BaseURL';
import Auto from '../../Model/Auto';

export const editAuto = async (idAuto: string, datosAuto: Auto) => {
    console.log(datosAuto);
    const response = await baseURL.put(
        `/auto/${idAuto}`,
        JSON.stringify({
            idDueño: datosAuto.idDueño,
            marca: datosAuto.marca,
            modelo: datosAuto.modelo,
            anio: parseInt(datosAuto.anio),
            color: datosAuto.color,
            numeroChasis: datosAuto.numeroChasis,
            motor: datosAuto.motor,
            patente: datosAuto.patente
        })
    );
    return response;
};
