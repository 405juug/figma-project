import ProductList from "../../components/main/products/productlist.jsx";
import './Catalog.css'

export default function Catalog({ cart, addToCart, removeFromCart, products, isFavorite, toggleFavorite }) {
    return(
        <div className="catalog">
            <div className="catalog__header">
                <p1 className="catalog-title">
                    Catalog
                </p1>
            </div>

            <div className="catalog-container">
                <ProductList
                    products={products}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    isFavorite={isFavorite}
                    toggleFavorite={toggleFavorite}
                />

            </div>
        </div>
);
}

