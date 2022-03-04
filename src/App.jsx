import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';

import ItemListContainer from './components/ItemListContainer';

import './Index.css';

const App = () => {
    return (
        <>
            <div className="flex flex-col index-page h-screen">
                <Header />
                <Hero nombre="Alessandro" compras={7} />
            </div>
            <ItemListContainer />
        </>
    );
};

export default App;
