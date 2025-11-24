
import './Cart.css'

export default function Cart({ cart, addToCart, removeFromCart }) {
    return(
        <div>
            <h1>Корзина</h1>

            {Object.keys(cart).length === 0 ? (
                <p> Корзина пуста</p>
            ) : (
                Object.entries(cart).map(([id, qty]) => (
                    <div key={id}>
                        <span>Товар {id}: {qty} шт.</span>
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <button onClick={() => addToCart(id)}>+</button>
                    </div>
                ))
            )}
        </div>
    )
}