import ProductList from "../../components/main/products/productlist.jsx";
import './Favorites.css'

export default function Favorites({ cart, addToCart, favorites, products, toggleFavorite, removeFromCart }) {

    const favoriteProducts = products.filter(p => favorites.includes(p.id))

    return(
        <div className="Favorites-page">
            <h2 className="favorites-title">Избранное</h2>

            {favoriteProducts.length === 0 ? (
                <p className="favorites-empty">У вас пока нет избранных товаров</p>
            ) : (
                <ProductList
                    products={favoriteProducts}
                    toggleFavorite={toggleFavorite}
                    cart = {cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    isFavorite={favorites}
                />
            )}
        </div>
    )
}