import React, { useContext } from "react";
import { StoreContext } from "../conetxt/StoreContext";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="flex items-center justify-between gap-[50px] mt-[50px]">
      <div className="w-full max-w-[max(30%,500px)]">
        <p className="twext-[30px] font-[600] mb-[50px]">
          Delivery Information
        </p>
        <div className="flex gap-[10px]">
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="First Name"
          />
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-[10px]">
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="City"
          />
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-[10px]">
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="Zip Code"
          />
          <input
            className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] border-[#c5c5c5_solid] border-[1px] rounded-[4px] outline-red-600"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
        <div className=" flex-1 flex flex-col gap-[20px]">
          <h2 className="text-[25px] font-[600]">Cart Totals</h2>
          <div className="flex justify-between text-[#555]">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="m-[10px_0px]" />
          <div className="flex justify-between text-[#555]">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr className="m-[10px_0px]" />
          <div className="flex justify-between text-[#555]">
            <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
          </div>
          <button className="border-none text-white bg-red-600 w-[max(15vw,20px)] p-[12px_0px] rounded-[4px] cursor-pointer mt-[30px]">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
