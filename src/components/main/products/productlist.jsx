import React from "react";
import { Link } from "react-router-dom";
import './productlist.css';

export default function ProductList({ cart, addToCart, removeFromCart, toggleFavorite, isFavorite, products }) {
    return (
        <div className="product-list">
            {products.map(product => (
                    <div className="product-card" key={product.id}>

                            <button
                                className="btn-favorite"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(product.id)
                                }}
                            >
                                <img
                                    src={
                                        isFavorite.includes(product.id)
                                            ? "public/images/main/product_list/heart_active.png"
                                            : "public/images/main/product_list/heart.png"
                                    }
                                    alt="Favorite"
                                />
                            </button>

                        <Link to={`/product/${product.id}`} className="product-link">
                            <div className="top-section">
                                <div className="product-img-container">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="product-img"
                                    />
                                </div>
                            </div>
                        </Link>

                            <div className="bottom-section">
                                <div className="product-text">
                                    <div className="product-price">
                                        <p className="product-newprice">{product.price}</p>

                                        {product.oldprice && (
                                            <p className="product-oldprice">{product.oldprice}</p>
                                        )}

                                        {product.discount && (
                                            <p className="discount">{product.discount}</p>
                                        )}
                                    </div>

                                    <p className="product-title">{product.title}</p>
                                </div>

                            </div>

                        {cart[product.id] ? (
                            <div className="quantity-controls">
                                <button
                                    className="qty-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromCart(product.id)
                                    }}
                                >
                                    -
                                </button>
                                <span className="qty-number">{cart[product.id]}</span>
                                <button
                                    className="qty-btn"
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product.id)
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <button
                                className="product-select"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product.id)
                                }}
                            >
                                Выбрать
                            </button>
                        )}
                    </div>
            ))}
        </div>
    );
}
