import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function List({ url }) {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const removeItem = async (id) => {
    const response = await axios.post(`${url}api/food/remove`, { id: id });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  
  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px]  ">
      <p className="text-[20px] font-bold mb-[20px]">All Foods List</p>
      <div>
        <div className="bg-[#f9f9f9] grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center p-[12px_15px] border-[1px] border-[#cacaca] text-[13px] gap-[10px] max-[600px]:hidden">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] max-[600px]:grid-cols-[1fr_3fr_1fr] items-center p-[12px_15px] border-[1px] border-[#cacaca] text-[13px] gap-[10px] max-[600px]:gap-[15px]"
            >
              <img
                className="w-[50px]"
                src={`${url}images/` + item.image}
                alt="item-Image"
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p
                onClick={() => removeItem(item._id)}
                className="cursor-pointer"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
