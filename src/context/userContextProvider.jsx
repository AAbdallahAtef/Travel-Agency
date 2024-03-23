import axios from 'axios';
import React, { createContext, useMemo, useState } from 'react';
export const usersContext=createContext()
const UserContextProvider = ({children}) => {
    const [users,setUsers]= useState([]);
    const [currentUser,setCurrentUser] = useState({})
    axios.get("http://localhost:3000/users")
        .then((response) =>{
            // console.log('Users data', response.data);
            setUsers(response.data)
        })
        .catch((error)=>{console.log("Error", error)})
    const contextValues=useMemo(()=>({users,currentUser,setCurrentUser})
    ,[users,currentUser,setCurrentUser])
  return (
      <usersContext.Provider value={contextValues}>
          {children}
      </usersContext.Provider>
  );
}

export default UserContextProvider;
