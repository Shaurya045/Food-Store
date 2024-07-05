import React, { useContext } from "react";
import { StoreContext } from "../conetxt/StoreContext";
import FoodItem from "./FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-[30px]">
      <h2 className="text-[max(2vw, 50px) font-semibold">Top Dishes near you</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px] gap-y-[50px]">
        {food_list.map((item, index) => {
            if(category==="All" || category===item.category){
                return (
                  <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                  />
                );
            }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
