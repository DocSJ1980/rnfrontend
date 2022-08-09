import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userToken, setUserToken] = useState(null)

    const login = (email, password) => {
        setIsLoading(false)
        axios.post('http://auth.sjnotes.tk:5001/api/auth/login', {
            email,
            password
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(`API Call error ${error}`)
            })
        // setUserToken('jjkljkjgsfaddafkdja')
        // AsyncStorage.setItem('userToken', "jjkljkjgsfaddafkdja")
        setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)
        AsyncStorage.removeItem('userToken')
        setUserToken(null)
        setIsLoading(false)
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userTokenLocal = await AsyncStorage.getItem('userToken')
            setUserToken(userTokenLocal)
            setIsLoading(false)
        } catch (error) {
            console.log(`isLogged in error ${error}`)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])


    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
            {children}
        </AuthContext.Provider>
    )
}