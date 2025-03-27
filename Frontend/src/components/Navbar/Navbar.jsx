import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function Navbar({ setIsLoginPopupOpen }) {
  const [use, setUse] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <div className="mt-4 px-5 py-0 flex justify-between items-center shadow-md sticky z-30 top-0 bg-white h-[80px] rounded-[5px]">
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-[150px] max-[1050px]:w-[140px] max-[910px]:w-[120px]"
          onClick={() => setUse("home")}
        />
      </Link>
      <ul className="flex gap-[20px] list-none text-[#49557e] text-[18px] max-[1050px]:gap-[20px] max-[1050px]:text-[17px] max-[910px]:gap-[15px] max-[910px]:text-[16px] max-[800px]:hidden">
        <li>
          <NavLink
            to="/"
            onClick={() => setUse("home")}
            className={({ isActive }) =>
              `${
                isActive && use === "home"
                  ? "text-orange-600 underline"
                  : "text-gray-700"
              } hover:text-orange-600`
            }
          >
            home
          </NavLink>
        </li>
        <a
          href="#explore-menu"
          onClick={() => setUse("menu")}
          className={
            use === "menu" ? "text-orange-600 underline" : "text-gray-700"
          }
        >
          menu
        </a>
        <a
          href="#mobile"
          onClick={() => setUse("mobile")}
          className={
            use === "mobile" ? "text-orange-600 underline" : "text-gray-700"
          }
        >
          mobile app
        </a>
        <a
          href="#contact"
          onClick={() => setUse("contact")}
          className={
            use === "contact" ? "text-orange-600 underline" : "text-gray-700"
          }
        >
          contact-us
        </a>
      </ul>
      <div className="rightNav flex items-center gap-[40px] max-[1050px]:gap-[30px] max-[910px]:gap-[20px]">
        <img
          className="max-[1050px]:w-[22px] max-[910px]:w-[20px]"
          src={assets.search_icon}
          alt=""
        />
        <Link to="/cart">
          <div className="relative">
            <img src={assets.basket_icon} alt="" />
            <div
              className={
                getTotalCartAmount() === 0
                  ? ""
                  : "dot absolute min-w-[10px] min-h-[10px] bg-orange-600 rounded-full -top-[8px] -right-[8px]"
              }
            ></div>
          </div>
        </Link>
        {!token ? (
          <button
            onClick={() => setIsLoginPopupOpen(true)}
            className="bg-transparent text-[16px] text-[#49557e] border border-solid px-[30px] py-[10px] rounded-[50px] border-t-orange-600 border-l-yellow-500 border-r-blue-600 border-b-green-500 cursor-pointer duration-[0.3s] hover:bg-[#f6afa14d] max-[1050px]:p-[8px_25px] max-[910px]:p-[7px_20px] max-[910px]:text-[15px]"
          >
            SignIn
          </button>
        ) : (
          <div className="relative cursor-pointer group">
            <img src={assets.profile_icon} alt="profile-icon" />
            <ul className="absolute hidden group-hover:flex flex-col justify-center gap-[10px] bg-[#fff2ef] py-[12px] px-[30px] rounded-[4px] border-[1px] border-orange-600 outline-[2px] outline-white list-none top-full right-0 ">
              <li
                onClick={() => navigate("/myorders")}
                className="flex items-center gap-[10px] cursor-pointer hover:text-orange-600 duration-[0.3s]"
              >
                <img
                  className="w-[20px]"
                  src={assets.bag_icon}
                  alt="bag-icon"
                />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex items-center gap-[10px] cursor-pointer hover:text-orange-600 duration-[0.3s]"
              >
                <img
                  className="w-[20px]"
                  src={assets.logout_icon}
                  alt="logout-icon"
                />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
