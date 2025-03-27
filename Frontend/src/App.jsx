import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import StoreContextProvider from "./context/StoreContext";
import LoginPopup from "./components/LoginPopup";

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  return (
    <StoreContextProvider>
      {isLoginPopupOpen && <LoginPopup setIsLoginPopupOpen={setIsLoginPopupOpen} />}
      <div className="w-4/5 m-auto">
        <Navbar setIsLoginPopupOpen={setIsLoginPopupOpen} />
        <Outlet />
      </div>
      <Footer />
    </StoreContextProvider>
  );
}

export default App;
