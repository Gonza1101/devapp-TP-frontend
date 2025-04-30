import Auto from '../../Model/Auto';
import { ColumnaAccion } from '../ColumnaAccion';

type cardAutoProps = {
    desde: string;
    auto: Auto;
    accionVer: (id: string) => void;
    accionEditar: (id: string) => void;
    accionEliminar: (id: string) => void;
};
export const CardAuto: React.FC<cardAutoProps> = ({ auto, desde, accionVer, accionEditar, accionEliminar }) => {
    const img = `https://rickandmortyapi.com/api/character/avatar/${auto.img}.jpeg`;
    const botonVer = () => {
        accionVer(auto.patente);
    };

    const botonEditar = () => {
        accionEditar(auto.id!);
    };

    const botonEliminar = () => {
        accionEliminar(auto.id!);
    };

    return (
        <>
            <div className="filaAuto">
                <img src={img} alt="alternatetext" />
                <div className="filaCuerpo">
                    <p> {auto.marca}</p>
                    <p>{auto.modelo}</p>
                    <p>{auto.anio}</p>
                    <p>{auto.patente}</p>
                </div>
                {desde === 'auto' ? (
                    <ColumnaAccion
                        key={auto.id}
                        ver={true}
                        editar={false}
                        eliminar={false}
                        tipo={'auto'}
                        botonVer={botonVer}
                        botonEditar={botonEditar}
                        botonEliminar={botonEliminar}
                    ></ColumnaAccion>
                ) : (
                    <ColumnaAccion
                        key={auto.id}
                        ver={true}
                        editar={true}
                        eliminar={true}
                        tipo={'auto'}
                        botonVer={botonVer}
                        botonEditar={botonEditar}
                        botonEliminar={botonEliminar}
                    ></ColumnaAccion>
                )}
            </div>
        </>
    );
};
