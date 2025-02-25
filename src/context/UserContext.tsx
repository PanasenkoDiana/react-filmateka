import { Children, createContext, useState } from "react";


interface UserContextType {
    token: string;
    addToken : (token: string) => void;
}

const initialValue: UserContextType = {
    token: '',
    addToken: () => {}
}

export const UserContext = createContext< UserContextType >(initialValue)

export function UserContextProvider({ children }: { children: React.ReactNode }){
    const [token, setToken] = useState('');

    function addToken (token: string){
        setToken(token)
    }

    return(
        <UserContext.Provider value={{token, addToken}}>
        {children}
        </UserContext.Provider>
    )
}