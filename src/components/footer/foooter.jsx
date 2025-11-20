import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css';


export default function Footer() {
    return(
        <footer className="footer-fixed">
            <div className="footer-container">
                <div className="navbar">
                    <NavLink to="/" className="nav-item active">
                        <img src="src/assets/images/footer/home.png" alt="home_button" className="nav-picture home" />
                    </NavLink>

                    <NavLink to="/catalog" className="nav-item">
                        <img src="src/assets/images/footer/catalog.png" alt="catalog_button" className="nav-picture catalog" />
                    </NavLink>

                    <NavLink to="/favorites" className="nav-item">
                        <img src="src/assets/images/footer/favorite.png" alt="favorite_button" className="nav-picture favorite" />
                    </NavLink>

                    <NavLink to="/cart" className="nav-item">
                        <img src="src/assets/images/footer/cart.png" alt="cart_button" className="nav-picture cart" />
                    </NavLink>

                    <NavLink to="/profile" className="nav-item">
                        <img src="src/assets/images/footer/account.png" alt="profile_button" className="nav-picture profile" />
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}