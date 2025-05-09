import { PersonaComponente } from '../../Components/Persona/PersonaComponente';
import '../../CSS/botenesAccion.css';
export const PersonaPage = () => {
    return (
        <>
            <div className="inicio">
                <div className="listado">
                    <PersonaComponente key={'persona'} />
                </div>
            </div>
        </>
    );
};
