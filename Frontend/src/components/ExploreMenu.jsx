import React from "react";
import { menu_list } from "../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="flex flex-col gap-[20px]" id="explore-menu">
      <h1 className="text-[#262626] font-medium text-[30px]">
        Explore Our Menu
      </h1>
      <p className="max-w-[100%] text-[#808080] max-[1050px]:max-w-full max-[1050px]:text-[14px]">Choose from a diverse menu featuring a delectable array of dishes. Our misssion is to satisfy your cravings and elevate your dining experience, one deliciou meal at a time.</p>
      <div className="flex justify-between items-center gap-7 text-center mx-[0px] my-[20px] overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={
                () => {
                  if (category === item.menu_name) {
                    category = "All";
                  } else {
                    category = item.menu_name;
                  }
                  setCategory(category);
                }
              }
            >
              <img
                className={`${
                  category === item.menu_name ? "border-red-600 border-[4px] border-solid" : ""
                } w-[75.vw] min-w-[80px] rounded-[50%] duration-[0.2s] cursor-pointer`}
                src={item.menu_image}
                alt=""
              />
              <p className="mt-[10px] cursor-pointer text-[#747474] text-[max(1.4vw,16px)]">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mx-[0px] my-[10px] h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
}

export default ExploreMenu;
