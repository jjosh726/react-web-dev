import DeliveryOptions from './DeliveryOptions';
import CartItemDetails from './CartItemDetails';
import DeliveryDate from './DeliveryDate';

function OrderSummary({ deliveryOptions, cart, loadCart }) {
    return (
        <div className="order-summary">

            {deliveryOptions.length > 0 && cart.map(cartItem => {
                const { productId, product, quantity, deliveryOptionId } = cartItem;

                return (
                    <div key={productId} className="cart-item-container">
                        <DeliveryDate 
                            deliveryOptions={deliveryOptions}
                            cartItem={cartItem}
                        />

                        <div className="cart-item-details-grid">
                            <CartItemDetails
                                product={product}
                                quantity={quantity}
                            />

                            <DeliveryOptions 
                                deliveryOptions={deliveryOptions}
                                deliveryOptionId={deliveryOptionId}
                                productId={productId}
                                loadCart={loadCart}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default OrderSummary;