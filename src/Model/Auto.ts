import { Entidad } from './entidad';

interface Auto extends Entidad {
    id?: string;
    idDueño: string;
    marca: string;
    modelo: string;
    anio: string;
    color: string;
    numeroChasis: string;
    motor: string;
    patente: string;
}

export default Auto;
