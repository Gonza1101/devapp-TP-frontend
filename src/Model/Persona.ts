import Auto from './Auto';
import { Entidad } from './entidad';

interface Persona extends Entidad {
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

// *generic*
// export type AttrPersona = keyof Persona;

// export default Persona;

// type Prop<T,> = {
//     entidad: T;
//     atributos: (keyof T)[];
// };

// const f = <T,>(p: Prop<T>) => {
//     return p;
// };

// f({
//     entidad: { nombre: '', apellido: '' },
//     atributos: ['nombre', 'caca']
// });

// entidad[nombre]
