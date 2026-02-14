import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import checkmarkIcon from '../../assets/images/icons/checkmark.png'

function Product({ product, loadCart }) {
    const { id, name, image, rating, priceCents } = product;
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = async () => {
        setAddedToCart(true);

        setTimeout(() => {
            setAddedToCart(false);
        }, 2000);

        await axios.post('/api/cart-items', {
            productId: id,
            quantity
        });

        await loadCart();
    }

    const selectQuantity = (event) => {
        const quantitySelected = parseInt(event.target.value);
        setQuantity(quantitySelected);
    }

    return (
        <div className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                    data-testid="product-image"
                    src={image} />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                    data-testid="product-rating"
                    src={`images/ratings/rating-${rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                    {rating.count}
                </div>
            </div>

            <div className="product-price">
                {formatMoney(priceCents)}
            </div>

            <div className="product-quantity-container">
                <select value={quantity} onChange={selectQuantity}>
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

            <div className="added-to-cart" style={{ opacity : addedToCart ? 1 : 0 }}>
                <img src={checkmarkIcon} />
                Added
            </div>

            <button
                data-testid="add-to-cart-button"
                className="add-to-cart-button button-primary"
                onClick={addToCart}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Product;