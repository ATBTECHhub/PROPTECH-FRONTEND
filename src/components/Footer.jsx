import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
// grid grid-cols-1 md:grid-cols-6 container items-center gap-5 text-white py-10 px-5
const Footer = () => {
  return (
    <section className="bg-[#12082D] blue-500 w-full">
      <div className="flex gap-[33px] text-white container">
        <p className="text-[14px]">
          looking forward to a wonderful stay at Shortment Service Apartment
        </p>
        <div className="flex gap-[33px]">
          <ul className="leading-6">
            <li className="text-[16px]">Contact Us</li>
            <li className="text-[12px]">
              <Link to="/">Contact Us</Link>
            </li>

            <li className="text-[12px]">
              <Link to="/">+2349069994348</Link>
            </li>
            <li className="text-[12px]">
              <Link to="/">Facilities</Link>
            </li>
          </ul>

          <ul className="leading-6">
            <li className="text-base">What we offer</li>
            <li className="text-[12px]">
              <Link>Reserve a space</Link>
            </li>
            <li className="text-[12px]">
              <Link>Function as a host</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-[33px] ">
          <ul className="leading-6">
            <li className="text-base">Help</li>
            <li className="text-[12px]">
              <Link>About us</Link>
            </li>
            <li className="text-[12px]">
              <Link>Refund Policy</Link>
            </li>
            <li className="text-[12px]">
              <Link>Privacy Policy</Link>
            </li>
            <li className="text-[12px]">
              <Link>FAQs</Link>
            </li>
          </ul>

          <ul className="leading-6">
            <li className="text-base">Social media</li>
            <li className="text-[12px]">
              <Link>Facebook</Link>
            </li>
            <li className="text-[12px]">
              <Link>Twitter</Link>
            </li>
            <li className="text-[12px]">
              <Link>Instagram</Link>
            </li>
            <li className="text-[12px]">
              <Link>Linkedin</Link>
            </li>
          </ul>
        </div>

        <ul className="leading-6">
          <li className="text-[16px]">Newsletter</li>
          <li className="text-[12px]">
            Kindly subscribe to our news letter to get latest deals on our rooms
            and vacation discounts.
          </li>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full h-[50px] pr-[120px] pl-4 p-2 border border-gray-300 rounded-md text-black"
            />
            <button className="absolute right-[5px] top-1/2 transform -translate-y-1/2 h-[40px] px-4 bg-[#4C4989] text-white rounded-md">
              Subscribe
            </button>
          </div>
        </ul>
      </div>

      <p className="col-span-1 md:col-span-6 text-right mt-10 whitespace-nowrap w-full container text-[14px] text-white">
        copyright © 2024 Shortment.com TM. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
