import React from 'react';
import axios from 'axios';

import { Home } from './Pages/Home';

import './App.css';

const serverUrl = 'http://localhost:3002';

const App: React.FC = () => {
    /*
        TODO ROUTER
    */

    // const [message, setMessage] = React.useState<string | undefined>();

    // React.useEffect(() => {
    //     (async () => {
    //         const response = await axios.get<string>(serverUrl);
    //         setMessage(response.data);
    //     })();
    // }, []);
    return (
        <>
            <Home />
        </>
    );
};
export default App;
