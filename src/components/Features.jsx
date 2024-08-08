import { rooms } from "../constants/data";
import Button from "./Button";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="grid grid-cols-3 gap-[41px] text-[#2B3F58] m-[75px] container">
      {rooms.map((item, index) => (
        <div key={index} className="flex flex-col">
          <img src={item.image} alt="" className="pb-[37px]" />

          <p className="font-bold text-[#2B3F58] leading-[27px]">
            {item.header}
          </p>
          <p className="text-[#2B3F58] text-[1rem] font-[16px] pb-[25px] pt-[10px]">
            {item.Location}
          </p>
          <p className="text-[#2B3F58] text-[1rem] font-[16px] pb-[10px] pt-[8px]">
            {item.amenities}
          </p>
          <p className="text-[#2B3F58] text-[1rem] font-[16px]">{item.price}</p>
        </div>
      ))}

      <Link to="/view more" className="col-span-3 flex justify-end mt-4">
        <Button text="View More" />
      </Link>
    </section>
  );
};

export default Features;
