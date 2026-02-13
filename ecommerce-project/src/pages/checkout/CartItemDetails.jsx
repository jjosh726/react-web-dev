import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

function CartItemDetails({ product, cartItem, loadCart }) {
    const [quantityUpdated, setQuantityUpdated] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const handleQuantityInput = async () => {
        if (!quantityUpdated) {
            setQuantityUpdated(true);
            return;
        }

        await updateQuantity();
    }

    const handleQuantityKey = async (event) => {
        if (event.key === 'Enter') {
            await updateQuantity();
        } else if (event.key === 'Escape') {
            setQuantity(cartItem.quantity);
            setQuantityUpdated(false);
        }
    }

    const updateQuantityInput = (event) => {
        setQuantity(parseInt(event.target.value));
    }

    const updateQuantity = async () => {
        await axios.put(`/api/cart-items/${product.id}`, {
            quantity
        });
        await loadCart();

        setQuantityUpdated(false);
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
                            className="update-quantity-input" 
                            style={{ 
                                display : quantityUpdated 
                                ? "inline-block" 
                                : "none" }}

                            value={quantity}
                            type="number" 

                            onChange={updateQuantityInput}
                            onKeyDown={handleQuantityKey}

                        />
                        <span className="quantity-label">{cartItem.quantity}</span>
                    </span>
                    <span onClick={handleQuantityInput} className="update-quantity-link link-primary">
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