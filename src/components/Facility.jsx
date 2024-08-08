import { Link } from "react-router-dom";
import Button from "./Button";
import { icons } from "../constants/data";

const Facility = () => {
  return (
    <section className="grid grid-cols-2 container items-center gap-10">
      <div>
        <h1 className="font-bold font-7xl leading-12 text-[#2B3F58] text-[2rem]">
          we do our best to ensure we provide <br />
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

      <section className="grid grid-cols-3 gap-[130px] text-[#2B3F58] m-[75px] items-center">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-white border-[4px] rounded-[10px] bg-white w-[150px] h-[170px] shadow-2xl items-center"
          >
            <img src={item.image} alt="" className="p-[40px]" />

            <p className="text-[#2B3F58] text-[1rem] font-[16px] pb-[10px]">
              {item.content}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Facility;
