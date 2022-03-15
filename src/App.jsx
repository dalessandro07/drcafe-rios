import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

import './Index.css';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="flex flex-col index-page h-screen">
                            <Hero />
                        </div>
                    }
                />
                <Route path="/productos/:categoria" element={<ItemListContainer />} />
                <Route path="/productos/:categoria/:id" element={<ItemDetailContainer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
