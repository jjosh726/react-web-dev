import { useEffect, useState } from 'react';

import axios from 'axios';

import Header from '../../components/Header';

import ordersFavicon from '../../assets/images/orders-favicon.png'

import './ordersPage.css'
import OrderHeader from './OrderHeader';
import OrderDetailsGrid from './OrderDetailsGrid';

function OrdersPage({ cart, loadCart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrdersData = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data);
        }

        getOrdersData();
    }, []);

    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href={ordersFavicon} />

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.map(order => {
                        const { id, products } = order;

                        return (
                            <div key={id} className="order-container">

                                <OrderHeader order={order} />

                                <OrderDetailsGrid order={order} products={products} loadCart={loadCart} />
                                
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    );
}

export default OrdersPage;