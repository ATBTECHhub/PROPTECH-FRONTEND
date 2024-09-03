import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logos from "../assets/logos2.svg";
import Button from "./Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 75) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`h-[80px] fixed md:bg-black bg-[#FFFFFF] p-[15px] w-full z-50 ${
        colorChange ? "md:bg-black" : "bg-none"
      }`}
    >
      <div className="flex justify-between items-center sm:gap-[15px] container">
        <img src={logo} alt="logo" className="md:block hidden" />
        <Link to="/">
          <img src={logos} alt="logo" className="block md:hidden" />
        </Link>

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

        <button className="lg:hidden flex justify-end" onClick={toggleNavbar}>
          {isOpen ? (
            <X className="text-black" />
          ) : (
            <Menu className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center bg-[#4C4989] text-white lg:hidden">
          <ul className="flex flex-col gap-[15px] mt-4">
            <li>
              <Link to="/" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" onClick={toggleNavbar}>
                Explore
              </Link>
            </li>
            <li>
              <Link to="/room" onClick={toggleNavbar}>
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={toggleNavbar}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={toggleNavbar}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-[15px] mt-4">
            <li className="border-white px-[26px] py-[15px] border rounded-[10px]">
              <Link to="/login" onClick={toggleNavbar}>
                Log in
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={toggleNavbar}>
                <Button text="Create Account" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
