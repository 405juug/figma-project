import React, { useState } from "react";
import './productlist.css';

export default function ProductList({ cart, addToCart, removeFromCart }) {

    const [isFavorite, setIsFavorite] = useState([]);

    const toggleFavorite = (id) => {
        setIsFavorite(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const products = [
        {id: 1, img: "src/assets/images/main/product_list/1.png", price: "2 800 ₽", old: "3 500 ₽", discount: "-20%", title: "Футболка мужская Комары"},
        {id: 2, img: "src/assets/images/main/product_list/2.jpg", price: "2 700 ₽", old: "3 000 ₽", discount: "-10%", title: "Свитшот женский укороченный Yamal est.2017"},
        {id: 3, img: "src/assets/images/main/product_list/3.jpg", price: "1 550 ₽", title: "Шапка Yamal комбинация с бумбономапша"},
        {id: 4, img: "src/assets/images/main/product_list/4.jpg", price: "640 ₽", old: "800 ₽", discount: "-20%", title: "Брелок фирменный «Созвездие»"},
        {id: 5, img: "src/assets/images/main/product_list/5.jpg", price: "3 850 ₽", title: "Шорты мужские Yamal"},
        {id: 6, img: "src/assets/images/main/product_list/6.jpg", price: "10 000 ₽", title: "Сертификат Yamal 10000"},
    ];

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-card" key={product.id}>

                    <div className="top-section">

                        <button
                            className="btn-favorite"
                            onClick={() => toggleFavorite(product.id)}
                        >
                            <img
                                src={
                                    isFavorite.includes(product.id)
                                        ? "src/assets/images/main/product_list/heart_active.png"
                                        : "src/assets/images/main/product_list/heart.png"
                                }
                                alt="Favorite"
                            />
                        </button>

                        <div className="product-img-container">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="product-img"
                            />
                        </div>
                    </div>

                    <div className="bottom-section">
                        <div className="product-text">
                            <div className="product-price">
                                <p className="product-newprice">{product.price}</p>

                                {product.old && (
                                    <p className="product-oldprice">{product.old}</p>
                                )}

                                {product.discount && (
                                    <p className="discount">{product.discount}</p>
                                )}
                            </div>

                            <p className="product-title">{product.title}</p>
                        </div>

                        {cart[product.id] ? (
                            <div className="quantity-controls">
                                <button className="qty-btn" onClick={() => removeFromCart(product.id)}>-</button>
                                <span className="qty-number">{cart[product.id]}</span>
                                <button className="qty-btn" onClick={() => addToCart(product.id)}>+</button>
                            </div>
                        ) : (
                            <button
                                className="product-select"
                                onClick={() => addToCart(product.id)}
                            >
                                Выбрать
                            </button>
                        )}
                    </div>

                </div>
            ))}
        </div>
    );
}
