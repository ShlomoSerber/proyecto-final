import { createContext } from "react";



export const Context = createContext(null);

const usersContext = ({children}) => {
    
    return ( 
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
     );
}
 
export default usersContext;