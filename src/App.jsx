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

    const products = [
        {id: 1, img: "src/assets/images/main/product_list/1.png", price: "2 800 ₽", title: "Футболка мужская Комары"},
        {id: 2, img: "src/assets/images/main/product_list/2.jpg", price: "2 700 ₽", title: "Свитшот женский укороченный Yamal est.2017"},
        {id: 3, img: "src/assets/images/main/product_list/3.jpg", price: "1 550 ₽", title: "Шапка Yamal комбинация с бумбономапша"},
        {id: 4, img: "src/assets/images/main/product_list/4.jpg", price: "640 ₽", title: "Брелок фирменный «Созвездие»"},
        {id: 5, img: "src/assets/images/main/product_list/5.jpg", price: "3 850 ₽", title: "Шорты мужские Yamal"},
        {id: 6, img: "src/assets/images/main/product_list/6.jpg", price: "10 000 ₽", title: "Сертификат Yamal 10000"},
    ];

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
                        products={products}
                    />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>


            <Footer />
        </Router>
    );
}


export default App;