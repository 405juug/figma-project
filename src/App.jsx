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
import ProductPage from './pages/ProductPage/ProductPage.jsx'

import img1 from '../public/images/main/product_list/1.png';
import img2 from '../public/images/main/product_list/2.jpg';
import img3 from '../public/images/main/product_list/3.jpg';
import img4 from '../public/images/main/product_list/4.jpg';
import img5 from '../public/images/main/product_list/5.jpg';
import img6 from '../public/images/main/product_list/6.jpg';

function App() {

    const [cart, setCart] = useState({});
    const [isFavorite, setIsFavorite] = useState([]);

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

    const toggleFavorite = (id) => {
        setIsFavorite(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const products = [
        {id: 1, img: img1, price: "2 800 ₽", oldprice: "3 500 ₽", discount: "-20%", title: "Футболка мужская Комары", description: "Описание товара", sizes: ["S", "M", "L", "XL"]},
        {id: 2, img: img2, price: "2 700 ₽", oldprice: "3 000 ₽", discount: "-10%", title: "Свитшот женский укороченный Yamal est.2017", description: "Описание товара", sizes: ["S", "M", "L", "XL"]},
        {id: 3, img: img3, price: "1 550 ₽", title: "Шапка Yamal комбинация с бумбономапша", description: "Описание товара", sizes: ["S", "M", "L", "XL"]},
        {id: 4, img: img4, price: "640 ₽", oldprice: "800 ₽", discount: "-20%", title: "Брелок фирменный «Созвездие»", description: "Описание товара", sizes: null},
        {id: 5, img: img5, price: "3 850 ₽", title: "Шорты мужские Yamal", description: "Описание товара", sizes: ["S", "M", "L", "XL"]},
        {id: 6, img: img6, price: "10 000 ₽", title: "Сертификат Yamal 10000", description: "Описание товара", sizes: null},
    ];

    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home
                        products = {products}
                        isFavorite = {isFavorite}
                        toggleFavorite = {toggleFavorite}
                        cart = {cart}
                        addToCart = {addToCart}
                        removeFromCart = {removeFromCart}
                    /> } />
                    <Route path="/catalog" element={
                        <Catalog
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            isFavorite={isFavorite}
                            toggleFavorite={toggleFavorite}
                            products={products}
                        />
                    } />

                    <Route path="/favorites" element={
                        <Favorites
                            products={products}
                            favorites={isFavorite}
                            toggleFavorite={toggleFavorite}
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    } />
                    <Route path="/cart" element={<Cart
                        cart={cart}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        products={products}
                    />} />

                    <Route path="/product/:id" element={<ProductPage
                        products={products}
                        cart={cart}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        favorites={isFavorite}
                        toggleFavorite={toggleFavorite}
                    />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>


            <Footer />
        </Router>
    );
}


export default App;