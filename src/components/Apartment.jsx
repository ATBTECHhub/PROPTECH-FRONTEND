import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Apartment = () => {
  return (
    <div>
      <nav
        className={`h-[75px] fixed w-full z-[2] flex justify-center ${
          colorChange ? "bg-black" : "bg-none"
        }
`}
      >
        <div className="container flex justify-between items-center sm:gap-[15px]">
          <img src={logo} alt="logo" className="sm:hidden md:block" />
          {/* <img src={logo} alt="logo" className="block lg:hidden" /> */}

          <ul className="hidden lg:flex gap-[32px] text-white ">
            <li>
              <Link to="/">Reserve a space</Link>
            </li>
            <li>
              <Link to="/explore">Function as a host</Link>
            </li>
          </ul>
          <div className="relative inline-block border p-2 rounded-3xl bg-[#4C4989] border-[#4C4989] w-[100px]">
            <label htmlFor="reserve" className="flex items-center">
              <img src={man} alt="profile" className="w-8 h-8" />
            </label>
            <select
              name="reserve"
              id="reserve"
              className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer bg-[#4C4989] text-white leading-3 p-2"
            >
              <option value="One Bedroom" className="text-xs py-2 px-4">
                Handlling Bookings
              </option>
              <option value="Two Bedroom" className="text-xs py-2 px-4">
                Favorite
              </option>
              <option value="Two Bedroom" className="text-xs py-2 px-4">
                Message
              </option>
              <option value="Two Bedroom" className="text-xs py-2 px-4">
                Logout
              </option>
            </select>
            <span className="absolute right-2 top-2 pointer-events-none text-white">
              &#9662;
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Apartment;
