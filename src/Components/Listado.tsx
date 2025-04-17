import { useEffect, useState } from 'react';
import Auto from '../Model/Auto';
import Persona from '../Model/Persona';
import { Fila } from './Fila';

type listarProps = {
    listaPersonas: Persona[] | undefined;
    listaAutos: Auto[] | undefined;
};

export const Listado: React.FC<listarProps> = ({ listaPersonas, listaAutos }) => {
    const [persona, setpersona] = useState<Persona[]>([]);

    const [auto, setAuto] = useState<Auto[]>([]);

    const setearLista = () => {
        if (listaPersonas !== undefined) {
            setpersona(listaPersonas);
        }
        if (listaAutos !== undefined) {
            setAuto(listaAutos);
        }
    };

    useEffect(() => {
        setearLista();
    });

    return (
        <>
            <div>
                <h2>Listado de Personas Registradas</h2>
                {persona !== undefined
                    ? persona.map((p) => <Fila key={persona.length} persona={p} auto={undefined} />)
                    : auto.map((a) => <Fila key={auto.length} persona={undefined} auto={a} />)}
            </div>
        </>
    );
};
