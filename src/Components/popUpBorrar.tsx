import '../CSS/popup.css';
type borrarProps = {
    txt: string;
    eliminar: () => void;
    cancelar: () => void | undefined;
};
export const BotonesPopUp: React.FC<borrarProps> = ({ txt, eliminar, cancelar }) => {
    return (
        <>
            <div className="popupcontenido">
                <p>{txt}</p>
                <div className="popupbotones">
                    <button onClick={eliminar} id="confirmarBorrar">
                        Confirmar
                    </button>
                    <button onClick={cancelar} id="cancelarBorrar">
                        Cancelar
                    </button>
                </div>
            </div>
        </>
    );
};
