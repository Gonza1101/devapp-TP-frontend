import React, { useEffect, useState } from "react";
import { Listar } from "../Components/Lista";

export const Home = () => {
    const [lista, setLista] = React.useState([]);

    const verPersonas = () => {
        //TODO - Ir al endPoint de "/Personas"
        //devuelve el listado de personas y voy a la pagina Personas
    };

    const verAutos = () => {
        //TODO - Ir al endPoint de "/Autos"
        //devuelve el listado de Autos y voy a la pagina Autos
    }

    React.useEffect(() => {
        setLista([]);
    }, []);
    return (
        <>
            <h2>Bienvenido a la APP de Personas | Autos & Personas[Autos]</h2>
            <button onClick={verPersonas}>Perona</button>
            <button onClick={verAutos}>Auto</button>
        </>
    );
};
