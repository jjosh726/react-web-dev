import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';
import DeliveryOptions from './DeliveryOptions';

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
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
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