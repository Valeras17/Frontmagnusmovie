import { ReactNode, createContext, useEffect, useState } from "react";

interface AuthContextState {
    isLoggedIn: boolean;
    token?: string;
    username?: string;
    userRoles?: string[];
    login: (username: string, token: string,roles: string[]) => void;
    logout: () => void;
}
const initialState = {
    isLoggedIn: false,
    login: (username: string, token: string,roles:string[]) => { },
    logout: () => { },
};

const AuthContext = createContext<AuthContextState>(initialState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState<string>();
    const [token, setToken] = useState<string>();
    const [userRoles, setUserRoles] = useState<string[]>();

    useEffect(() => {
        
        const data = localStorage.getItem("user");
        if (data) {
            const user = JSON.parse(data);
            setIsLoggedIn(true);
            setToken(user.token);
            setUsername(user.username);
            setUserRoles(user.roles);
            
        }
    }, []);
    const auth = {
        isLoggedIn: isLoggedIn,
        token,
        username,
        userRoles,
        login: (username: string, token: string,roles: string[]) => {
            setUsername(username);
            setToken(token);
            setUserRoles(roles);
            setIsLoggedIn(true);
            
        },
        logout: () => {
            localStorage.removeItem("user");
            setUsername(undefined);
            setToken(undefined);
            setUserRoles(undefined);
            setIsLoggedIn(false);
            
        },
    };
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
export default AuthContext;