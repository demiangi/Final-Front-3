import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from './utils/GlobalContext';
import Card from './Card';


const Dentist = () => {
    const dentists = useContext(GlobalContext);
    return(
        <div>
            <h1>Cartilla de dentistas</h1>
            <div className='dentist-list'>
                {dentists.map((dentists)=>
                <Card
                    key={dentists.id}
                    id={dentists.id}
                    name={dentists.name}
                    username={dentists.username}
                    email={dentists.email}
                    website={dentists.website}
                />
                )}
            </div>
        </div>
    );
};

export default Dentist;