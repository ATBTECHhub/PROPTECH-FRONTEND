import React from "react";
import logo from "../assets/logo.svg";
import flag from "../assets/flag.svg";
import mark from "../assets/mark.svg";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Loginpg = () => {
  return (
    <div>
      <nav className="bg-[#4C4989] flex justify-center h-[80px]">
        <div className="container flex justify-between items-center">
          <img src={logo} alt="logo" className="" />
          <div className="flex gap-[50px]">
            <img src={flag} alt="flag" />
            <img src={mark} alt="icon" />
          </div>
        </div>
      </nav>

      <div className="items-center flex flex-col text-center ">
        <h2 className="text-xl font-semibold text-[#2B3F58] pt-[59px] m-[15px]">
          sign in or create an account
        </h2>
      </div>
      <div className="container flex flex-col items-center border-[5px] rounded-[50px] border-[#E5E5E5] h-[900px] md:w-[700px] mt-[10px] pt-[15px] bg-white gap-[16px]">
        <form className="flex flex-col w-[600px] text-left gap-0">
          <label for="Pname" className="text-[#2B3F58] text-[24px] font-normal">
            Email
          </label>
          <br />
          <input
            tpye="text"
            placeholder="Enter your email"
            className="w-full h-[80px] border border-[#666666] rounded-[12px] pl-[24px] text-[14px] mt-0"
          />
          <br />

          <label
            for="email"
            className="text-[#2B3F58] text-[24px] font-normal flex"
          >
            Password <FaRegEyeSlash /> Hide
          </label>
          <br />
          <input
            tpye="text"
            placeholder="Enter your password"
            className="w-full h-[80px] border border-[#666666] rounded-[12px] pl-[24px] text-[14px] mt-0"
          />
          <br />
        </form>

        <div className="items-left flex w-auto pb-[50px] ">
          <p className="pt-[25x]">
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

        <p className="text-left mt-0 text-[16px] font-normal item-left">
          By creating an account, you agree to the{" "}
          <Link to="/terms" className="text-blue-600 underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
        </p>
        <button className="border-2 border-[#4C4898] bg-[#4C4898] text-white py-2 px-4 rounded-[10px] text-[20px] font-medium w-[580px] h-[80px] text-center">
          <Link to="/signin"> Sign in </Link>
        </button>
        <Link to="/privacy" className="text-blue-600 underline">
          Forget your password
        </Link>
        <p className="text-left mt-0 text-[16px] font-normal item-left">
          Don't have an account?{" "}
          <Link to="/terms" className="text-blue-600 underline">
            Sign up
          </Link>
        </p>
        <div className="flex items-center w-full justify-center gap-4 mt-4 container">
          <hr className="w-[200px] h-[2px] border-[#666666]" />
          <p className="font-bold text-[16px] text-[#2B3F58]">
            or continue with{" "}
          </p>
          <hr className="w-[200px] h-[2px] border-[#666666]" />
        </div>

        <div className="flex gap-[40px]">
          <FaFacebook className="text-blue-700" />{" "}
          <FaGoogle className="text-red-500" />{" "}
          <FaTwitter className="text-blue-700" />
        </div>
      </div>

      <div className="bg-[#12082D] blue-500 w-full">
        <section className="grid grid-cols-1 md:grid-cols-6 container items-center gap-10 text-white py-10 px-5">
          <div className="col-span-1 md:col-span-2 font-[16px] leading-6">
            <p className="text-[16px] font-bold">
              looking forward to a wonderful stay at Shortment Service Apartment
            </p>
          </div>

          <div className="leading-6">
            <h2 className="text-[16px] font-bold">Quick links</h2>
            <p className="text-[14px]">Explore</p>
            <p className="text-[14px]">Contact Us</p>
            <p className="text-[14px]">Facilities</p>
          </div>

          <div className="leading-6">
            <h2 clasName="text-[16px] font-bold">What we offer</h2>
            <p className="text-[14px]">Reserve a space</p>
            <p className="text-[14px]">Function as a host</p>
          </div>

          <div>
            <h2 className="font-bold text-[16px]">Help</h2>
            <p clasName="text-[14px]">About Us</p>
            <p className="text-[14px]">Refund Policy</p>
            <p className="text-[14px]">Privacy Policy</p>
            <p className="text-[14px]">FAQs</p>
          </div>

          <div>
            <h2 className="font-bold text-[16px]">Social media</h2>
            <p className="text-[14px]">Facebook</p>
            <p className="text-[14px]">Twitter</p>
            <p className="text-[14px]">Instagram</p>
            <p className="text-[14px]">LinkedIn</p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="font-bold text-[16px]">Newsletter</h2>
            <p className="text-[14px]">
              Kindly subscribe to our news letter to get
              <br /> latest deals on our rooms and vacation
              <br /> discounts.
            </p>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-[50px] pr-[120px] pl-4 p-2 border border-gray-300 rounded-md"
              />
              <button className="absolute right-[5px] top-1/2 transform -translate-y-1/2 h-[40px] px-4 bg-[#4C4989] text-white rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <p className="text-white col-span-1 md:col-span-6 text-right mt-10 whitespace-nowrap w-full container text-[14px]">
          copyright © 2024 Shortment.com TM. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Loginpg;
