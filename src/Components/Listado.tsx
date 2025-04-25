import { useEffect, useState } from 'react';
import Auto from '../Model/Auto';
import Persona from '../Model/Persona';
import { Fila } from './Fila';
import '../CSS/listadoFila.css';

type listarProps = {
    listaPersonas: Persona[] | undefined;
    listaAutos: Auto[] | undefined;
};

export const Listado: React.FC<listarProps> = ({ listaPersonas, listaAutos }) => {
    const [persona, setpersona] = useState<Persona[] | undefined>(undefined);

    const [autos, setAutos] = useState<Auto[] | undefined>(undefined);

    const setearLista = () => {
        if (listaPersonas) {
            setpersona(listaPersonas);
        } else {
            setAutos(listaAutos);
        }
    };

    useEffect(() => {
        setearLista();
    }, []);

    return (
        <>
            <div className="listado">
                {persona
                    ? persona.map((p) => (
                          <Fila key={persona.length} persona={p} auto={undefined} listar={setearLista} />
                      ))
                    : autos?.map((a) => <Fila key={autos.length} persona={undefined} auto={a} listar={setearLista} />)}
            </div>
        </>
    );
};
