import { createContext, useState } from "react";

export const UserContext =createContext(
{
  currentuser:null,
  setcurrentuser:()=>null

}
);

export function UserProvider({children}){
    const [currentuser, setcurrentuser] = useState(null)

    const value= {currentuser, setcurrentuser}
    return<UserContext.Provider value ={value}>{children}</UserContext.Provider>


}