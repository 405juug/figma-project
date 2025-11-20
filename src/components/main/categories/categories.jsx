import React from "react";
import './categories.css'

export default function Categories() {
    return (
        <div className="categories">

            <div className="category">
                <button className="category-button">
                    <img src="src/assets/images/main/accessories.png" alt="accessories" className="category-image"/>
                </button>
                <span className="category-text">Аксессуары</span>
            </div>

            <div className="category">
                <button className="category-button">
                    <img src="src/assets/images/main/hoodies.jpg" alt="hoodies" className="category-image"/>
                </button>
                <span className="category-text">Толстовки</span>
            </div>

            <div className="category">
                <button className="category-button">
                    <img src="src/assets/images/main/jackets.jpg" alt="jackets" className="category-image"/>
                </button>
                <span className="category-text">Куртки</span>
            </div>

            <div className="category">
                <button className="category-button">
                    <img src="src/assets/images/main/jeans.png" alt="jeans" className="category-image"/>
                </button>
                <span className="category-text">Штаны</span>
            </div>

            <div className="category">
                <button className="category-button">
                    <img src="src/assets/images/main/tshirts.jpg" alt="tshirts" className="category-image"/>
                </button>
                <span className="category-text">Футболки</span>
            </div>

            <div className="category">
                <button className="category-button">
                    <img src="src/assets/images/main/giftcards.jpg" alt="gift_cards" className="category-image"/>
                </button>
                <span className="category-text">Сертификаты</span>
            </div>
        </div>
    )
}