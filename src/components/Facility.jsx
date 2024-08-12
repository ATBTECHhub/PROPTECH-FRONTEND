import { Link } from "react-router-dom";
import Button from "./Button";
import { icons } from "../constants/data";

const Facility = () => {
  return (
    <section className="grid lg:grid-cols-2 container items-center gap-10 mb-[15px] ">
      <div className="text-center sm:text-left sm:order-1">
        <h1 className="font-bold font-7xl leading-12 text-[#2B3F58] lg:text-[32px] sm:text-[24px]">
          we do our best to ensure we provide <br className="hidden sm:block" />
          necessary facilities for you
        </h1>
        <p className="leading-[24px] text-[#2B3F58] text-[1rem] font-[16px] pb-[25px] pt-[10px]">
          Discover your ideal apartment: Find your perfect stay at Shortmennt
          Service Apartments
        </p>
        <Link to="/signup">
          <Button text="Contact Us" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-[10px] text-[#2B3F58] mt-[40px] sm:mt-[75px] items-center sm:order-2 pb-[10px]">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-white border-[4px] rounded-[10px] bg-white sm:w-[150px] h-[170px] shadow-2xl items-center mx-auto sm:m-[15px]"
          >
            <img src={item.image} alt="" className="p-[40px]" />

            <p className="text-[#2B3F58] sm:text-[0.8rem] font-[16px] pb-[10px]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facility;
