import React, { useState } from "react";

const Form = () => {
    // Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita la recarga de la página

        if (!nombre || !email) {
            setError('Todos los campos son obligatorios');
            setMensaje('');
            return;
        }

        if (nombre.length < 3) {
            setError('El nombre debe tener más de 2 letras.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('El email debe tener un formato válido.');
            return;
        }

        setMensaje('Se ha suscrito exitosamente.');
        setError('');
    };

    return (
        <div>
            <h2>Suscríbete para recibir todas las novedades!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {error && <div className="error">{error}</div>}

                {mensaje && <div className="success">{mensaje}</div>}

                <button type="submit">Suscribirse</button>
            </form>
        </div>
    );
};

export default Form;
