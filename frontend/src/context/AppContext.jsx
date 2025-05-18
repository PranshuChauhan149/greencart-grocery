import { useContext } from "react";
import { createContext } from "react";
import App from "../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) =>{

  const navigate = useNavigate();
  const [user,setuser] = useState(null);
  const [isseller,setseller] = useState(false);

  const [showUserLogin,setUserLogin] = useState(false);
  

  const value = {navigate,user,setuser,isseller,setseller,showUserLogin,setUserLogin,navigate}
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export const useAppContext=()=>{
  return useContext(AppContext)
}