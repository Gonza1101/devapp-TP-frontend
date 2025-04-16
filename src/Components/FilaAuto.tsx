import Auto from '../Model/Auto';

type filaProps = {
    auto: Auto;
};
export const Fila: React.FC<filaProps> = ({ auto }) => {
    return (
        <>
            <div>
                <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="alternatetext" />
                <h3>Marca: {auto.marca}</h3>
                <h3>Modelo: {auto.modelo}</h3>
                <h3>Año {auto.año}</h3>
                <ColumnaAccion key={auto.papente} auto={auto}></ColumnaAccion>
            </div>
        </>
    );
};
