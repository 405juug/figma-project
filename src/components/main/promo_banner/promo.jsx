import React from "react";
import './promo.css'

export default function Promo() {
    return (
        <div className="banner-container">
            <div className="banner">
                <a href="#">
                    <img
                        className="banner-img"
                        alt="промо баннер"
                        src="public/images/main/promo-banner.png"

                    />
                </a>
            </div>
        </div>
    )
}