import React, {useEffect, useState} from 'react';
import Product from './Product';
import findAllProducts from '../services/productService';
import './Product.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const localProducts = findAllProducts;
        setProducts(localProducts);
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <a href="/cart">Cart</a>
            {
                products.map((product, key) => (
                    <Product key={product.name + key} data={product} />
                ))
            }
        </div>
  );
}

export default Products;
