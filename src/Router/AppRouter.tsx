import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { InicioPage } from '../Pages/InicioPage';
import { PersonaPage } from '../Pages/PersonaPage';
import { AutoPage } from '../Pages/AutosPage';
import { AgregarPersona } from '../Pages/PersonasAgregar';
import { VerPersona } from '../Pages/PersonasVer';
import { EditarPersona } from '../Pages/PersonaEditar';
import { AutoVer } from '../Pages/AutoVer';
import { AutoEditar } from '../Pages/AutoEditar';

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
