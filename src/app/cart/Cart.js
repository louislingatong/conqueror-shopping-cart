import React, {useEffect, useState} from 'react';
import {findCart, removeProductToCart} from '../services/cartService';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        initCartItems();
    }, []);

    const initCartItems = () => {
        const cart = findCart();
        const items = Object.values(cart);
        setCartItems(items);
    }

    const handleRemoveCartItem = (item) => {
        removeProductToCart(item.name);
        initCartItems();
    }

    const calculateTotalAmount = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.subTotal;
        })
        return total.toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            <a href="/">back to products</a>
            {
                cartItems.map((item, key) => (
                    <CartItem key={item.name + key} data={item} handleRemoveCartItem={handleRemoveCartItem}/>
                ))
            }
            <div><strong>Overall Total:</strong> {calculateTotalAmount()}</div>
        </div>
    );
}

export default Cart;
