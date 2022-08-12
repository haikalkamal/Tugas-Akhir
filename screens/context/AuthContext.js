import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";
import { useNavigation } from '@react-navigation/native';
export const AuthContext = createContext();
const headers= {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isloading, setIsLoading] = useState('false');    

    const register = (nama, email, password) => {
        axios.post(`${BASE_URL}/users/register`,{
            nama: nama,
            email: email,
            password: password,
        })
        .then(res=> {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
        })
        .catch(e => {
            console.log(`register error ${e.message}`);
            setIsLoading(false);
        });
    };

    const login = (email, password) => {
        axios.post(`${BASE_URL}/users/login`,{
            email,
            password,
        })
        .then(res=> {
            AsyncStorage.removeItem('userInfo');
            let userInfo = res.data;
            console.log('Info Login ' + userInfo.data.token);
            setUserInfo(userInfo.data.token);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            
        })
        .catch(e => {
            console.log(`login error ${e}`);
            setIsLoading(false);
        });
    };

    const logout = () => {
        
        axios.post(
            `${BASE_URL}/users/logout`,
        {},
        {
            headers: {Authorization: userInfo.data.token},
        },
        )
        .then(res => {
            console.log(res.data);
            AsyncStorage.removeItem('userInfo');
            setIsLoading(false);
        })
        .catch(e => {
            console.log(`logout error ${e}`);
            setIsLoading(false);
        });
    };

    
    return (
        <AuthContext.Provider 
        value={{
            isloading,
            register,
            login,
            logout,
            userInfo
            }}>
            {children}
        </AuthContext.Provider>
    );
}; 