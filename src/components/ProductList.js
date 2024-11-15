// src/components/ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Camisa de Algodón', price: 25 },
        { id: 2, name: 'Pantalones Vaqueros', price: 40 },
        { id: 3, name: 'Chaqueta de Cuero', price: 90 },
    ];

    return (
        <div className="product-list">
            <h2>Nuestros Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        <h3>{product.name}</h3>
                        <p>Precio: ${product.price}</p>
                        <button className="add-to-cart-btn">Añadir al Carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
