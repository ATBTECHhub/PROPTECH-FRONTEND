import React from "react";

const Loglanding = () => {
  return (
    <div>
      <nav
        className="h-[75px] fixed w-full z-[2] flex justify-center"
      >
        <div className="container flex justify-between items-center sm:gap-[15px]">
          <img src={logo} alt="logo" className="hidden md:block" />
          {/* <img src={logo} alt="logo" className="block lg:hidden" /> */}
          <FaWindowClose className="block md:hidden text-[30px] " />
          <ul className="lg:flex gap-[32px] text-white hidden ">
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
          <ul className="lg:flex gap-[28px] text-white items-center hidden ">
            <li className="border border-white rounded-[10px] px-[26px] py-[15px]">
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">
                <Button text="Create Account" />
              </Link>
            </li>
          </ul>
          <FaRegUserCircle className="lg:hidden text-[30px]" />
          <FaBars className="lg:hidden text-[30px]" />
        </div>
      </nav>
    </div>
  );
};

export default Loglanding;
