import { NavLink, useNavigate, useSearchParams } from 'react-router';
import searchIcon from '../assets/images/icons/search-icon.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import './Header.css'
import { useState } from 'react';

function Header({ cart }) {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');
    
    const [searchText, setSearchText] = useState(search);
    const navigate = useNavigate();
    
    const updateSearchText = (event) => setSearchText(event.target.value);
    const searchItem = () => navigate(`/?search=${searchText}`);

    let totalQuantity = 0;
    cart.forEach(cartItem => totalQuantity += cartItem.quantity );

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                </NavLink>
            </div>

            <div className="middle-section">
                <input 
                    className="search-bar" 
                    type="text" 
                    placeholder="Search"

                    value={searchText}
                    onChange={updateSearchText}
                />

                <button className="search-button">
                    <img 
                        className="search-icon" 
                        src={searchIcon} 
                        onClick={searchItem}
                    />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;