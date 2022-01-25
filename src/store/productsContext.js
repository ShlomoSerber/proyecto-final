import { createContext, useEffect, useState } from "react";
import { objetoProductos } from "../assets/data/objetoProductos.js"
import { objetoSecciones } from "../assets/data/objetoSecciones.js"


export const ProductsContext = createContext(null);

const ProductsProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [secciones, setSecciones] = useState([]);

    // Este useEffect setea el estado productos igual a la lista de productos en productos.js
    useEffect(() => {
        setProductos(objetoProductos);
    }, [objetoProductos])

    // Este useEffect setea las secciones principales de productos igual a la lista de secciones en seccionesPrincipales.js
    useEffect(() => {
        setSecciones(objetoSecciones);
    }, [objetoSecciones])

    return (
        <ProductsContext.Provider value={{productos, secciones}}>
            {children}
        </ProductsContext.Provider>
     );
}
 
export default ProductsProvider;