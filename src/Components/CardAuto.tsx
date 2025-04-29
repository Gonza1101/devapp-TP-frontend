import Auto from '../Model/Auto';
import { ColumnaAccion } from './ColumnaAccion';

type cardAutoProps = {
    auto: Auto;
    accionVer: (id: string) => void;
    accionEditar: (id: string) => void;
    accionEliminar: (id: string) => void;
};
export const CardAuto: React.FC<cardAutoProps> = ({ auto, accionVer, accionEditar, accionEliminar }) => {
    const botonVer = () => {
        console.log(auto.patente);
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
                <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="alternatetext" />
                <div className="filaCuerpo">
                    <p> {auto.marca}</p>
                    <p>{auto.modelo}</p>
                    <p>{auto.anio}</p>
                    <p>{auto.patente}</p>
                </div>
                <ColumnaAccion
                    key={auto.id}
                    tipo={'auto'}
                    botonVer={botonVer}
                    botonEditar={botonEditar}
                    botonEliminar={botonEliminar}
                ></ColumnaAccion>
            </div>
        </>
    );
};
