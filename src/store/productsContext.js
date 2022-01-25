import { createContext, useEffect, useState } from "react";
import { objetoProductos } from "../assets/data/objetoProductos.js"
import { objetoSecciones } from "../assets/data/objetoSecciones.js"


export const ProductsContext = createContext(null);

const ProductsProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        setProductos(objetoProductos);
    }, [objetoProductos])

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