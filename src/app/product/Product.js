import React from 'react';
import {addProductToCart} from '../services/cartService';
import './Product.css';

const Product = ({data}) => {
    const handleAddToCart = (product) => {
        addProductToCart(product);
    };

    return (
        <div className="product-container">
            <div><strong>Name:</strong> {data.name}</div>
            <div><strong>Price:</strong> {data.price}</div>
            <a href="#" onClick={() => handleAddToCart(data)}>Add to Cart</a>
        </div>
    );
}

export default Product;
