import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
    const { id } = useParams();
    const [dentist, setDentist] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data)=>{
                setDentist(data);
            });
    },[id])
    if (!dentist) {
        return (
            <div>
                <h2>Cargando datos del dentista...</h2>
            </div>
        )
    }
    return (
        <div>
            <h2>Detalles de su dentista</h2>
            <p>Nombre: {dentist.name}</p>
            <p>Usuario: {dentist.username}</p>
            <p>Email: {dentist.email}</p>
            <p>Website: {dentist.website}</p>
        </div>
    );
};

export default CardDetail;