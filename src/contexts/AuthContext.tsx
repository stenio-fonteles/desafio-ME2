import axios from "axios";
import {createContext, useEffect, useState } from "react";
import { Me2Api } from "../apis/Me2";


type TDoLoginParams = {
  email: string;
  password: string;
}
type TUserData = {
  id: string;
  name: string;
  email: string;
}
type TAuthContext = {
  isAuthenticated: boolean
  userData: TUserData
  doLogin: (data: TDoLoginParams) => Promise<boolean>
  logout: () => void
}

export const AuthContext = createContext({} as TAuthContext);
export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({} as TUserData);

  async function doLogin({email, password}: TDoLoginParams) {
    const {data} = await Me2Api.get(`/users?email=${email}&password=${password}`)
    if(data.length === 0) {
      setIsAuthenticated(false)
      return false 
    };

    const [user] = data;
    setIsAuthenticated(true)
    setUserData(user)
    
    localStorage.setItem("auth", JSON.stringify(user))
    return true
  }

  function logout() {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    setUserData({} as TUserData);
  }

  useEffect(() => {
    const auth = localStorage.getItem("auth")
    if (!auth) return logout()

    const authObject = JSON.parse(auth)
    setIsAuthenticated(true)
    setUserData(authObject)
  }, [])

  return (
    <AuthContext.Provider value={{doLogin, isAuthenticated, userData, logout}}>
      {children}
    </AuthContext.Provider>
  )
}