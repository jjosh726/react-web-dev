import dayjs from 'dayjs';
import { formatMoney } from "../../utils/money";

function DeliveryOptions({ deliveryOptions, deliveryOptionId, productId }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>

            {deliveryOptions.map(deliveryOption => {
                const { id, estimatedDeliveryTimeMs, priceCents } = deliveryOption;

                let priceString = 'FREE Shipping';

                if (priceCents > 0) {
                    priceString = `${formatMoney(priceCents)} - Shipping`;
                }

                return (
                    <div key={id} className="delivery-option">
                        <input type="radio"
                            checked={id === deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DeliveryOptions;