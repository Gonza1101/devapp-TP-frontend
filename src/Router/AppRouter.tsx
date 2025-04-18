import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { InicioPage } from '../Pages/InicioPage';
import { AutoPage, PersonaPage } from '../Pages';
import { AgregarPersona } from '../Pages/AgregarPersona';
import { VerPersona } from '../Pages/VerPersona';

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<InicioPage />} />
            <Route path="/personas" element={<PersonaPage />} />
            <Route path="/persona" element={<AgregarPersona />} />
            <Route path="/persona/:dni" element={<VerPersona />} />
            <Route path="/autos" element={<AutoPage />} />
        </>
    )
);
