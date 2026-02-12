import { Link, useParams } from 'react-router';
import axios from 'axios';
import dayjs from 'dayjs';
import Header from '../components/Header';
import trackingFavicon from '../assets/images/tracking-favicon.png'
import './TrackingPage.css'
import { useEffect, useState } from 'react';

function TrackingPage({ cart }) {
    const { orderId, productId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const getOrderData = async () => {
            const response = await axios.get(`api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        }

        getOrderData();
    }, [orderId]); 

    if (!order) {
        return null;
    }

    const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.productId === productId;
    })

    console.log(orderProduct)

    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

    let deliveryPercent = ( timePassedMs / totalDeliveryTimeMs ) * 100

    if (deliveryPercent > 100) deliveryPercent = 100;

    return (
        <>
            <title>Tracking</title>

            <link rel="icon" type="image/svg+xml" href={trackingFavicon} />

            <Header cart={cart}/>

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>

                    <div className="product-info">
                        {orderProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{
                            width : `${deliveryPercent}%`
                        }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrackingPage;