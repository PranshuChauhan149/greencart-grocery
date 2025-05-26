import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import {Toaster} from "react-hot-toast"
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AllProduct from "./pages/AllProduct";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import AddAdress from "./pages/AddAdress";
import MyOrder from "./pages/MyOrder";
import Contact from "./pages/Contact";

const App = () => {
const issSellerPath = useLocation().pathname.includes("seller");
const {showUserLogin} = useAppContext();

  return (
    <div>

      {issSellerPath ? null :<Navbar/>}
      {showUserLogin ? <Login/>: null}
     <Toaster/>
   
   <div className={`${issSellerPath ? "" : "px-6 md:px-616 lg:px-24 xl:px-32"}`}>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  <Routes>
    <Route path="/products" element={<AllProduct/>}/>
  </Routes>
  <Routes>
    <Route path="/products/:category" element={<ProductCategory/>}/>
  </Routes>
  <Routes>
    <Route path="/products/:category/:id" element={<ProductDetail/>}/>
  </Routes>
  <Routes>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
  <Routes>
    <Route path="/add-address" element={<AddAdress/>}/>
  </Routes>
  <Routes>
    <Route path="/my-orders" element={<MyOrder/>}/>
  </Routes>
  <Routes>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
   </div>
  { !issSellerPath && <Footer/>}
    </div>
  );
};

export default App;
