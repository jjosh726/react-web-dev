import { Link } from 'react-router';
import { Fragment } from 'react';
import dayjs from 'dayjs';
import buyAgainIcon from '../../assets/images/icons/buy-again.png'
import axios from 'axios';

function OrderDetailsGrid({ order, products, loadCart }) {

    return (
        <div className="order-details-grid">
            {products.map(orderProduct => {
                const { product } = orderProduct;

                const addToCart = async () => {
                    await axios.post('/api/cart-items', {
                        productId: product.id,
                        quantity : 1
                    });
                    await loadCart();
                }

                return (
                    <Fragment key={product.id}>
                        <div className="product-image-container">
                            <img src={product.image} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                                {product.name}
                            </div>
                            <div className="product-delivery-date">
                                Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                            </div>
                            <div className="product-quantity">
                                Quantity: {orderProduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary" onClick={addToCart}>
                                <img className="buy-again-icon" src={buyAgainIcon} />
                                <span className="buy-again-message">Add to Cart</span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <Link to={`/tracking/${order.id}/${product.id}`}>
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </Link>
                        </div>
                    </Fragment>
                );
            })}

        </div>
    );
}

export default OrderDetailsGrid;