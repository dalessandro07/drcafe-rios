import React from 'react';

const Hero = ({ nombre, compras }) => {
    return (
        <main className="grow flex flex-col justify-center m-8">
            <b className="text-xl text-gray-100">DRCAFE</b>
            <h1 className="text-4xl font-bold leading-normal text-gray-100">
                El café que <br /> estabas buscando.
            </h1>
            <p className="text-gray-100">Bienvenido {nombre}</p>
            <p className="text-gray-100">N° de Compras: {compras}</p>
            <button className="[background-color:#4a3933] [color:#ebecee] w-1/5 my-4 rounded-lg font-bold p-1 py-2">Ver Productos</button>
        </main>
    );
};

export default Hero;
