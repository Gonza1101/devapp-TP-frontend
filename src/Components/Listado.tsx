import { useEffect, useState } from 'react';
import Auto from '../Model/Auto';
import Persona from '../Model/Persona';
import '../CSS/listadoFila.css';
import { CardPersona } from './Persona/CardPersona';
import { CardAuto } from './Auto/CardAuto';

type listarProps = {
    tipo: string;
    listado: Persona[] | Auto[] | undefined;
    ver: (ve: string) => void;
    editar: (ed: string) => void;
    eliminar: (el: string) => void;
};

export const Listado: React.FC<listarProps> = ({ tipo, listado, ver, editar, eliminar }) => {
    const [personas, setPersona] = useState<Persona[]>([]);
    const [autos, setAutos] = useState<Auto[]>([]);
    //Seteo el listado correspondiente según el tipo que me llegue
    const actualizarListado = (tipo: string) => {
        if (tipo === 'persona') {
            setPersona(listado);
        }
        if (tipo === 'auto') {
            setAutos(listado);
        }
    };

    // Accion de Botones DUDAS QUE SE UTILICE ACA
    useEffect(() => {
        actualizarListado(tipo);
    }, [tipo, listado]);

    return (
        <>
            <div className="listado">
                {tipo === 'persona'
                    ? personas.map((p) => (
                          <CardPersona
                              key={p.id}
                              persona={p}
                              accionVer={ver}
                              accionEditar={editar}
                              accionEliminar={eliminar}
                          />
                      ))
                    : null}
                {tipo === 'auto'
                    ? autos.map((a) => (
                          <CardAuto
                              key={a.id}
                              auto={a}
                              accionVer={ver}
                              accionEditar={editar}
                              accionEliminar={eliminar}
                              desde={'auto'}
                          />
                      ))
                    : null}
            </div>
        </>
    );
};
