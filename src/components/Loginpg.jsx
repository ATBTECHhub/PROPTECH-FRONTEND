import React from "react";
import logo from "../assets/logo.svg";
import flag from "../assets/flag.svg";
import mark from "../assets/mark.svg";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import logos from "../assets/logos2.svg";
import quest from "../assets/quest.svg";
import google from "../assets/google.svg";

const Loginpg = () => {
  return (
    <div>
      <nav className="bg-[#FFFFFF] md:bg-[#4C4989] flex justify-center h-[90px] border-b-[3px]">
        <div className="container flex justify-between items-center">
          <img src={logos} alt="logo" className="block md:hidden" />
          <img src={logo} alt="logo" className="hidden md:block" />

          <div className="flex gap-[20px] md:gap-[50px]">
            <img src={flag} alt="flag" />
            <img src={quest} alt="icon" />
            <img src={mark} alt="mark" className="hidden md:block" />
          </div>
        </div>
      </nav>
      <div className="items-center flex flex-col text-center">
        <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-[#2B3F58] pb-[15px] md:pb-[21px] pt-[15px] md:pt-[21px]">
          Sign in or create an account
        </h2>
      </div>
      <div className="container flex flex-col items-center border-4 md:border-8 rounded-[20px] md:rounded-[50px] border-darkgray h-auto md:h-[700px] w-[90%] md:w-[700px] mt-[10px] pt-[15px] bg-white gap-[12px] md:gap-[16px] p-4">
        <form className="flex flex-col w-full md:w-[600px] text-left gap-2 md:gap-0">
          <label
            for="email"
            className="text-[#2B3F58] text-[16px] md:text-[18px] font-normal"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-[45px] md:h-[55px] border-2 border-darkgray rounded-[12px] pl-[12px] text-[14px] mt-0"
          />
          <label
            for="password"
            className="text-[#2B3F58] text-[16px] md:text-[18px] font-normal flex justify-between mt-4"
          >
            Password
            <span className="flex items-center ml-auto gap-2 md:gap-3">
              <FaRegEyeSlash className="text-[#666666]" />
              Hide
            </span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-[45px] md:h-[55px] border-2 border-darkgray rounded-[12px] pl-[24px] text-[14px] mt-0"
          />
        </form>

        <div className="flex w-full md:w-auto pb-[20px] md:pb-[50px] text-left">
          <p className="pt-[10px] md:pt-[25px]">
            <input
              type="checkbox"
              className="mr-2 accent-green-500"
              onChange={(e) => {
                e.target.style.accentColor = e.target.checked
                  ? "green"
                  : "#E5E5E5";
              }}
            />
            Remind me
          </p>
        </div>

        <p className="text-left text-[14px] md:text-[16px] font-normal">
          By creating an account, you agree to the{" "}
          <Link to="/terms" className="text-blue-600 underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
        </p>
        <button className="border-2 border-[#4C4898] bg-[#4C4898] text-white py-2 px-4 rounded-[10px] text-[18px] md:text-[20px] font-medium w-full md:w-[580px] h-[50px] md:h-[60px] text-center">
          <Link to="/signin"> Sign in </Link>
        </button>
        <Link to="/privacy" className="text-blue-600 underline mt-2 md:mt-0">
          Forget your password
        </Link>
        <p className="text-left text-[14px] md:text-[16px] font-normal">
          Don't have an account?{" "}
          <Link to="/terms" className="text-blue-600 underline">
            Sign up
          </Link>
        </p>
        <div className="flex flex-col md:flex-row items-center w-full justify-center gap-2 md:gap-4 mt-4 container">
          <hr className="w-[100px] md:w-[200px] h-[1px] md:h-[2px] border-2 border-darkgray" />
          <p className="font-bold text-[14px] md:text-[16px] text-[#2B3F58]">
            Or{" "}
          </p>
          <hr className="w-[100px] md:w-[200px] h-[1px] md:h-[2px] border-2 border-darkgrey" />
        </div>
        <p className="text-[#2B3F58] border-2 border-darkgrey rounded-[20px] md:rounded-[32px] px-[16px] md:px-[26px] py-[8px] md:py-[12px] flex gap-[5px] md:gap-[10px] justify-center w-full md:w-[600px] h-[40px] md:h-[44px] items-center">
          <img src={google} alt="flag" />
          Sign up with Google
        </p>
      </div>
    </div>
  );
};

export default Loginpg;
