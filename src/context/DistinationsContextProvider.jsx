import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { createContext } from "react";

export const destinationsContext = createContext()


const DistinationsContextProvider = ({children}) => {

    const [destinationsArr, setdestinations] = useState([]);
    const DB_URL = "http://localhost:3000/destinations"



  //get all data
    useEffect(() => {

        axios.get(DB_URL).then((res) => {
            // console.log('Data fetched successfully:', res.data);
            setdestinations(res.data);

        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    

    const getDestinatinById = (id) => {
        return destinationsArr.find(d => d.id === id);
    };

    const contextValues = useMemo(()=>({destinationsArr,getDestinatinById})
    ,[destinationsArr,getDestinatinById])
    
    return (
       <destinationsContext.Provider value={contextValues}>
          {children}
       </destinationsContext.Provider>
    );
}

export default DistinationsContextProvider;
