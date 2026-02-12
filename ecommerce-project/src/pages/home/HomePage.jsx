import { useEffect, useState } from 'react';
import Header from '../../components/Header.jsx';
import axios from 'axios';
import homeFavicon from '../../assets/images/home-favicon.png'
import './HomePage.css'
import ProductsGrid from './ProductsGrid.jsx';

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
                <ProductsGrid products={products} />
            </div>
        </>
    );
}

export default HomePage;