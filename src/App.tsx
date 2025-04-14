import React from 'react';

import './App.css';
import { RouterProvider } from 'react-router/dom';
import { AppRouter } from './Router/AppRouter';
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
