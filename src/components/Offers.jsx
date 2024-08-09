import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Offers = () => {
  return (
    <section className="grid grid-cols-2 container items-center gap-10 pt-[30px] bg-[url('/src/assets/room7.svg')] bg-cover bg-center h-screen">
      <div
        className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
       w-[445px] h-[315px] shadow-2xl items-center p-[30px] container"
      >
        <p className="pb-[5px]  text-[#2B3F58] text-[14px] leading-6">
          Increasing earnings on Shortment
        </p>
        <h1 className="pb-[30px] pt-[30px] font-bold text-[#2B3F58]">
          Function as a host
        </h1>
        <p className="pb-[25px]  text-[#2B3F58] text-[14px] leading-6">
          Our agents will verify your apartments to ascertain
          <br />
          and ensure it is what you showcased it to be
          <br /> before it can be approved
        </p>
        <Link to="/view more" className="">
          <Button text="Get Started" />
        </Link>
      </div>

      <div
        className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
       w-[445px] h-[315px] shadow-2xl items-center p-[30px] container"
      >
        <p className="pb-[5px]  text-[#2B3F58] text-[14px] leading-6">
          We look forward to welcoming you
        </p>
        <h1 className="pb-[30px] pt-[30px] font-bold text-[#2B3F58]">
          Reserve a space
        </h1>
        <p className="pb-[25px]  text-[#2B3F58] text-[14px] leading-6">
          Thank you for choosing shortment service
          <br /> apartment for your upcoming stay. We are <br />
          delighed to assist you with your reservation
        </p>
        <Link to="/view more" className="">
          <Button text="Get Started" />
        </Link>
      </div>
    </section>
  );
};

export default Offers;
