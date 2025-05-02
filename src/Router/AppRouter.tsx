import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { InicioPage } from '../Pages/InicioPage';
import { PersonaPage } from '../Pages/Personas/PersonaPage';
import { AutoPage } from '../Pages/Autos/AutosPage';
import { AgregarPersona } from '../Pages/Personas/PersonasAgregar';
import { VerPersona } from '../Pages/Personas/PersonasVer';
import { EditarPersona } from '../Pages/Personas/PersonaEditar';
import { AutoVer } from '../Pages/Autos/AutoVer';
import { AutoEditar } from '../Pages/Autos/AutoEditar';

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<InicioPage />} />

            <Route path="/personas" element={<PersonaPage />} />
            <Route path="/persona/add" element={<AgregarPersona />} />
            <Route path="/persona/edit/:idPersona" element={<EditarPersona />} />
            <Route path="/persona/:dni" element={<VerPersona />} />

            <Route path="/autos" element={<AutoPage />} />
            <Route path="/auto/:miPatente" element={<AutoVer />} />
            <Route path="/auto/edit/:idAuto" element={<AutoEditar />} />
        </>
    )
);
