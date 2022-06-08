import React from 'react';

const Product = ({data}) => {
    return (
        <div className="product-container">
            <div>Name: {data.name}</div>
            <div>Price: {data.price}</div>
        </div>
    );
}

export default Product;
