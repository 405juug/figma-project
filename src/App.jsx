import React from "react";
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
    return (
        <Router>
            <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>

            <Footer />
        </Router>
    );
}


export default App;