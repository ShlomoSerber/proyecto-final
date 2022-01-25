import { createContext, useState } from "react";


export const Context = createContext(null);

const ProductsContext = ({children}) => {
    const [test, setTest] = useState('hola');

    return ( 
        <Context.Provider value={{test, setTest}}>
            {children}
        </Context.Provider>
     );
}
 
export default ProductsContext;