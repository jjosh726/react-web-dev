import { useEffect, useState } from 'react';
import { formatMoney } from '../utils/money.js';
import Header from '../components/Header';
import axios from 'axios';
import checkmarkIcon from '../assets/images/icons/checkmark.png'
import homeFavicon from '../assets/images/home-favicon.png'
import './HomePage.css'

function HomePage({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
            })
    }, []);

    return (
        <>
            <title>Eccommerce Project</title>
            <link rel="icon" type="image/svg+xml" href={homeFavicon} />

            <Header cart={cart} />

            <div className="home-page">
                <div className="products-grid">

                    {products.map(product => {
                        const { id, name, image, rating, priceCents } = product;

                        return (
                            <div key={id} className="product-container">
                                <div className="product-image-container">
                                    <img className="product-image"
                                        src={image} />
                                </div>

                                <div className="product-name limit-text-to-2-lines">
                                    {name}
                                </div>

                                <div className="product-rating-container">
                                    <img className="product-rating-stars"
                                        src={`images/ratings/rating-${rating.stars * 10}.png`} />
                                    <div className="product-rating-count link-primary">
                                        {rating.count}
                                    </div>
                                </div>

                                <div className="product-price">
                                    ${formatMoney(priceCents)}
                                </div>

                                <div className="product-quantity-container">
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                                <div className="product-spacer"></div>

                                <div className="added-to-cart">
                                    <img src={checkmarkIcon} />
                                    Added
                                </div>

                                <button className="add-to-cart-button button-primary">
                                    Add to Cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default HomePage;