import { assets } from "../assets/assets";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-[8px_4%]">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="logo" />
      <img
        className="w-[40px]"
        src={assets.profile_image}
        alt="profile_image"
      />
    </div>
  );
}

export default Navbar;
