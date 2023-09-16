import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Dentist from '../components/Dentist';

const Home = () => {
    return(
        <div>
            <Dentist/>
        </div>
    );
};

export default Home;