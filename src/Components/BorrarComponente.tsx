import '../CSS/popup.css';
type borrarProps = {
    eliminar: () => void;
    cancelar: () => void;
};
export const BorrarComponente: React.FC<borrarProps> = ({ eliminar, cancelar }) => {
    return (
        <>
            <div className="popupcontenido">
                <p>¿Estás seguro de que quieres borrar esta persona?</p>
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
