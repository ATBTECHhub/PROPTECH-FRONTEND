import { rooms } from "../constants/data";
import Button from "./Button";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="gap-[20px] sm:gap-[30px] lg:gap-[41px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:m-[75px] mx-auto my-[5px] items-center justify-center sm:my-[50px] text-[#2B3F58] container">
      {rooms.map((item, index) => (
        <div key={index} className="flex flex-col">
          <img
            src={item.image}
            alt=""
            className="pb-[20px] sm:pb-[30px] lg:pb-[37px]"
          />

          <p className="font-bold text-[#2B3F58] text-center sm:text-left leading-[27px]">
            {item.header}
          </p>
          <p className="pt-[8px] pb-[10px] font-[16px] text-[#2B3F58] text-[1rem] text-center sm:text-left">
            {item.Location}
          </p>
          <p className="pt-[8px] pb-[10px] font-[16px] text-[#2B3F58] text-[1rem] text-center sm:text-left">
            {item.amenities}
          </p>
          <p className="font-[16px] text-[#2B3F58] text-[1rem] text-center sm:text-left">
            {item.price}
          </p>
        </div>
      ))}

      <Link
        to="/view more"
        className="flex justify-center sm:justify-end col-span-1 sm:col-span-2 lg:col-span-3 mt-4"
      >
        <Button text="View More" />
      </Link>
    </section>
  );
};

export default Features;
