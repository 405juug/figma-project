import React from "react";
import './header.css';
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="App-header">
            <div>
            <Link to={`/`} className="product-link">
                <button className="back-bttn">
                    <img src="public/images/header/cross.png" className="back-bttn-cross"/>
                    <span className="back-bttn-text">Закрыть</span>
                </button>
            </Link>
            </div>


            <button className="bttn-tg">
                {/*<a href="#"></a>*/}
                <img src="public/images/header/icon_tg.png" className="bttn-tg-img" />
                <span className="bttn-tg-text">наш тг-канал</span>
            </button>

            <div className="header-bubble">
                <button className="arrow-bttn">
                    <img src="public/images/header/Vector.png" className="arrow-bttn-img" />
                </button>
                <button className="menu-bttn">
                    <img src="public/images/header/more.png" className="menu-bttn-img" />
                </button>
            </div>

        </header>
    )
}

