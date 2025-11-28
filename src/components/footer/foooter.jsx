import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css';


export default function Footer() {

    return(
        <footer className="footer-fixed">
            <div className="footer-container">
                <div className="navbar">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                            <img src="public/images/footer/home.png" alt="home_button" className="nav-picture home" />
                    </NavLink>

                    <NavLink
                        to="/catalog"
                        className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }>
                        <img src="public/images/footer/catalog.png" alt="catalog_button" className="nav-picture catalog" />
                    </NavLink>

                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        <img src="public/images/footer/favorite.png" alt="favorite_button" className="nav-picture favorite" />
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        <img src="public/images/footer/cart.png" alt="cart_button" className="nav-picture cart" />
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        <img src="public/images/footer/account.png" alt="profile_button" className="nav-picture profile" />
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}