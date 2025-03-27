import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../assets/assets";

function Order({ url }) {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}api/order/list`);
    if (response.data.success) {
      console.log(response.data.data);
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (e, orderId) => {
    const response = await axios.post(`${url}api/order/status`, {
      orderId,
      status: e.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] ">
      <h3 className="text-[20px] font-bold mb-[20px] ">Order Page</h3>
      <div>
        {[...orders].reverse().map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] max-[1000px]:grid-cols-[0.5fr_2fr_1fr] max-[1000px]:text-[12px] max-[1000px]:p-[15px_8px] items-start gap-[30px] border-[1px] border-orange-600 p-[20px] m-[30px_0px] text-[14px] text-[#505050] "
          >
            <img
              className="max-[1000px]:w-[40px]"
              src={assets.parcel_icon}
              alt=""
            />
            <div>
              <p className="font-[600]">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="font-[600] mt-[30px] mb-[5px] ">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="mb-[10px]">
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>Rs.{order.amount}</p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              className="bg-[#ffe8e4] border-[1px] border-orange-600 w-[max(10vw,120px)] p-[10px] outline-none max-[1000px]:p-[5px] max-[1000px]:text-[12px] "
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
