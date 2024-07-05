import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../conetxt/StoreContext";

function FoodItem({ id, name, price, image, description }) {
  const { addItem, removeItem, cartItems } = useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-[15px] shadow-[0_0_10px_#00000015] duration-[0.3s] animate-[fadeIn_1s]">
      <div className="relative">
        <img className="w-full rounded-[15px]" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="absolute right-[15px] bottom-[15px] w-[35px] cursor-pointer rounded-[50%]"
            onClick={() => addItem(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="flex absolute right-[15px] bottom-[15px] gap-[10px] items-center p-[6px] rounded-[50px] bg-white">
            <img
              className="w-[30px]"
              onClick={() => removeItem(id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addItem(id)}
              src={assets.add_icon_green}
            />
          </div>
        )}
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-[500]">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-red-600 text-[22px] font-[500] m-[10px_0px]">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
