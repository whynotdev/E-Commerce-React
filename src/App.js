import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import { auth } from "./Pages/Connectiondb/firebase";
import { Layout } from "./Pages/Home/layout";
import { PDetails } from "./Pages/Home/pddetails";
import SearchPage from "./Pages/SearchPage";
import Home from "./Pages/Home/Home";
import Logout from "./Pages/Logout";

function App() {
  const [userName, setUserName] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleCart = (item) => {
    const itemIndexCart = cart.findIndex(
      (cartItem) => cartItem.item.id === item.id
    );

    if (itemIndexCart !== -1) {
      alert("Item already added");
    } else {
      alert("Item added");
      setCart((prevCart) => [...prevCart, { item, amount: 1 }]);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ userName ? ( <Layout size={cart.length} userName={userName} />) : (<Navigate to="/Login" />)}/>
          <Route path="/search/:query" element={userName ? <SearchPage /> : <Navigate to="/Login" />}/>
          <Route path="/pdetails/:productId" element={<PDetails handleCart={handleCart} size={cart.length} />}/>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
