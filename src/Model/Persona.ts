import Auto from './Auto';

interface Persona {
    id?: string;
    nombre?: string;
    apellido?: string;
    dni?: string;
    fechaNacimiento?: string;
    genero?: string;
    esDonante?: boolean;
    autos?: Auto[];
}

export default Persona;
