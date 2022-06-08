import React from 'react';
import Product from './Product';

const Products = () => {

    const products = [
        {
            name: "Sledgehammer",
            price: 125.75
        }, {
            name: "Axe",
            price: 190.50
        }, {
            name: "Bandsaw",
            price: 562.13
        }, {
            name: "Chisel",
            price: 12.9
        }, {
            name: "Hacksaw",
            price: 18.45
        }
    ]

    return (
        <div>
            <h1>Products</h1>
            {
                products.map((product, key) => (
                    <Product key={product.name + key} data={product} />
                ))
            }
        </div>
  );
}

export default Products;
