import React from "react";
import './footer.css';


export default function Footer() {
    return(
        <footer className="footer-fixed">
            <div className="footer-container">
                <div className="navbar">
                    <button className="nav-item active">
                        <img src="src/assets/images/footer/home.png" alt="home_button" className="nav-picture home" />
                    </button>

                    <button className="nav-item">
                        <img src="src/assets/images/footer/catalog.png" alt="catalog_button" className="nav-picture catalog" />
                    </button>

                    <button className="nav-item">
                        <img src="src/assets/images/footer/favorite.png" alt="favorite_button" className="nav-picture favorite" />
                    </button>

                    <button className="nav-item">
                        <img src="src/assets/images/footer/cart.png" alt="cart_button" className="nav-picture cart" />
                    </button>

                    <button className="nav-item">
                        <img src="src/assets/images/footer/account.png" alt="profile_button" className="nav-picture profile" />
                    </button>
                </div>
            </div>
        </footer>
    )
}