import { createContext, useEffect, useState } from "react";
import { objetoProductos } from "../assets/data/objetoProductos.js"
import { objetoSecciones } from "../assets/data/objetoSecciones.js"


export const ProductsContext = createContext(null);



const ProductsProvider = ({children}) => {
    const [secciones, setSecciones] = useState();


    const [productos, setProductos] = useState(
        JSON.parse(localStorage.getItem("productos")) === null ? objetoProductos : JSON.parse(localStorage.getItem("productos"))
    );

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("productos")) === null){
            localStorage.setItem("productos", JSON.stringify(productos))
        }
    }, [productos])

    useEffect(() => {
        setSecciones(objetoSecciones);
    }, [objetoSecciones])

     
    return (
        <ProductsContext.Provider value={{setProductos, productos, secciones}}>
            {children}
        </ProductsContext.Provider>
    );

}

export default ProductsProvider;