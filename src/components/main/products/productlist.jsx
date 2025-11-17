import React, { useState } from "react";
import './productlist.css'

export default function ProductList() {

    const [isFavorite, setIsFavorite] = useState([]);

    const toggleFavorite = (id) => {
        setIsFavorite(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return(
        <div className="product-list">
            <div className="product-card">

                <div className="top-section">
                    <div className="badges">
                        <div className="badge hit">ХИТ</div>
                        <div className="badge sale">SALE</div>
                    </div>
                    <button
                        className="btn-favorite"
                        onClick={() => toggleFavorite()}
                    >
                        <img
                            src={
                                isFavorite[1]
                                    ? "src/assets/images/main/product_list/heart.png"
                                    : "src/assets/images/main/product_list/heart_active.png"
                            }
                            alt="favorite"
                        />
                    </button>
                    <div className="product-img-container">
                        <img src="src/assets/images/main/product_list/1.png" alt="1_img" id="product1" className="product-img"/>
                    </div>
                </div>



                <div className="bottom-section">
                    <div className="product-text">
                        <div className="product-price">
                            <p className="product-newprice">2 800 ₽</p>
                            <p className="product-oldprice">3 500 ₽</p>
                            <p className="discount">-20%</p>
                        </div>
                        <p className="product-title">Футболка мужская Комары</p>
                    </div>

                    <button className="product-select">Выбрать</button>
                </div>
            </div>

            <div className="product-card">

                <div className="top-section">
                    <div className="badges">
                        <div className="badge premium">ПРЕМИУМ</div>
                    </div>
                    <button
                        className="btn-favorite"
                        onClick={() => toggleFavorite(1)}
                    >
                        <img
                            src={
                                isFavorite[1]
                                    ? "src/assets/images/main/product_list/heart.png"
                                    : "src/assets/images/main/product_list/heart_active.png"
                            }
                            alt="favorite"
                        />
                    </button>
                    <div className="product-img-container">
                        <img src="src/assets/images/main/product_list/2.jpg" alt="2_img" id="product2" className="product-img"/>
                    </div>
                </div>

                <div className="bottom-section">
                    <div className="product-text">
                        <div className="product-price">
                            <p className="product-newprice">2 800 ₽</p>
                            <p className="product-oldprice">3 500 ₽</p>
                            <p className="discount">-20%</p>
                        </div>
                        <p className="product-title">Футболка мужская Комары</p>
                    </div>

                    <button className="product-select">Выбрать</button>
                </div>
            </div>

            <div className="product-card">

                <div className="top-section">
                    <div className="badges">
                        <div className="badge hit">ХИТ</div>
                        <div className="badge sale">SALE</div>
                    </div>
                    <button
                        className="btn-favorite"
                        onClick={() => toggleFavorite(1)}
                    >
                        <img
                            src={
                                isFavorite[1]
                                    ? "src/assets/images/main/product_list/heart.png"
                                    : "src/assets/images/main/product_list/heart_active.png"
                            }
                            alt="favorite"
                        />
                    </button>
                    <div className="product-img-container">
                        <img src="src/assets/images/main/product_list/3.jpg" alt="3_img" id="product3" className="product-img"/>
                    </div>
                </div>

                <div className="bottom-section">
                    <div className="product-text">
                        <div className="product-price">
                            <p className="product-newprice">2 800 ₽</p>
                            <p className="product-oldprice">3 500 ₽</p>
                            <p className="discount">-20%</p>
                        </div>
                        <p className="product-title">Футболка мужская Комары</p>
                    </div>

                    <button className="product-select">Выбрать</button>
                </div>
            </div>

            <div className="product-card">

                <div className="top-section">
                    <div className="badges">
                        <div className="badge hit">ХИТ</div>
                        <div className="badge sale">SALE</div>
                    </div>
                    <button
                        className="btn-favorite"
                        onClick={() => toggleFavorite(1)}
                    >
                        <img
                            src={
                                isFavorite[1]
                                    ? "src/assets/images/main/product_list/heart.png"
                                    : "src/assets/images/main/product_list/heart_active.png"
                            }
                            alt="favorite"
                        />
                    </button>
                    <div className="product-img-container">
                        <img src="src/assets/images/main/product_list/4.jpg" alt="4_img" id="product4" className="product-img"/>
                    </div>
                </div>

                <div className="bottom-section">
                    <div className="product-text">
                        <div className="product-price">
                            <p className="product-newprice">2 800 ₽</p>
                            <p className="product-oldprice">3 500 ₽</p>
                            <p className="discount">-20%</p>
                        </div>
                        <p className="product-title">Футболка мужская Комары</p>
                    </div>

                    <button className="product-select">Выбрать</button>
                </div>
            </div>

            <div className="product-card">

                <div className="top-section">
                    <div className="badges">
                        <div className="badge hit">ХИТ</div>
                        <div className="badge sale">SALE</div>
                    </div>
                    <button
                        className="btn-favorite"
                        onClick={() => toggleFavorite(1)}
                    >
                        <img
                            src={
                                isFavorite[1]
                                    ? "src/assets/images/main/product_list/heart.png"
                                    : "src/assets/images/main/product_list/heart_active.png"
                            }
                            alt="favorite"
                        />
                    </button>
                    <div className="product-img-container">
                        <img src="src/assets/images/main/product_list/5.jpg" alt="5_img" id="product5" className="product-img"/>
                    </div>
                </div>

                <div className="bottom-section">
                    <div className="product-text">
                        <div className="product-price">
                            <p className="product-newprice">2 800 ₽</p>
                            <p className="product-oldprice">3 500 ₽</p>
                            <p className="discount">-20%</p>
                        </div>
                        <p className="product-title">Футболка мужская Комары</p>
                    </div>

                    <button className="product-select">Выбрать</button>
                </div>
            </div>

            <div className="product-card">

                <div className="top-section">
                    <div className="badges">
                        <div className="badge hit">ХИТ</div>
                        <div className="badge sale">SALE</div>
                    </div>
                    <button
                        className="btn-favorite"
                        onClick={() => toggleFavorite(1)}
                    >
                        <img
                            src={
                                isFavorite[1]
                                    ? "src/assets/images/main/product_list/heart.png"
                                    : "src/assets/images/main/product_list/heart_active.png"
                            }
                            alt="favorite"
                        />
                    </button>
                    <div className="product-img-container">
                        <img src="src/assets/images/main/product_list/6.jpg" alt="6_img" id="product6" className="product-img"/>
                    </div>
                </div>

                <div className="bottom-section">
                    <div className="product-text">
                        <div className="product-price">
                            <p className="product-newprice">2 800 ₽</p>
                            <p className="product-oldprice">3 500 ₽</p>
                            <p className="discount">-20%</p>
                        </div>
                        <p className="product-title">Футболка мужская Комары</p>
                    </div>

                    <button className="product-select">Выбрать</button>
                </div>
            </div>


        </div>
    )
}








