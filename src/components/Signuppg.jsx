import React from "react";
import logos from "../assets/logos2.svg";
import logo from "../assets/logo.svg";
import mark from "../assets/mark.svg";
import flag from "../assets/flag.svg";
import quest from "../assets/quest.svg";
import google from "../assets/google.svg";
import { Link } from "react-router-dom";
import captcha from "../assets/captcha.svg";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Signuppg = () => {
  return (
    <section>
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

      <div className="items-center flex flex-col text-center px-4 sm:px-2">
        <h2 className="text-[1.2rem] sm:text-[1rem] font-bold text-[#2B3F58] pb-[21px] pt-[21px]">
          Sign up for free to reserve your apartment
        </h2>
      </div>

      <div className="container flex flex-col items-center border-8 sm:border-4 rounded-[50px] sm:rounded-[30px] border-darkgrey h-auto sm:w-[550px] mt-[10px] p-[15px] bg-white gap-[16px] m-[15px] px-4 sm:px-2">
        <form className="flex flex-col w-full sm:w-full text-left gap-2 sm:gap-1">
          <label
            for="Pname"
            className="text-[#2B3F58] text-[16px] sm:text-[14px] font-normal"
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your profile name"
            className="w-full h-[45px] sm:h-[40px] border-2 sm:border-[1.5px] border-darkgray rounded-[10px] sm:rounded-[8px] pl-[12px] sm:pl-[8px] text-[14px] sm:text-[12px]"
          />
          <label
            for="Pname"
            className="text-[#2B3F58] text-[16px] sm:text-[14px] font-normal mt-4"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-[45px] sm:h-[40px] border-2 sm:border-[1.5px] border-darkgray rounded-[10px] sm:rounded-[8px] pl-[12px] sm:pl-[8px] text-[14px] sm:text-[12px]"
          />
          <label
            for="Pname"
            className="text-[#2B3F58] text-[16px] sm:text-[14px] font-normal mt-4"
          >
            Phone number
          </label>
          <input
            type="number"
            placeholder="+234"
            className="w-full h-[45px] sm:h-[40px] border-2 sm:border-[1.5px] border-darkgray rounded-[10px] sm:rounded-[8px] pl-[12px] sm:pl-[8px] text-[14px] sm:text-[12px]"
          />
          <label
            for="password"
            className="text-[#2B3F58] text-[16px] sm:text-[14px] font-normal flex justify-between mt-4"
          >
            Password
            <span className="flex items-center ml-auto gap-3">
              <FaRegEyeSlash className="text-[#666666]" />
              Hide
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter your password"
            className="w-full h-[45px] sm:h-[40px] border-2 sm:border-[1.5px] border-darkgray rounded-[10px] sm:rounded-[8px] pl-[12px] sm:pl-[8px] text-[14px] sm:text-[12px]"
          />
          <label
            for="email"
            className="text-[#2B3F58] text-[16px] sm:text-[14px] font-normal flex justify-between mt-4"
          >
            Confirm Password
            <span className="flex items-center ml-auto gap-3">
              <FaRegEyeSlash className="text-[#666666]" />
              Hide
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter your password"
            className="w-full h-[45px] sm:h-[40px] border-2 sm:border-[1.5px] border-darkgray rounded-[10px] sm:rounded-[8px] pl-[12px] sm:pl-[8px] text-[14px] sm:text-[12px]"
          />
        </form>

        <p className="text-left mt-2 text-[14px] sm:text-[12px] font-normal">
          By creating an account, you agree to the{" "}
          <Link to="/terms" className="text-blue-600 underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
        </p>

        <div className="w-[250px] pb-[30px] sm:pb-[20px] text-left">
          <p className="flex items-center border-2 sm:border-[1.5px] border-[#333333] rounded-[10px] sm:rounded-[8px] p-2 sm:p-1">
            <input
              type="checkbox"
              className="mr-2 accent-green-500"
              onChange={(e) => {
                e.target.style.accentColor = e.target.checked
                  ? "green"
                  : "#E5E5E5";
              }}
            />
            I am not a robot
            <img
              src={captcha}
              alt="captcha"
              className="ml-[20px] sm:ml-[10px]"
            />
          </p>
        </div>

        <button className="border-2 sm:border-[1.5px] border-[#4C4898] bg-[#4C4898] text-white py-2 px-4 rounded-[10px] text-[18px] sm:text-[16px] font-medium w-full sm:w-[450px] h-[60px] sm:h-[50px] text-center">
          Sign Up
        </button>

        <div className="flex items-center w-full justify-center gap-2 sm:gap-1 mt-4">
          <hr className="w-[80px] sm:w-[60px] h-[2px] border-2 sm:border-[1.5px] border-darkgrey" />
          <p className="font-bold text-[16px] sm:text-[14px] text-[#2B3F58]">
            Or
          </p>
          <hr className="w-[80px] sm:w-[60px] h-[2px] border-2 sm:border-[1.5px] border-darkgrey" />
        </div>

        <p className="text-[#2B3F58] border-2 sm:border-[1.5px] border-darkgrey rounded-[10px] sm:rounded-[8px] px-[16px] py-[8px] flex gap-[10px] justify-center w-full sm:w-full h-[40px] sm:h-[35px] items-center">
          <img src={google} alt="flag" />
          Sign up with Google
        </p>

        <p className="text-[14px] sm:text-[12px] text-[#2B3F58] pt-[10px] pb-[15px]">
          Already have an account?
          <span className="color-[#4C4989]">
            <u> Sign in</u>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Signuppg;
