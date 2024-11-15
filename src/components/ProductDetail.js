// src/components/ProductDetail.js
import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
    // Datos de ejemplo si no tienes datos dinámicos aún
    const exampleProduct = {
        name: 'Chaqueta de Cuero',
        price: 90,
        description: 'Una chaqueta de cuero elegante y resistente para todas las estaciones.',
    };

    const currentProduct = product || exampleProduct;  // Si no se pasa un producto, usa el de ejemplo

    return (
        <div className="product-detail">
            <h2>{currentProduct.name}</h2>
            <p>Precio: ${currentProduct.price}</p>
            <p>{currentProduct.description}</p>
            <button className="add-to-cart-btn">Añadir al Carrito</button>
        </div>
    );
};

export default ProductDetail;
