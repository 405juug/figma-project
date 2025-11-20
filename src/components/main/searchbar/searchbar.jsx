import React, {useEffect, useState, useRef} from "react";
import './searchbar.css'


export default function SearchBar() {

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const modalInputRef = useRef(null);

    const suggestions = [
        "Футболка мужская Комары",
        "Свитшот женский укороченный Yamal est.2017",
        "Сертификат Yamal 10000"
    ];

    useEffect(() => {
        const handleEscape = (e) => {
            if(e.key === "Escape") {
                setOpen(false);
            }
        };

        if(open){
            window.addEventListener("keydown", handleEscape);
        }

        return () => window.removeEventListener("keydown", handleEscape);
    }, [open]);

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = "hidden";

            const timer = setTimeout(() => {
                modalInputRef.current?.focus();
            }, 100);

            return() => clearTimeout(timer);
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [open]);

    return (
        <>

            <div
                className={`searchbar-container ${open ? "expanded" : ""}`}
                onClick={() => setOpen(true)}
            >
                <img src="src/assets/images/main/icon.png" className="searchbar-icon"/>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Найти товары"
                    onFocus={() => setOpen(true)}
                    readOnly
                />
            </div>

            {open && <div className="search-blur" onClick={() => setOpen(false)}/>}

            <div className={`search-modal ${open ? "open" : ""}`}>
                <input
                    ref = {modalInputRef}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="search-modal-input"
                    placeholder="Найти товары"
                />

                <div className="modal-suggestions">
                    <p className="freqSearch">Часто ищут</p>
                    {suggestions.filter((item) =>
                        item.toLowerCase().includes(query.toLowerCase())
                    )
                        .map((item, i) => (
                            <div key={i} className="suggestion-item">
                                <img src="src/assets/images/main/icon.png" className="searchicon_searchbar" alt="searchicon" />
                                <a href="#" className="suggestion-link">{item}</a>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}