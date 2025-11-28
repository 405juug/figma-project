import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './ProductPage.css'

import heart_active from "../../../public/images/main/product_list/heart_active.png";
import heart from "../../../public/images/main/product_list/heart.png";

export default function ProductPage({ products, cart, addToCart, removeFromCart, favorites, toggleFavorite }) {
    const { id } = useParams();

    const product = products.find(p => p.id === Number(id));

    const [selectedSize, setSelectedSize] = useState(null);

    if (!product) return <p>Товар не найден</p>;

    const isFav = favorites.includes(product.id);

    return(
        <div className="product-page">
            <img src={product.img} alt={product.title} className="product-img" />

            <div className="product-header">
                <div>
                    <h2 className="product-title-card">{product.title}</h2>
                    <div className="product-price">
                        <p className="product-price-card">{product.price}</p>

                        {product.oldprice && (
                            <p className="product-oldprice-card">{product.oldprice}</p>
                        )}

                        {product.discount && (
                            <p className="discount-card">{product.discount}</p>
                        )}
                    </div>

                </div>

                <button className="favorite-btn" onClick={() => toggleFavorite(product.id)}>
                    <img
                        src={
                            isFav
                                ? heart_active
                                : heart
                        }
                        alt="fav"
                    />
                </button>
            </div>

            <p className="product-description">
                {product.description || "Описание товара отсутствует"}
            </p>

            {product.sizes && (
                <div className="sizes-block">
                    <h3>Размер</h3>

                    <div className="sizes-list">
                        {product.sizes.map(size => (
                            <button
                                key={size}
                                className={`size-btn  ${selectedSize === size ? "active" : ""}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {!cart[product.id] ? (
                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product.id)}
                    disabled={product.sizes && !selectedSize}
                >
                    Добавить в корзину
                </button>
            ) : (
                <div className="qty-controls">
                    <button className="qty-btn" onClick={() => removeFromCart(product.id)}>-</button>
                    <span className="qty-number">{cart[product.id]}</span>
                    <button className="qty-btn" onClick={() => addToCart(product.id)}>+</button>
                </div>
            )}
        </div>
    )
}