import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import {Toaster} from "react-hot-toast"
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";

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
   </div>
  { !issSellerPath && <Footer/>}
    </div>
  );
};

export default App;
