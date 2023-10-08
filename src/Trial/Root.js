import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Product from './Pages/Product';
import Error from './Pages/Error';

const Root = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/products/:title" element={<Product />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Root;
