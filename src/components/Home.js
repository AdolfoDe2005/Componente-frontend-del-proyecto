import React from 'react';
import './Home.css'; // Asegúrate de importar el CSS

const Home = () => {
    return (
        <div className="home">
            <h1>Bienvenido a Homeclothings</h1>
            <p>Descubre nuestra colección de ropa y accesorios. ¡Encuentra tu estilo!</p>
            <img
                src="https://via.placeholder.com/600x300"
                alt="Bienvenida"
                className="welcome-image"
            />
            <a href="/tienda" className="cta-button">Explorar Tienda</a>
        </div>
    );
};

export default Home;
