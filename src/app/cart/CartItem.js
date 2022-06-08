import React from 'react';
import './Cart.css';

const CartItem = ({data, handleRemoveCartItem}) => {
    return (
        <div className="cart-item-container">
            <div><strong>Name:</strong> {data.name}</div>
            <div><strong>Price:</strong> {data.price}</div>
            <div><strong>Quantity:</strong> {data.quantity}</div>
            <div><strong>Total:</strong> {data.subTotal.toFixed(2)}</div>
            <a href="#" onClick={() => handleRemoveCartItem(data)}>Remove</a>
        </div>
    );
}

export default CartItem;
