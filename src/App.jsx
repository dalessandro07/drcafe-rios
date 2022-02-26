import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./Index.css";
import logo from "./assets/images/logo-white.png";

const App = () => {
    return (
        <>
            <Header logo={logo} />
            <Main nombre="Alessandro" compras={7}>
                <h2>Hola Mundo</h2>
            </Main>
        </>
    );
};

export default App;
