import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Carrito from './components/Carrito';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

import './Index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Hero Section */}
                <Route
                    path="/"
                    element={
                        <div className="flex flex-col index-page h-screen">
                            <Hero />
                        </div>
                    }
                />
                {/* Demás rutas */}
                <Route path="/productos/:categoria" element={<ItemListContainer />} />
                <Route path="/productos/:categoria/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Carrito />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;
