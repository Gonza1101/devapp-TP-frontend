import React from 'react';
import Persona from '../Model/Persona';
import { Listar } from '../Components/Lista';

type PersonasPagesProps = {
    personas: Persona[];
};
export const PersonaPage: React.FC<PersonasPagesProps> = ({ personas }) => {
    const [lista, setLista] = React.useState<Persona[]>([]);

    React.useEffect(() => {
        setLista(personas);
    });

    return (
        <>
            <h2>Estas son todas las Personas Titulo PERSONA</h2>
            <button> Agregar Nuevo en VERDE</button>
            {/*TODO Ir a una Pantalla de Creacion de Persona */}
            <Listar key={lista.length} lista={lista} />
        </>
    )
}