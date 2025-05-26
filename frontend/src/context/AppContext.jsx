import { useContext, useEffect } from "react";
import { createContext } from "react";
import App from "../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { dummyProducts } from "../greencart_assets/assets";
import toast, { Toaster } from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);
  const [isseller, setseller] = useState(false);
  const [showUserLogin, setUserLogin] = useState(false);

  const [Product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchquery, setsearchquery] = useState({});

  const currency = import.meta.env.VITE_CURRENCY;

  const fetchProducts = async () => {
    setProduct(dummyProducts);
  };

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] == 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Removed from Cart");
    setCartItems(cartData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const getCartCount = () => {
    let totalCount = 0;
    for(const item in cartItems){
      totalCount += cartItems[item];
    }
    return totalCount;
  }

const getCartTotalAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    let itemInfo = Product.find(product => product._id === itemId);
    if (itemInfo && cartItems[itemId] > 0) {
      totalAmount += itemInfo.offerPrice * cartItems[itemId];
    }
  }
  return Math.floor(totalAmount * 100) / 100;
};


  const value = {
    navigate,
    user,
    setuser,
    isseller,
    setseller,
    showUserLogin,
    setUserLogin,
    Product,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    setsearchquery,
    searchquery,
    getCartCount,
    getCartTotalAmount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
