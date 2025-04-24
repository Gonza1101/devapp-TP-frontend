type borrarProps = {
    borrar: () => void;
};
export const BorrarComponente: React.FC<borrarProps> = ({ borrar }) => {
    const handlerBorrar = () => {
        borrar();
    };
    return (
        <>
            <div className="popUp">
                <button onClick={handlerBorrar} className="confirmar">
                    Confirmar
                </button>
                <button className="cancelar">Cancelar</button>
            </div>
        </>
    );
};
