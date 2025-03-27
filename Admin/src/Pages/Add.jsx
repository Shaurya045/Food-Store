import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

function Add({ url }) {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);
    const response = await axios.post(`${url}api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "Salad",
        price: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px] ">
      <form className="gap-[20px] flex flex-col " onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-[10px] ">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-[120px]"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload_icon"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="flex flex-col gap-[10px] w-[max(40%,280px)] ">
          <p>Product Name</p>
          <input
            value={data.name}
            onChange={onChangeHandler}
            type="text"
            name="name"
            placeholder="Enter Product Name"
            required
            className="p-[10px] outline-none border-[1px] border-[#6d6d6d] rounded-[5px] "
          />
        </div>
        <div className="flex flex-col gap-[10px] w-[max(40%,280px)] ">
          <p>Product Description</p>
          <textarea
            value={data.description}
            onChange={onChangeHandler}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
            className="p-[10px] outline-none border-[1px] border-[#6d6d6d] rounded-[5px] "
          ></textarea>
        </div>
        <div className="flex gap-[30px] ">
          <div>
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              className="max-w-[120px] p-[10px] outline-none border-[1px] border-[#6d6d6d] rounded-[5px] "
              name="category"
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p>Product Price</p>
            <input
              value={data.price}
              onChange={onChangeHandler}
              className="max-w-[120px] p-[10px] outline-none border-[1px] border-[#6d6d6d] rounded-[5px] "
              type="number"
              name="price"
              placeholder="Rs.200"
              required
            />
          </div>
        </div>
        <button
          className="max-w-[120px] p-[10px] border-none rounded-[5px] bg-black text-white cursor-pointer"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
