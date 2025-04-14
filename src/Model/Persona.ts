import Auto from './Auto';

interface Persona {
    id: string;
    nombre: string;
    apellido: string;
    dni: string;
    fechaNacimiento: Date;
    genero: 'masculino' | 'femenino' | 'noBinario';
    autos: Auto[];
    esDonante: boolean;
}

export default Persona;
