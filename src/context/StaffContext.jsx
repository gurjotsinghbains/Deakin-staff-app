import { createContext, useEffect, useState } from "react";
import stafflist from "../stafflist";
import { addcollectionanddocuments, fetchstaffdata } from "../utils/firebase";
export const StaffContext =createContext(
{
  staff:{}
}
);

export function StaffProvider({children}){
    const [staff, setstaff] = useState({})
    useEffect( ()=>{
        const fetchstaffMap= async()=>{
            const staffmap=await fetchstaffdata();
            console.log(staffmap)
            setstaff(staffmap)

        }

fetchstaffMap()  },[])

    const value= {staff}
    return<StaffContext.Provider value ={value}>{children}</StaffContext.Provider>


}