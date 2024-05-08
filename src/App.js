import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopup from "./components/LoginUp/LoginPopup";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  // const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>} */}
      <div className="app">
        {/* <Navbar setShowLogin={setShowLogin} /> */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
