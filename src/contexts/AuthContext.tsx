import { ReactNode, createContext, useEffect, useState } from "react";
interface AuthContextState {
    isLoggedIn: boolean;
    token?: string;
    username?: string;
    userRole?: string;
    login: (username: string, token: string,role: string) => void;
    logout: () => void;
}
const initialState = {
    isLoggedIn: false,
    login: (username: string, token: string) => { },
    logout: () => { },
};

const AuthContext = createContext<AuthContextState>(initialState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState<string>();
    const [token, setToken] = useState<string>();
    const [userRole, setUserRole] = useState<string>();

    useEffect(() => {
        
        const data = localStorage.getItem("user");
        if (data) {
            const user = JSON.parse(data);
            setIsLoggedIn(true);
            setToken(user.token);
            setUsername(user.username);
            setUserRole(user.role);
        }
    }, []);
    const auth = {
        isLoggedIn: isLoggedIn,
        token,
        username,
        userRole,
        login: (username: string, token: string,role: string) => {
            setUsername(username);
            setToken(token);
            setUserRole(role);
            setIsLoggedIn(true);
        },
        logout: () => {
            localStorage.removeItem("user");
            setUsername(undefined);
            setToken(undefined);
            setUserRole(undefined);
            setIsLoggedIn(false);
            
        },
    };
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
export default AuthContext;