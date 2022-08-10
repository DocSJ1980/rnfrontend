import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const login = (email, password) => {
        setIsLoading(true)
        console.log(isLoading)
        axios.post('http://auth.sjnotes.tk:5001/api/auth/login', {
            email,
            password
        })
            .then(async (res) => {
                try {
                    setUserInfo(res.data.message)
                    setUserToken(res.data.token)
                    await AsyncStorage.setItem('userTokenLocal', res.data.token)
                    await AsyncStorage.setItem('userInfoLocal', JSON.stringify(userInfo))
                    console.log("Token: ", userToken, "Message: ", userInfo)
                } catch (error) {
                    `error hai ${error}`
                }
            })
            .catch(e => {
                console.log(`API Error ${e}`)
            })
        setIsLoading(false)
    }

    const logout = () => {
        console.log("Token: ", userToken, "Message: ", userInfo)
        setIsLoading(true)
        AsyncStorage.removeItem('userTokenLocal')
        AsyncStorage.removeItem('userInfoLocal')
        setUserToken(null)
        setUserInfo(null)
        setIsLoading(false)
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userTokenLocal = await AsyncStorage.getItem('userTokenLocal')
            let userInfoLocal = await AsyncStorage.getItem('userInfoLocal')
            if (userTokenLocal) {
                setUserToken(userTokenLocal)
                setUserInfo(userInfoLocal)
                setIsLoading(false)
            }
            console.log(userToken, userInfo)
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