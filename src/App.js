import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import ProductDetail from './components/ProductDetail';
import CheckoutForm from './components/CheckoutForm';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<ProductList />} />
          <Route path="/carrito" element={<ShoppingCart />} />
          <Route path="/detalle-producto" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
