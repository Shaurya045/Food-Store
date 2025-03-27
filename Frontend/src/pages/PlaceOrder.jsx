import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, setcartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const initPay = (order) => {
    const options = {
      key: "rzp_test_4qHb2upmTFvXEr",
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await axios.post(
            `${url}/api/order/verify`,
            response,
            { headers: { token } }
          );
          if (data.success) {
            navigate("/myorders");
            setcartItems({});
          } else {
            navigate("/");
          }
        } catch (error) {
          console.log(error);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log("working");
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(`${url}/api/order/place`, orderData, {
      headers: { token },
    });
    if (response.data.success) {
      initPay(response.data.order);
    } else {
      alert("Something went wrong");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex items-center justify-between gap-[50px] mt-[50px]"
    >
      <div className="w-full max-w-[max(30%,500px)]">
        <p className="twext-[30px] font-[600] mb-[50px]">
          Delivery Information
        </p>
        <div className="flex gap-[10px]">
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={data.firstName}
            onChange={onChangeHandler}
            required
          />
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={data.lastName}
            onChange={onChangeHandler}
            required
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
          type="text"
          placeholder="Email Address"
          name="email"
          value={data.email}
          onChange={onChangeHandler}
          required
        />
        <input
          className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
          type="text"
          placeholder="Street"
          name="street"
          value={data.street}
          onChange={onChangeHandler}
          required
        />
        <div className="flex gap-[10px]">
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="City"
            name="city"
            value={data.city}
            onChange={onChangeHandler}
          />
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="State"
            name="state"
            value={data.state}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="flex gap-[10px]">
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="Zip Code"
            name="zipCode"
            value={data.zipCode}
            onChange={onChangeHandler}
            required
          />
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="Country"
            name="country"
            value={data.country}
            onChange={onChangeHandler}
            required
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
          type="text"
          placeholder="Phone"
          name="phone"
          value={data.phone}
          onChange={onChangeHandler}
          required
        />
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
        <div className=" flex-1 flex flex-col gap-[20px]">
          <h2 className="text-[25px] font-[600]">Cart Totals</h2>
          <div className="flex justify-between text-[#555]">
            <p>Subtotal</p>
            <p>Rs.{getTotalCartAmount()}</p>
          </div>
          <hr className="m-[10px_0px]" />
          <div className="flex justify-between text-[#555]">
            <p>Delivery Fee</p>
            <p>Rs.{getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="m-[10px_0px]" />
          <div className="flex justify-between text-[#555]">
            <p>Total</p>
            <p>
              Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
            </p>
          </div>
          <button
            type="submit"
            className="border-none text-white bg-red-600 w-[max(15vw,20px)] p-[12px_0px] rounded-[4px] cursor-pointer mt-[30px]"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
