import React, { createContext, useState, useEffect } from "react";

//contexto global
export const GlobalContext = createContext();

//este dara el contexto a los demas
export const ContextProvider = ({children}) =>{
    //estado para guardar los datos del dentista
    const [dentist, setDentist] = useState([]);

    useEffect(()=>{
        //peticion a la pai con fecth
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=> response.json())
            .then((data)=> setDentist(data));
    },[]) //se ejecuta una vez
    return(
        //damos los datos a traves del contexto
        <GlobalContext.Provider value={dentist}>
            {children}
        </GlobalContext.Provider>
    );
};
