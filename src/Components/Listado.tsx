import { useEffect, useState } from 'react';
import Auto from '../Model/Auto';
import Persona from '../Model/Persona';
import { Fila } from './Fila';

type listarProps = {
    listaPersonas: Persona[] | undefined;
    listaAutos: Auto[] | undefined;
};

export const Listado: React.FC<listarProps> = ({ listaPersonas, listaAutos }) => {
    const [persona, setpersona] = useState<Persona[] | undefined>(undefined);

    const [autos, setAutos] = useState<Auto[] | undefined>(undefined);

    const setearLista = () => {
        if (listaPersonas) {
            console.log('Seteo Lista de Personas');
            setpersona(listaPersonas);
        }
        if (listaAutos) {
            console.log('seteo lista de Autos');
            setAutos(listaAutos);
        }
    };

    useEffect(() => {
        setearLista();
    }, []);

    return (
        <>
            <div className="listado">
                <div className="fila">
                    {persona
                        ? persona.map((p) => <Fila key={persona.length} persona={p} auto={undefined} />)
                        : autos?.map((a) => <Fila key={autos.length} persona={undefined} auto={a} />)}
                </div>
            </div>
        </>
    );
};
