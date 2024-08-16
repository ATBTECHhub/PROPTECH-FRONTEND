import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
// grid grid-cols-1 md:grid-cols-6 container items-center gap-5 text-white py-10 px-5
const Footer = () => {
  return (
    <div className="bg-[#12082D] blue-500 w-full">
      <section className="grid md:grid-cols-6 grid-cols-1 text-white items-center gap-5 container">
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
              className="w-full h-[50px] pr-[120px] pl-4 p-2 border border-gray-300 rounded-md text-black"
            />
            <button className="absolute right-[5px] top-1/2 transform -translate-y-1/2 h-[40px] px-4 bg-[#4C4989] text-white rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <p className="col-span-1 md:col-span-6 text-right mt-10 whitespace-nowrap w-full container text-[14px] text-white">
        copyright © 2024 Shortment.com TM. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
