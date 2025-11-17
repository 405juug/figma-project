import React from "react";
import './main.css';
import SearchBar from './searchbar/searchbar.jsx';
import Promo from './promo_banner/promo.jsx';
import Categories from './categories/categories.jsx';
import Products from './products/productlist.jsx';
import Info from './info/info.jsx';

export default function Main() {
    return (
        <>
            <SearchBar />
            <Promo />
            <Categories />
            <Products />
            <Info />
        </>
    )
}