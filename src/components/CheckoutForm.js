// src/components/CheckoutForm.js
import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Pago procesado con éxito');
    };

    return (
        <div className="checkout-form">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre Completo</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Número de Tarjeta</label>
                    <input 
                        type="text" 
                        name="cardNumber" 
                        value={formData.cardNumber} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Fecha de Expiración</label>
                    <input 
                        type="text" 
                        name="expirationDate" 
                        value={formData.expirationDate} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input 
                        type="text" 
                        name="cvv" 
                        value={formData.cvv} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" className="submit-btn">Procesar Pago</button>
            </form>
        </div>
    );
};

export default CheckoutForm;
