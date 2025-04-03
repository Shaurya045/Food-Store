import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

function LoginPopup({ setIsLoginPopupOpen }) {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = "";
    if (currState === "Login") {
      newUrl = `${url}/api/user/login`;
    } else {
      newUrl = `${url}/api/user/register`;
    }
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setIsLoginPopupOpen(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-0 w-full h-full z-50 bg-[#00000080] grid">
      <form
        onSubmit={onLogin}
        className="place-self-center w-[max(23vw,330px)] color-[#808080] bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-[8px] text-[14px] animation-[fadeIn_0.5s] "
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-[20px] font-medium">{currState}</h2>
          <img
            onClick={() => setIsLoginPopupOpen(false)}
            src={assets.cross_icon}
            alt="cross"
            className="cursor-pointer w-[16px] h-[16px]"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="outline-none border-[1px] border-[#080808] p-[10px] rounded-[4px] "
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Your Name"
              required
            />
          )}
          <input
            className="outline-none border-[1px] border-[#080808] p-[10px] rounded-[4px] "
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Your Email"
            required
          />
          <input
            className="outline-none border-[1px] border-[#080808] p-[10px] rounded-[4px] "
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Your Password"
            required
          />
        </div>
        <button
          className="border-none p-[10px] rounded-[4px] text-white bg-orange-600 text-[15px] cursor-pointer "
          type="submit"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-center gap-[8px] mt-[-15px] ">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Sign Up" ? (
          <div className="flex flex-col ">
            <p>
              Already have an account?{" "}
              <span
                className="text-orange-600 font-[500] cursor-pointer"
                onClick={() => setCurrState("Login")}
              >
                Login
              </span>
            </p>
            <p className="mt-[15px] font-bold text-[16px] ">Demo Account:-</p>
            <p className="text-[15px] font-semibold ">
              Email: <span className="text-orange-600">test8@gmail.com</span>
            </p>
            <p className="text-[15px] font-semibold ">
              Password: <span className="text-orange-600">12345678</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col ">
            <p>
              Create an account?{" "}
              <span
                className="text-orange-600 font-[500] cursor-pointer"
                onClick={() => setCurrState("Sign Up")}
              >
                Sign Up
              </span>
            </p>
            <p className="mt-[15px] font-bold text-[16px] ">Demo Account:-</p>
            <p className="text-[15px] font-semibold ">
              Email: <span className="text-orange-600">test8@gmail.com</span>
            </p>
            <p className="text-[15px] font-semibold ">
              Password: <span className="text-orange-600">12345678</span>
            </p>
          </div>
        )}
        <Link
          className="text-orange-600 text-[18px] font-bold "
          to="https://food-store-admin.vercel.app/"
        >
          View Admin Dashboard
        </Link>
      </form>
    </div>
  );
}

export default LoginPopup;
