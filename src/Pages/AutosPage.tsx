import React from 'react';
import Auto from '../Model/Auto';

export const AutoPage = () => {
    const [lista, setLista] = React.useState<Auto[]>([]);

    return (
        <>
            <h2>Estos son los todos los autos</h2>
        </>
    );
};
