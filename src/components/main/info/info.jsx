import React from "react";
import './info.css'

export default function Info() {
    return(
        <div className="info">
            <p className="developed-by">Разработано на платформе Noxer</p>
            <button className="tg-bttn">
                <img src="src/assets/images/main/info/icon.png" className="developed_tg" />
                <p className="info-nickname">noxerai_bot</p>
            </button>
        </div>
    )
}