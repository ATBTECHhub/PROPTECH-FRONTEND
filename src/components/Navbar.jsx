import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logos from "../assets/logos2.svg";
import Button from "./Button";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const set = () => {
    if (window.scrollY >= 75) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", set);

  return (
    <nav
      className={`h-[75px] fixed w-full  flex justify-center z-50 ${
        colorChange ? "bg-black" : "bg-none"
      }
`}
    >
      <div className="flex justify-between items-center sm:gap-[15px] container">
        <img src={logo} alt="logo" className="md:block hidden" />
        <img src={logos} alt="logo" className="block md:hidden" />

        {/* <img src={logo} alt="logo" className="block lg:hidden" /> */}
        <FaWindowClose className="block md:hidden text-[30px]" />
        <ul className="lg:flex gap-[32px] hidden text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/room">Rooms</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <ul className="lg:flex items-center gap-[28px] hidden text-white">
          <li className="border-white px-[26px] py-[15px] border rounded-[10px]">
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">
              <Button text="Create Account" />
            </Link>
          </li>
        </ul>

        <FaBars className="lg:hidden text-[30px]" />
      </div>
    </nav>
  );
};

export default Navbar;
