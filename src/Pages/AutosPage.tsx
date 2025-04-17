import React from 'react';
import Auto from '../Model/Auto';
import { useNavigate } from 'react-router-dom';

export const AutoPage = () => {
    const [lista, setLista] = React.useState<Auto[]>([]);
    const navegarA = useNavigate();

    const 

    return (
        <>
            <h2>Estos son los todos los autos</h2>
        </>
    );
};
