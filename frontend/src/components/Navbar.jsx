import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,getCartCount}=useContext(ShopContext)
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>  <img src={assets.logo} alt="" className="w-36" /></Link>
    
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col gap-1 text-sm items-center">
          <p>HOME</p>
          <hr className="h-[1.5px] w-2/4 bg-gray-700 border-none hidden" />
        </NavLink>

        <NavLink
          to={"/collection"}
          className="flex flex-col gap-1 text-sm items-center"
        >
          <p>COLLECTION</p>
          <hr className="h-[1.5px] w-2/4 bg-gray-700 border-none hidden" />
        </NavLink>

        <NavLink
          to={"/about"}
          className="flex flex-col gap-1 text-sm items-center"
        >
          <p>ABOUT</p>
          <hr className="h-[1.5px] w-2/4 bg-gray-700 border-none hidden" />
        </NavLink>

        <NavLink
          to={"/contact"}
          className="flex flex-col gap-1 text-sm items-center"
        >
          <p>CONTACT</p>
          <hr className="h-[1.5px] w-2/4 bg-gray-700 border-none hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />

          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col py-3 px-5 bg-gray-100 gap-2  w-36 text-gray-500">
              <p className="cursor-pointer hover:text-black">MyProfile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          {/* <p className="absolute -top-4 -right-3">10</p> */}
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden "
          alt=""
        />
      </div>
      {/* { sidebar menu for small screen } */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => set(false)}
            className="py-2 pl-6 border"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => set(false)}
            className="py-2 pl-6 border"
            to={"/collection"}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => set(false)}
            className="py-2 pl-6 border"
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => set(false)}
            className="py-2 pl-6 border"
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
