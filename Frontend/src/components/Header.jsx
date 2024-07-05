import React from "react";

function Header() {
  return (
    <div className="h-[34vw] m-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative mt-[30px]">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_2s] max-[1050px]:max-w-[45%] max-[800px]:max-w-[65%]">
        <h2 className="text-white font-medium text-[max(4.3vw,22px)]">
          Order Your Favourite Food Here
        </h2>
        <p className="text-white text-[1vw] max-[800px]:hidden">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className=" border-none text-[#747474] font-medium px-[2.3vw] py-[1vw] bg-white text-[max(1vw,13px)] rounded-[50px] ">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
