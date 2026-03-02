import { useEffect, useState } from 'react';
import Header from '../../components/Header.jsx';
import axios from 'axios';
import homeFavicon from '../../assets/images/home-favicon.png'
import './homePage.css'
import ProductsGrid from './ProductsGrid.jsx';
import { useSearchParams } from 'react-router';

function HomePage({ cart, loadCart }) {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);

    const search = searchParams.get('search');

    useEffect(() => {
        const apiUrl = `/api/products${search ? `?search=${search}` : ""}`;

        const getHomeData = async () => {
            const response = await axios.get(apiUrl);
            setProducts(response.data);
        }

        getHomeData();
    }, [search]);

    return (
        <>
            <title>Eccommerce Project</title>
            <link rel="icon" type="image/svg+xml" href={homeFavicon} />

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}

export default HomePage;