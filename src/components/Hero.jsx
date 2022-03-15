import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <main className="grow flex flex-col justify-center m-8">
            <b className="text-xl text-gray-100">DRCAFE</b>
            <h1 className="text-4xl font-bold leading-normal text-gray-100">
                El café que <br /> estabas buscando.
            </h1>
            <Link to="/productos/cafes">
                <button className="[background-color:#4a3933] [color:#ebecee] w-max my-4 rounded-lg font-bold p-1 py-2">Ver Productos</button>
            </Link>
        </main>
    );
};

export default Hero;
