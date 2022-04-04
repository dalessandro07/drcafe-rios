import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import ItemDetailContainer from './components/Products/ItemDetailContainer';
import ItemListContainer from './components/Products/ItemListContainer';

import CartProvider from './context/CartContext';
import Carrito from './components/Cart/Carrito';

import Checkout from './components/Checkout';

import './Index.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/productos" element={<ItemListContainer />} />
                    <Route path="/productos/:categoria" element={<ItemListContainer />} />
                    <Route path="/productos/:categoria/:id" element={<ItemDetailContainer />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route
                        path="*"
                        element={
                            <div className="flex flex-col justify-center items-center index-page absolute top-0 right-0 left-0 bottom-0 z-50">
                                <h1 className="text-8xl text-white">404</h1>
                                <h2 className="text-3xl text-white">Página no encontrada</h2>
                                <Link className="text-white underline mt-8" to="/">
                                    Volver al inicio
                                </Link>
                            </div>
                        }
                    />
                </Routes>
                <Footer />
                <ToastContainer autoClose={2500} />
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;
