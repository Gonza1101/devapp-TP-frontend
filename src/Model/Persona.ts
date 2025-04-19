import Auto from './Auto';

interface Persona {
    id: string;
    nombre: string;
    apellido: string;
    dni: string;
    fechaNacimiento: string;
    genero: 'masculino' | 'femenino' | 'noBinario';
    esDonante: boolean;
    autos: Auto[];
}

export default Persona;
