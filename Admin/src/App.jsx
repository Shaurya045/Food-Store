import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./Pages/Add";
import List from "./Pages/List";
import Order from "./Pages/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const url = "http://localhost:3000/";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
