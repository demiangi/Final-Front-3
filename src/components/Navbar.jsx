import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
        
    return (
        
        <div className='contenedor-nav'>  
            <div>
                <h1>Odontologos 2023</h1>
            </div>
            <nav className='barra-nav'>
            <Link to="/home">Home</Link>
            <Link to="/favorite">Favorite</Link>
            <Link to="/contact">Contact</Link>
            </nav>


        </div>

    )
}

export default Navbar