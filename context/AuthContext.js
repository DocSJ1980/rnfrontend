import React, { createContext, useState, useEffect } from "react";
import { setItemAsync, deleteItemAsync, getItemAsync } from "expo-secure-store";
import axios from "axios";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [msg, setMsg] = useState(true)
    const [msgType, setMsgType] = useState(true)
    const showMsg = () => {
        setTimeout(() => {
            setMsg();
        }, 3000);
    }

    const login = (email, password) => {
        setIsLoading(true)
        axios.post('http://auth.sjnotes.tk:5001/api/auth/login', {
            email,
            password
        })
            .then(async (res) => {
                try {
                    setUserToken(res.data.token)
                    setMsg(res.data.message)
                    setMsgType(res.data.success)
                    showMsg()
                    setUserInfo(res.data.userInfo)
                    await setItemAsync('userTokenLocal', res.data.token)
                    await setItemAsync('userInfoLocal', JSON.stringify(res.data))

                } catch (error) {
                    console.log(`error hai ${error}`)
                    setMsg("Login Failed")
                    setMsgType(false)
                    showMsg()
                }
                console.log(userInfo)
                console.log("Token: ", userToken)
            })
            .catch(e => {
                console.log(`API Error ${e}`)
                setMsg("Login Failed")
                setMsgType(false)
                showMsg()
            })
        setIsLoading(false)
    }

    const logout = () => {
        console.log("UserInfo: ", userInfo)
        setIsLoading(true)
        setMsg("Logged out successfully")
        setMsgType(false)
        deleteItemAsync('userTokenLocal')
        deleteItemAsync('userInfoLocal')
        setUserToken(null)
        setUserInfo(null)
        setIsLoading(false)
        showMsg()
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userTokenLocal = await getItemAsync('userTokenLocal')
            let userInfoLocal = await getItemAsync('userInfoLocal')
            if (userTokenLocal) {
                setUserToken(userTokenLocal)
                setUserInfo(userInfoLocal)
                setIsLoading(false)
                showMsg()
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
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, msg, userInfo, msgType }}>
            {children}
        </AuthContext.Provider>
    )
}