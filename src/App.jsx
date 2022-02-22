import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./Index.css";

const App = () => {
    return (
        <>
            <Header />
            <Main nombre="Alessandro" compras={7} />
        </>
    );
};

export default App;
