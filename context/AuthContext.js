import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

    // const login = () => {
    //     console.log(userToken)
    //     setUserToken('jjkljkjgsfaddafkdja')
    //     // setIsLoading(false)
    //     console.log(userToken)
    // }

    // const logout = () => {
    //     console.log(userToken)
    //     setUserToken(null)
    //     // setIsLoading(false)
    //     console.log(userToken)
    // }

    return (
        <AuthContext.Provider value={{ isLoading, userToken }}>
            {children}
        </AuthContext.Provider>
    )
}