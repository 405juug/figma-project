import React from "react";
import './Home.css';
import SearchBar from '/src/components/main/searchbar/searchbar.jsx';
import Promo from '/src/components/main/promo_banner/promo.jsx';
import Categories from '/src/components/main/categories/categories.jsx';
import Products from '/src/components/main/products/productlist.jsx';
import Info from '/src/components/main/info/info.jsx';

export default function Home({ cart, addToCart, removeFromCart }) {
    return (
        <>
            <SearchBar/>
            <Promo/>
            <Categories/>
            <Products
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
            <Info/>
        </>
    )
}