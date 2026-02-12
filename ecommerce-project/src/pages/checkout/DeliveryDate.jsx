import dayjs from 'dayjs';

function DeliveryDate({ deliveryOptions, cartItem }) {
    const { deliveryOptionId } = cartItem;

    const selectedDeliveryOption = deliveryOptions.find(deliveryOption => {
        // loop through each delivery option
        // the first item that returns true is theb result

        return deliveryOption.id === deliveryOptionId;
    });

    return (
        <div className="delivery-date">
            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>
    );
}

export default DeliveryDate;