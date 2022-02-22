import React from "react";

const Main = ({ nombre, compras }) => {
    return (
        <main id="layout-main">
            <b>DRCAFE</b>
            <h1>El café que estabas buscando</h1>
            <p>Bienvenido {nombre}</p>
            <p>N° de Compras: {compras}</p>
        </main>
    );
};

export default Main;
