import React from "react";
import './footer.css';


export default function Footer() {
    return(
        <footer className="footer">
            <div className="navbar">
                <button className="nav-item active">
                    <span className="nav-icon home"></span>
                    <span className="nav-label">Главная</span>
                </button>

                <button className="nav-item">
                    <span className="nav-icon search"></span>
                    <span className="nav-label">Поиск</span>
                </button>

                <button className="nav-item">
                    <span className="nav-icon favorite"></span>
                    <span className="nav-label">Избранное</span>
                </button>

                <button className="nav-item">
                    <span className="nav-icon profile"></span>
                    <span className="nav-label">Профиль</span>
                </button>
            </div>
        </footer>
    )
}