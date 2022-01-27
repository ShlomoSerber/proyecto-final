import { createContext, useEffect, useState } from "react";
import { objetoUsuarios } from '../assets/data/objetoUsuarios.js'


export const UsersContext = createContext(null);

const UsersProvider = ({children}) => {

    const [usuarios, setUsuarios] = useState(
        JSON.parse(localStorage.getItem("usuarios")) === null ? objetoUsuarios : JSON.parse(localStorage.getItem("usuarios"))
    )

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("usuarios")) === null){
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
        }
    },[usuarios])
    
    return ( 
        <UsersContext.Provider value={{usuarios, setUsuarios}}>
            {children}
        </UsersContext.Provider>
    );
}
 
export default UsersProvider;