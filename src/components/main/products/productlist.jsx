import React from "react";
import './productlist.css';

export default function ProductList({ cart, addToCart, removeFromCart, toggleFavorite, isFavorite, products }) {
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
