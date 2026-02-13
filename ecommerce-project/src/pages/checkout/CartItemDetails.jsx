import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

function CartItemDetails({ product, quantity, loadCart }) {
    const [quantityUpdated, setQuantityUpdated] = useState(false);

    const updateQuantity = () => {
        setQuantityUpdated(true);
    }

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${product.id}`);
        await loadCart();
    }

    return (
        <>
            <img className="product-image"
                src={product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {product.name}
                </div>
                <div className="product-price">
                    {formatMoney(product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: 
                        <input 
                            type="text" 
                            className="update-quantity-input" 
                            style={{ display : quantityUpdated ? "inline-block" : "none" }}
                        />
                        <span className="quantity-label">{quantity}</span>
                    </span>
                    <span onClick={updateQuantity} className="update-quantity-link link-primary">
                        Update
                    </span>
                    <span 
                        className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}
                    >
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}

export default CartItemDetails;