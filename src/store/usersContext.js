import { createContext } from "react";


export const UsersContext = createContext(null);

const UsersProvider = ({children}) => {
    
    return ( 
        <UsersContext.Provider value={{}}>
            {children}
        </UsersContext.Provider>
     );
}
 
export default UsersProvider;