import { useContext, useEffect } from "react";
import { createContext } from "react";
import App from "../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { dummyProducts } from "../greencart_assets/assets";
import toast, {Toaster} from "react-hot-toast"


export const AppContext = createContext();

export const AppContextProvider = ({children}) =>{

  const navigate = useNavigate();
  const [user,setuser] = useState(null);
  const [isseller,setseller] = useState(false);
    const [showUserLogin,setUserLogin] = useState(false);
  
  const [Product,setProduct] = useState([]);
  const [cartItems,setCartItems] = useState({});
  const [searchquery,setsearchquery] = useState({});

  const currency = import.meta.VITE_CURRENCY;

  const fetchProducts = async() =>{
    setProduct(dummyProducts);
  }

  const addToCart = (itemId)=>{
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
      cartData[itemId] +=1
    }
    else{
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart")
  }

  const updateCartItem = (itemId,quantity) =>{
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated")

  }


  const removeFromCart = (itemId) =>{
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
      cartData[itemId] -=1;
      if(cartData[itemId]==0){
        delete cartData[itemId];
      }
    }
    toast.success("Removed from Cart")
    setCartItems(cartData);
  }

  useEffect(()=>{
    fetchProducts();
  },[])



  const value = {navigate,user,setuser,isseller,setseller,showUserLogin,setUserLogin,Product,currency,addToCart,updateCartItem,removeFromCart,cartItems,setsearchquery,searchquery}
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export const useAppContext=()=>{
  return useContext(AppContext)
}