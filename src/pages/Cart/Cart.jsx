import React from "react";
import './Cart.css'

export default function Cart({ cart, addToCart, removeFromCart, products }) {

    const cartProducts = products.filter(p => cart[p.id]);

    return(
        <div className="cart-page">
            <h2 className="cart-title">Корзина</h2>

            {cartProducts.length === 0 ? (
                <p className="empty-cart">Ваша корзина пуста</p>
            ) : (
                cartProducts.map(product => (
                    <div className="cart-item" key={product.id}>
                        <div className="cart-item-img">
                            <img src={product.img} alt={product.title} />
                        </div>

                        <div className="cart-item-info">
                            <p className="cart-item-title">{product.title}</p>
                            <p className="cart-item-price">{product.price}</p>

                            <div className="cart-item-controls">
                                <button
                                    className="qty-btn"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    -
                                </button>

                                <button
                                    className="qty-btn"
                                    onClick={() => addToCart(product.id)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="cart-item-qty">
                            <span>{cart[product.id]}</span>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}