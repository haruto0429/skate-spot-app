import { createContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase'

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            setUser(authUser)

        })
    }, [])

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthProvider;