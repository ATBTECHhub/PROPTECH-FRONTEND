// import frame1 from "../assets/frame1.svg"
// import frame2 from "../assets/frame2.svg"
// import frame3 from "../assets/frame3.svg"
// import frame4 from "../assets/frame4.svg"
// import frame5 from "../assets/frame5.svg"
// import frame6 from "../assets/frame6.svg"
import { rooms } from "../constants/data";

const Features = () => {
  return (
    <section className="grid grid-cols-3 gap-[41px] text-[#2B3F58] m-[75px] container">
      {rooms.map((item, index) => (
        <div key={index} className="flex flex-col">
          {item.image}
          {item.header}
          {item.location}
          {item.amenities}
          {item.price}
        </div>
      ))}
    </section>
  );
};

export default Features;
