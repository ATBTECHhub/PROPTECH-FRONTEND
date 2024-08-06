import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import Button from "./Button"
import { useState } from "react"
import { FaWindowClose } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
    const [colorChange, setColorChange] = useState(false)
    const set = () => {
        if (window.scrollY >= 75) {
            setColorChange(true)
        }
        else {
            setColorChange(false)
        }
    }
    window.addEventListener("scroll", set)

    return (
        <nav className={`h-[75px] bg-red-500 fixed w-full z-[2] flex justify-center ${colorChange ? "bg-black" : "bg-none"}
`}>
          <div className="container flex justify-between items-center">
                <img src={logo} alt="logo" className="hidden md:block" /> 
                {/* <img src={logo} alt="logo" className="block lg:hidden" /> */}
                <FaWindowClose className="block md:hidden text-[30px] "/>
              <ul className="lg:flex gap-[32px] text-white hidden ">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/explore">Explore</Link></li>
                  <li><Link to="/room">Rooms</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
              <ul className="lg:flex gap-[28px] text-white items-center hidden ">
                  <li className="border border-white rounded-[10px] px-[26px] py-[15px]"><Link to="/login">Log in</Link></li>
                  <li><Link to="/signup"><Button/></Link></li>
                </ul>
                <FaRegUserCircle className="lg:hidden text-[30px]"/>
                <FaBars className="lg:hidden text-[30px]" />
          </div>
          
        </nav>
        
  )
}

export default Navbar