import React from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const date = new Date();
  var year = date.getFullYear();
  return (
    <div className="bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-[20px] p-[20px_8vw] pt-[80px] mt-[100px]" id="contact">
      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px] max-[800px]:flex max-[800px]:flex-col max-[800px]:gap-[35px]">
        <div className="flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" />
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
            excepturi! Nam quidem sed corrupti! Qui eos quaerat similique hic
            ipsum.
          </p>
          <div className="flex gap-[10px] w-[40px] mr-[15px]">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white">Company</h2>
          <ul className="list-none mb-[10px]">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul className="list-none mb-[10px]">
            <li>+91-7667261255</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] m-[20px_0] bg-gray-600 border-none" />
      <p className="max-[800px]:text-center">Copyright {year} Tomato.com - All Right Reserved</p>
    </div>
  );
}

export default Footer;
