import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import StoreContextProvider from "./conetxt/StoreContext";

function App() {
  return (
    <StoreContextProvider>
      <div className="w-4/5 m-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </StoreContextProvider>
  );
}

export default App;
