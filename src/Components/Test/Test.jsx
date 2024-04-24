import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MainContext } from '../../Context/MainContext';

function Test() {
    const {products, setProducts,categories, setCategories} = useContext(MainContext);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://file.notion.so/f/f/196736dd-250f-45b1-ac1f-c4302855a2f9/f3b6db2e-5509-4b3e-9fe2-6e4044b7ff94/data.json?id=6cac81a9-c4d1-40eb-b7f8-31319a4fcada&table=block&spaceId=196736dd-250f-45b1-ac1f-c4302855a2f9&expirationTimestamp=1713420000000&signature=442yh-YlB-KbNY-pjC0unZ-2uMsOHX9v0xO_VcGQG7I&downloadName=data.json');
                setProducts(response.data.data.products);
                setCategories(response.data.data.categories);
            } catch (error) {
                setError('Failed to fetch products');
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            <h1>Products</h1>
            {categories.map((category, index) => (
                <div key={index}>
                    <h2>{category.name}</h2>
                    <div>
                    {products.filter(product => product.category === category.name).map((filteredProduct, index) => (
                            <div key={index}>
                                <h3>{filteredProduct.name}</h3>
                                <img src={filteredProduct.gallery[0]} alt={filteredProduct.name} style={{ width: '100px' }} />
                                <p>{filteredProduct.description}</p>
                                <p>Price: {filteredProduct.prices[0].currency.symbol}{filteredProduct.prices[0].amount}</p>
                                <p>Status: {filteredProduct.inStock ? 'In Stock' : 'Out of Stock'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Test;
