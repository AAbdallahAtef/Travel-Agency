import axios from 'axios';
import React, { createContext, useCallback, useMemo, useState } from 'react';
export const packageContext = createContext()
const PackageContextProvider = ({children}) => {
    const [packages,setPackages] = useState([]);
    axios.get("http://localhost:3000/tour_packages")
        .then((response)=>{
            setPackages(response.data)
        })
        .catch((err)=>console.log(err))
    const addPackage = useCallback((newPackage)=>{
        axios.post('http://localhost:3000/tour_packages',newPackage).catch((err)=>console.log(err));
        setPackages([...packages, newPackage])
    },[packages])
   
    const contextValues=useMemo(()=>({packages,setPackages,addPackage})
    ,[packages,setPackages,addPackage])

    return (
        <packageContext.Provider value={contextValues}>
            {children}
        </packageContext.Provider>
    );
}

export default PackageContextProvider;
