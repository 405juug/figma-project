import ProductList from "../../components/main/products/productlist.jsx";

export default function Catalog({ cart, addToCart, removeFromCart }) {
    return(
        <ProductList
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
        />
    );
}