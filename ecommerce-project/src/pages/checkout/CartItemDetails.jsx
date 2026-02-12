import { formatMoney } from "../../utils/money";

function CartItemDetails({ product, quantity }) {
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
                        Quantity: <span className="quantity-label">{quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary">
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary">
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}

export default CartItemDetails;