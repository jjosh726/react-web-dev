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

        await axios.put(`/api/cart-items/${product.id}`, {
            quantity
        });
        await loadCart();

        setQuantityUpdated(false);
    }

    const updateQuantity = (event) => {
        setQuantity(parseInt(event.target.value));
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
                            value={quantity}
                            type="number" 
                            className="update-quantity-input" 
                            style={{ display : quantityUpdated ? "inline-block" : "none" }}
                            onChange={updateQuantity}
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