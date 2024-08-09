import { rooms } from "../constants/data";
import Button from "./Button";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="grid grid-cols-1 gap-[20px] text-[#2B3F58] m-[20px] sm:grid-cols-2 lg:grid-cols-3 sm:gap-[30px] lg:gap-[41px] sm:m-[50px] lg:m-[75px] container">
      {rooms.map((item, index) => (
        <div key={index} className="flex flex-col">
          <img
            src={item.image}
            alt=""
            className="pb-[20px] sm:pb-[30px] lg:pb-[37px]"
          />

          <p className="font-bold text-[#2B3F58] leading-[27px] text-center sm:text-left">
            {item.header}
          </p>
          <p className="text-[#2B3F58] text-[1rem] font-[16px] pb-[10px] pt-[8px] text-center sm:text-left">
            {item.Location}
          </p>
          <p className="text-[#2B3F58] text-[1rem] font-[16px] pb-[10px] pt-[8px] text-center sm:text-left">
            {item.amenities}
          </p>
          <p className="text-[#2B3F58] text-[1rem] font-[16px] text-center sm:text-left">
            {item.price}
          </p>
        </div>
      ))}

      <Link
        to="/view more"
        className="flex justify-center sm:justify-end mt-4 col-span-1 sm:col-span-2 lg:col-span-3"
      >
        <Button text="View More" />
      </Link>
    </section>
  );
};

export default Features;
