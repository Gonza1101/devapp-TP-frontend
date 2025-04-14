import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { InicioPage } from '../Pages/InicioPage';
import { AutoPage, PersonaPage } from '../Pages';

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<InicioPage />} />
            <Route path="/personas" element={<PersonaPage />} />
            <Route path="/autos" element={<AutoPage />} />
        </>
    )
)
