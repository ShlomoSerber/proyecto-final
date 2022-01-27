import { createContext, useEffect, useState } from "react";
import { objetoUsuarios } from '../assets/data/objetoUsuarios'

export const UsersContext = createContext(null);

const UsersProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) === null ? [] : JSON.parse(localStorage.getItem("currentUser"))
    )
    
    const [carrito, setCarrito] = useState(currentUser.length > 0 ? currentUser[0].arraysCarrito.carrito : [])
    const [cantProdCarrito, setCantProdCarrito] = useState(currentUser.length > 0 ? currentUser[0].arraysCarrito.cantProdCarrito : [])
    
    const [usuarios, setUsuarios] = useState(
        JSON.parse(localStorage.getItem("usuarios")) === null ? objetoUsuarios : JSON.parse(localStorage.getItem("usuarios"))
    )

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("usuarios")) === null){
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
        }
    },[usuarios])
    
    useEffect(() => {
        if(JSON.parse(localStorage.getItem("currentUser")) === null){
            localStorage.setItem("currentUser", JSON.stringify(currentUser))
        }
    },[currentUser])

    return ( 
        <UsersContext.Provider value={{usuarios, setUsuarios, carrito, setCarrito, cantProdCarrito, setCantProdCarrito, currentUser, setCurrentUser}}>
            {children}
        </UsersContext.Provider>
    );
}
 
export default UsersProvider;