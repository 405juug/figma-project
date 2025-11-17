import React from "react";
import './searchbar.css'


export default function SearchBar() {
    return(
        <div className="searchbar-container">
            <img src="src/assets/images/main/icon.png" className="searchbar-icon" />
            <input
                className="search-input"
                type="text"
                placeholder="Найти товары"
            />
        </div>
    )
}
