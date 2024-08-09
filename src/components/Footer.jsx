import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="bg-[#5a4885] blue-500 w-full">
      <section className="grid grid-cols-6 container items-center gap-10 text-white">
        <div className="font-[16px] leading-6">
          <p>
            looking forward to a wonderful stay at Shortment Service Apartment
          </p>
        </div>

        <div>
          <h2 className="text-[16px]">Quick links</h2>
          <p className="leading-[21px] text-[14px]">Explore</p>
          <p className="">Contact Us</p>
          <p className="">Facilities</p>
        </div>

        <div>
          <h2>What we offer</h2>
          <p>Reserve a space</p>
          <p>Function as a host</p>
        </div>

        <div>
          <h2>Help</h2>
          <p>About Us</p>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </div>

        <div>
          <h2>Social media</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>

        <div>
          <h2>Newsletter</h2>
          <p>
            Kindly subscribe to our news letter to get
            <br /> latest deals on our rooms and vacation
            <br /> discount
          </p>
          <div className="relative w-full max-w-xs mx-auto">
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

        <p className="col-start-4 text-right mt-10 whitespace-nowrap w-full container">
          copyright © 2024 Shortment.com TM. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default Footer;
