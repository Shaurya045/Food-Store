import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../assets/assets";

function MyOrders() {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/userorders`,
      {},
      {
        headers: { token },
      }
    );
    if (response.data.success) {
      setData(response.data.data);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <div className="m-[50px_0px]">
      <h2 className="text-[30px] font-[600]">My Orders</h2>
      <div className="flex flex-col gap-[20px] mt-[30px] ">
        {[...data].reverse().map((order, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] max-[900px]:grid-cols-[1fr_2fr_1fr] max-[900px]:gap-y-[5px] max-[900px]:text-[12px] items-center gap-[30px] text-[14px] p-[10px_20px] text-[#454545] border-[1px] border-orange-600 "
            >
              <img
                className="w-[50px] "
                src={assets.parcel_icon}
                alt="parcel_icon"
              />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p>Rs.{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span className="text-orange-600">&#x25cf;</span>
                <b className="font-[500] text-[#454545] ">{order.status}</b>
              </p>
              <button
                onClick={fetchOrders}
                className="border-none p-[12px_0px] rounded-[4px] bg-[#ffe1e1] cursor-pointer text-[#454545] "
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;
