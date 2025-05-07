import { PersonaComponente } from '../../Components/Persona/PersonaComponente';
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
