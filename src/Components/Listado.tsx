import { useEffect, useState } from 'react';
import Auto from '../Model/Auto';
import Persona from '../Model/Persona';
// import { Fila } from './Fila';
import '../CSS/listadoFila.css';
import { CardPersona } from './Persona/CardPersona';
import { CardAuto } from './Auto/CardAuto';

type listarProps = {
    listaPersonas: Persona[] | undefined;
    listaAutos: Auto[] | undefined;
    ver: (id: string) => void;
    editar: (id: string) => void;
    eliminar: (id: string) => void;
};

export const Listado: React.FC<listarProps> = ({ listaPersonas, listaAutos, ver, editar, eliminar }) => {
    const [personas, setpersona] = useState<Persona[] | undefined>(undefined);

    const [autos, setAutos] = useState<Auto[] | undefined>(undefined);

    const setearLista = () => {
        if (listaPersonas) {
            // console.log(listaPersonas);
            setpersona(listaPersonas);
        }
        if (listaAutos) {
            // console.log(listaAutos);
            setAutos(listaAutos); //seteo la lista solo con una lista de auto.
        }
    };

    useEffect(() => {
        setearLista();
    });

    return (
        <>
            <div className="listado">
                {personas
                    ? personas.map((p) => (
                          <CardPersona
                              key={p.id}
                              persona={p}
                              accionVer={ver}
                              accionEditar={editar}
                              accionEliminar={eliminar}
                          />
                      ))
                    : autos?.map((a) => (
                          <CardAuto
                              key={a.id}
                              desde={'auto'}
                              auto={a}
                              accionVer={ver}
                              accionEditar={editar}
                              accionEliminar={eliminar}
                          />
                      ))}
            </div>
        </>
    );
};
