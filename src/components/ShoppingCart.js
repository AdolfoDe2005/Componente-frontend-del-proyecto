// src/components/ShoppingCart.js
import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const cartItems = [
        { id: 1, name: 'Camisa de Algodón', price: 25, quantity: 2 },
        { id: 2, name: 'Pantalones Vaqueros', price: 40, quantity: 1 },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart">
            <h2>Carrito de Compras</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>Precio: ${item.price} x {item.quantity}</p>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default ShoppingCart;
