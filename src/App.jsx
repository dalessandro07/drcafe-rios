import React from 'react';
import Footer from './components/Footer';

import Header from './components/Header';
import Hero from './components/Hero';
import ItemDetailContainer from './components/ItemDetailContainer';

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
            <ItemDetailContainer />
            <Footer />
        </>
    );
};

export default App;
