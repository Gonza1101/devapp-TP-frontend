import React from 'react';
import { RouterProvider } from 'react-router/dom';
import { AppRouter } from './Router/AppRouter';
import './CSS/style.css';
const App: React.FC = () => {
    /*
        TODO ROUTER
    */
    return (
        <>
            <RouterProvider router={AppRouter} />
        </>
    );
};
export default App;
