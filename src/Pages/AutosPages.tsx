import React from 'react';
import Auto from '../Model/Auto';
import { Listar } from '../Components/Lista';

type PersonasPagesProps = {
    personas: Auto[];
};
export const PersonaPage: React.FC<PersonasPagesProps> = ({ personas }) => {
    const [lista, setLista] = React.useState<Auto[]>([]);

    React.useEffect(() => {
        setLista(personas);
    });

    return (
        <>
            <h2>Estos son los todos los autos</h2>
            <Listar key={lista.length} lista={lista} />
        </>
    )
}