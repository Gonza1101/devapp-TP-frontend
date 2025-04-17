import Auto from '../Model/Auto';
import { FilaAuto } from './FilaAuto';

type listarProps = {
    lista: Auto[];
};

export const ListarAuto: React.FC<listarProps> = ({ lista }) => {
    return (
        <>
            <div>
                <h2>Lista de Auto</h2>
                {lista.map((a) => (
                    <FilaAuto key={lista.length} auto={a} />
                ))}
            </div>
        </>
    );
};
