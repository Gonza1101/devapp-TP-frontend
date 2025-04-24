import { Entidad } from './entidad';

interface Auto extends Entidad {
    id: string;
    idDueño: string;
    marca: string;
    modelo: string;
    anio: number;
    color: string;
    numeroDeChasis: string;
    motor: string;
    patente: string;
}

export default Auto;
