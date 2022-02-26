import React from "react";
import ItemCount from "./ItemCount";

const Main = ({ nombre, compras }) => {
    return (
        <main id="layout-main">
            <b>DRCAFE</b>
            <h1>El café que estabas buscando</h1>
            <p>Bienvenido {nombre}</p>
            <p>N° de Compras: 10</p>

            <div className="compra-producto">
                <ItemCount
                    stock={7}
                    initial={1}
                    onAdd={(estado) => {
                        console.log(estado);
                    }}
                />
            </div>
        </main>
    );
};

export default Main;
