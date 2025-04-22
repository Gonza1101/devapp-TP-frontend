import Auto from './Auto';

interface Persona {
    id?: string;
    nombre?: string;
    apellido?: string;
    dni?: string;
    fechaNacimiento?: string;
    genero?: string;
    esDonante?: string;
    autos?: Auto[];
}

export default Persona;
