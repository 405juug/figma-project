import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from './components/header/header.jsx';
import Footer from './components/footer/foooter.jsx';

import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx'
import Catalog from './pages/Catalog/Catalog.jsx'
import Favorites from './pages/Favorites/Favorites.jsx'
import Profile from './pages/Profile/Profile.jsx'

function App() {

    const [cart, setCart] = useState({});

    const addToCart = (id) => {
        setCart(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const removeFromCart = (id) => {
        setCart(prev => {
            if(!prev[id]) return prev;
            if(prev[id] === 1) {
                const updated = {...prev};
                delete updated[id];
                return updated;
            }
            return {...prev, [id]: prev[id] - 1};
        })
    }

    return (
        <Router>
            <Header />

                <Routes>
                    <Route path="/" element={<Home
                        cart = {cart}
                        addToCart = {addToCart}
                        removeFromCart = {removeFromCart}
                    /> } />
                    <Route path="/catalog" element={<Catalog
                        cart={cart}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />} />
                    <Route path="/favorites" element={<Favorites
                        cart={cart}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />} />
                    <Route path="/cart" element={<Cart
                        cart={cart}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>

            <Footer />
        </Router>
    );
}


export default App;