import Auto from './Model/Auto';

type listarProps = {
    lista: Auto[];
};

export const ListarPersona: React.FC<listarProps> = ({ lista }) => {
    return (
        <>
            <div>
                <h2>Listado de Personas Registradas</h2>
                {lista.map((a) => (
                    <FilaAuto key={lista.length} auto={a} />
                ))}
            </div>
        </>
    );
};
