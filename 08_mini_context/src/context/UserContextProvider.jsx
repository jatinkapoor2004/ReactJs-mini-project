import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

//*** USING THE PORTAL AND PUTTING DATA IN IT USING PROVIDER *** 

// WHAT EVER WRITTEN N THIS PROVIDER WRAPPER BECOME ITS CHILDREN 
const UserContextProvider = ({children}) =>
    {

        //**  CREATES A VARIBALE USER WHICH IS NULL AND ITS VALUE WILL BE UPDATED **
        const[user,setUser] = useState(null);

        return(
            <UserContext.Provider value={{user,setUser}}>
{/* THIS CHILDREN MEANS THE CHILDREN WILL NOW ACCESS THE VALUE OF USER STATE VARIBALE */}
                {children}
            </UserContext.Provider>
        )
    }

export default UserContextProvider