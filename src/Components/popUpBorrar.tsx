import '../CSS/popup.css';
type borrarProps = {
    tipo: string;
    eliminar: () => void;
    cancelar: () => void | undefined;
};
export const BotonesPopUp: React.FC<borrarProps> = ({ tipo, eliminar, cancelar }) => {
    return (
        <>
            <div className="popupcontenido">
                <p>¿Estás seguro de que quieres borrar esta {tipo}?</p>
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
