import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Favorite from "../routes/Favorite";
import "./Card.css"
import { GlobalContext } from './utils/GlobalContext';


const Card = ({ name, username, email, website, id }) => {
    const dentists = useContext(GlobalContext);

    const [isFavorito, setIsFavorito] = useState(false);

    const handleAddFavorito = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (!favorites.some((favorite) => favorite.id === id)) {
            const cardData = {
                id,
                name,
                username,
                email,
                website,
            };

            favorites.push(cardData);
            setIsFavorito(true);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    };

    return (
    <Link to={`/dentist/${id}`} className="card-link">
        <div className="card-dentist-render">
            <h3>{name}</h3>
            <p>{username}</p>
            <p>{email}</p>
            <p>{website}</p> 
                <button
                onClick={handleAddFavorito}
                className={`favorite-button ${isFavorito ? "favorited" : ""}`}
                disabled={isFavorito}
                
            >❤️</button>
        </div>
    </Link>

    );

};

export default Card;
