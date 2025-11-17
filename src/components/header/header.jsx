import React from "react";
import './header.css';

export default function Header() {
    return(
        <header className="App-header">
            <div>
                <button className="back-bttn">
                    <img src="src/assets/images/header/cross.png" className="back-bttn-cross"/>
                    <span className="back-bttn-text">Закрыть</span>
                </button>
            </div>


            <button className="bttn-tg">
                {/*<a href="#"></a>*/}
                <img src="src/assets/images/header/icon_tg.png" className="bttn-tg-img" />
                <span className="bttn-tg-text">наш тг-канал</span>
            </button>

            <div className="header-bubble">
                <button className="arrow-bttn">
                    <img src="src/assets/images/header/Vector.png" className="arrow-bttn-img" />
                </button>
                <button className="menu-bttn">
                    <img src="src/assets/images/header/more.png" className="menu-bttn-img" />
                </button>
            </div>

        </header>
    )
}

