import DeliveryOptions from './DeliveryOptions';
import CartItemDetails from './CartItemDetails';
import DeliveryDate from './DeliveryDate';

function OrderSummary({ deliveryOptions, cart }) {
    return (
        <div className="order-summary">

            {deliveryOptions.length > 0 && cart.map(cartItem => {
                const { productId, product, quantity, deliveryOptionId } = cartItem;

                const selectedDeliveryOption = deliveryOptions.find(deliveryOption => {
                    // loop through each delivery option
                    // the first item that returns true is theb result

                    return deliveryOption.id === deliveryOptionId;
                });

                return (
                    <div key={productId} className="cart-item-container">
                        <DeliveryDate 
                            selectedDeliveryOption={selectedDeliveryOption} 
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
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default OrderSummary;