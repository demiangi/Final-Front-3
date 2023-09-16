
import { json, useParams } from 'react-router-dom'
import Card from '../components/Card'
import React, { useContext, useEffect, useState } from "react";


const Favorite = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    const handleRemoveFavorito = (id) => {
        const updatedFavoritos = favorites.filter((favorite) => favorite.id !== id);
        setFavorites(updatedFavoritos);
        localStorage.setItem('favorites', JSON.stringify(updatedFavoritos));
    }

    return (
        <div>
            <h1>Estos son tus profesionales favoritos</h1>
            <div className='dentist-list'>
                {favorites.map((favorite) => (
                    <div key={favorite.id} className='card-dentist-render'>
                        <h3>{favorite.name}</h3>
                        <p>{favorite.username}</p>
                        <p>{favorite.id}</p>
                        <p>{favorite.email}</p>
                        <p>{favorite.website}</p>
                        <button
                            className='favorite-button favorited'
                            onClick={() => handleRemoveFavorito(favorite.id)}
                        >
                            ❤️
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Favorite;