import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaRegUserCircle, FaWindowClose } from "react-icons/fa";
import Button from "./Button";
import { CiSearch } from "react-icons/ci";
import { rooms } from "../constants/data";
import { icons } from "../constants/data";
import logo2 from "../assets/logo2.svg";
import man from "../assets/man.svg";
import { IoIosStar } from "react-icons/io";

// import cover from "../assets/cover.svg";

const Loglanding = () => {
  const [colorChange, setColorChange] = useState(false);
  const set = () => {
    if (window.scrollY >= 75) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", set);
  return (
    <div className="">
      <nav
        className={`h-[75px] fixed w-full z-[2] flex justify-center ${
          colorChange ? "bg-black" : "bg-none"
        }
`}
      >
        <div className="container flex justify-between items-center sm:gap-[15px]">
          <img src={logo} alt="logo" className="sm:hidden md:block" />
          {/* <img src={logo} alt="logo" className="block lg:hidden" /> */}

          <ul className="hidden lg:flex gap-[32px] text-white ">
            <li>
              <Link to="/">Reserve a space</Link>
            </li>
            <li>
              <Link to="/explore">Function as a host</Link>
            </li>
          </ul>
          <div className="relative inline-block border p-2 rounded-3xl bg-[#4C4989] border-[#4C4989] w-[100px]">
            <label htmlFor="reserve" className="flex items-center">
              <img src={man} alt="profile" className="w-8 h-8" />
            </label>
            <select
              name="reserve"
              id="reserve"
              className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer bg-[#4C4989] text-white leading-3"
            >
              <option value="One Bedroom" className="text-xs p-7">
                Handlling Bookings
              </option>
              <option value="Two Bedroom" className="text-xs">
                Favorite
              </option>
              <option value="Two Bedroom" className="text-xs">
                Message
              </option>
              <option value="Two Bedroom" className="text-xs">
                Logout
              </option>
            </select>
            <span className="absolute right-2 top-2 pointer-events-none text-white">
              &#9662;
            </span>
          </div>
        </div>
      </nav>

      <section className="text-center items-center flex flex-col pt-[180px] pb-[130px] bg-[url('/src/assets/cover.svg')] bg-cover bg-center h-auto">
        <div className="text-white">
          <h1 className="text-6xl leading-12">
            Find Your Perfect Shortlet <br />
            In Nigeria
          </h1>
          <p className="pt-[20px] pb-[10px]">
            Discover comfortable and affordable apartments in the heart of
            Nigeria's most vibrant cities
          </p>
        </div>
        <div className="items-center">
          <form className="text-black border border-white bg-white rounded-[20px] w-[800px] h-[60px]  pt-[10px] flex  gap-[15px] justify-center items-center">
            <div className="flex flex-col w-full">
              <label
                htmlFor="location"
                className="text-left mb-2 text-[12px] font-semibold text-[#2B3F58] border-none"
              >
                Location
              </label>
              <select
                name="location"
                id="location"
                className="bg-transparent border-none placeholder-gray-500 text-[10px] w-full text-[#2B3F58] "
              >
                <option value="Lagos">Select Location</option>
                <option value="Abeokuta" placeholder="Nigeria">
                  Abeokuta
                </option>
              </select>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="apartment"
                className="text-left mb-2 text-[12px] font-semibold text-[#2B3F58]"
              >
                Apartment Type
              </label>
              <select
                name="apartment"
                id="apartment"
                className="bg-transparent border-none placeholder-gray-500 text-[10px] w-full text-[#2B3F58]"
              >
                <option value="Studio">Select Type</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="host"
                className="text-left mb-2 text-[12px] font-semibold text-[#2B3F58]"
              >
                Function as a Host
              </label>
              <select
                name="host"
                id="host"
                className="bg-transparent border-none placeholder-gray-500 text-[10px] w-full text-[#2B3F58]"
              >
                <option value="Yes">Select Location</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="reserve"
                className="text-left mb-2 text-[12px] font-semibold text-[#2B3F58]"
              >
                Reserve a Space
              </label>
              <select
                name="reserve"
                id="reserve"
                className="bg-transparent border-none placeholder-gray-500 text-[10px] w-full"
              >
                <option value="One Bedroom">Select Location</option>
                <option value="Two Bedroom">Two Bedroom</option>
              </select>
            </div>
          </form>
        </div>
      </section>

      <div className="text-center items-center flex flex-col pt-[10px] pb-[50px] text-black">
        <h1 className="text-[2rem] leading-12 pt-[73px] text-[#2B3F58] font-semibold">
          Featured Accomodation
        </h1>
        <p className="pt-[5px] pb-[25px] text-[#2B3F58] text-[1.5rem]">
          Experience Comfort and Luxury in Everystay
        </p>
        <p className="text-[#2B3F58] border border-[#2B3F58] rounded-[30px] px-[26px] py-[12px] flex gap-[5px]">
          <CiSearch className="text-[#2B3F58]" />
          <b>Search</b> for an apartment, packages, or add-one
        </p>
      </div>

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
            <div>
              <p className="text-[#2B3F58] text-[1rem] font-[16px] text-center sm:text-left">
                {item.price}
              </p>
            </div>
          </div>
        ))}

        <Link
          to="/view more"
          className="flex justify-center sm:justify-end mt-4 col-span-1 sm:col-span-2 lg:col-span-3"
        >
          <Button text="View More" />
        </Link>
      </section>

      <section className="grid lg:grid-cols-2 container items-center gap-10 mb-[15px] ">
        <div className="text-center sm:text-left sm:order-1">
          <h1 className="font-bold font-7xl leading-12 text-[#2B3F58] lg:text-[32px] sm:text-[24px]">
            we do our best to ensure we provide{" "}
            <br className="hidden sm:block" />
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

        <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-[10px] text-[#2B3F58] mt-[40px] sm:mt-[75px] sm:gap-2 items-center sm:order-2 pb-[10px]">
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

      <section className="flex flex-col lg:grid lg:grid-cols-2 container items-center gap-10 p-4 lg:p-0 pt-[20px]">
        <div className="flex justify-center mb-8 lg:mb-0">
          <div
            className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-[450px]  shadow-2xl items-center"
          >
            <img
              src={logo2}
              alt="about us logo"
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="pb-[15px] text-[#2B3F58] font-bold text-xl lg:text-[24px]">
            About Us
          </h1>
          <p className="pb-[15px] text-[#2B3F58] text-base lg:text-[12px] sm:text-[10px]">
            Welcome to Shortment Service Apartment, where comfort meets
            convenience. Nestled in the heart of Nigeria, our service apartments
            offer a perfect blend of home-like comfort and modern amenities,
            tailored to meet the needs of both short-term and long-term guests.
            At Shortment, we believe in providing a welcoming and personalized
            experience. Whether you're traveling for business, leisure, or
            relocating, our team is dedicated to making your stay comfortable
            and memorable. With a focus on exceptional service and attention to
            detail, we strive to exceed your expectations.
          </p>
          <h1 className="pb-[15px] text-[#2B3F58] font-bold text-xl lg:text-[24px]">
            Our Apartments
          </h1>
          <p className="pb-[15px] text-[#2B3F58] text-base lg:text-[12px]">
            Our fully furnished apartments are designed with you in mind. Each
            unit features modern décor, spacious living areas, fully equipped
            kitchens, and high-speed internet as well as a private workspace.
            Enjoy the flexibility of a self-catering apartment with the added
            benefits of hotel-like services, including housekeeping, 24/7
            support, security, and more.
          </p>
        </div>
      </section>

      <section className="text-center items-center flex flex-col pt-[10px] pb-[50px]">
        <div>
          <h1 className="pb-[15px] pt-[20px] font-bold text-[#2B3F58]">
            Testimonies
          </h1>
          <p className="text-[#2B3F58] text-[14px]">
            "Great value for you money! our apartments are always exactly what
            we showcase online"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 container items-center gap-10 pt-[30px]">
          <div
            className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
          >
            <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
              Adeola John
            </h1>
            <p className="pb-[25px]  text-[#2B3F58] text-[14px] leading-6">
              I had an incredible stay at Shortment Service Apartment. The
              apartment was clean, modern and had all the amenities I needed.
              Highly recommend it for both short and long stays!
            </p>
            <br />
            <p className="ml-auto text-[12px] text-[#2B3F58] flex gap-2 items-center">
              2nd March 2024 <IoIosStar className="text-[#FFA92C]" />{" "}
              <IoIosStar className="text-[#FFA92C]" />{" "}
              <IoIosStar className="text-[#FFA92C]" />
            </p>
          </div>
          <div
            className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
          >
            <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
              Julius Jimmy
            </h1>
            <p className="pb-[25px]  text-[#2B3F58] text-[14px] leading-6">
              Fantastic location and excellent service! The apartment was
              spacious and comfortable, making me feel right at home. The nearby
              restaurants and shops were an added bonus. Will definitely stay
              here again on my next visit.
            </p>
            <p className="ml-auto text-[12px] text-[#2B3F58] flex items-center gap-2">
              13th April 2024 <IoIosStar className="text-[#FFA92C]" />{" "}
              <IoIosStar className="text-[#FFA92C]" />{" "}
              <IoIosStar className="text-[#FFA92C]" />
            </p>
          </div>
          <div
            className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
          >
            <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
              Andrew Blessing
            </h1>
            <p className="pb-[25px]  text-[#2B3F58] text-[14px] leading-6">
              One of the best service apartments I've ever stayed in. The fully
              equipped kitchen and laundry facilities were a lifesaver. The view
              from the balcony was stunning, and the gym was well-maintained.
              Perfect for business travelers.
            </p>
            <p className="ml-auto text-[12px] text-[#2B3F58] flex items-center gap-2">
              13th April 2024 <IoIosStar className="text-[#FFA92C]" />{" "}
              <IoIosStar className="text-[#FFA92C]" />{" "}
              <IoIosStar className="text-[#FFA92C]" />
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 container items-center gap-10 pt-[30px] bg-[url('/src/assets/room7.svg')] bg-cover bg-center h-auto md:h-screen">
        <div
          className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
       w-full sm:w-[300px] sm:h-[60px] md:w-[445px] md:h-[315px] shadow-2xl items-center p-[30px] container"
        >
          <p className="pb-[5px]  text-[#2B3F58] sm:text-[10px] md:text-[14px] sm:leading-4 md:leading-6 text-center">
            Increasing earnings on Shortment
          </p>
          <h1 className="pb-[20px] pt-[20px] font-bold text-[#2B3F58] text-[16px] sm:text-[14px] md:text-[18px] text-center">
            Function as a host
          </h1>
          <p className="pb-[20px]  text-[#2B3F58] text-[12px] sm:text-[10px] md:text-[14px] leading-5 sm:leading-4 md:leading-6 text-center">
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
       w-full sm:w-[300px] sm:h-[60px] md:w-[445px] md:h-[315px] shadow-2xl items-center p-[30px] sm:p-[30px] container"
        >
          <p className="pb-[5px] text-[#2B3F58] text-[12px] sm:text-[10px] md:text-[14px] sm:leading-4 md:leading-6 text-center">
            We look forward to welcoming you
          </p>
          <h1 className="pb-[20px] pt-[20px] font-bold text-[#2B3F58] text-[16px] sm:text-[14px] md:text-[18px] text-center">
            Reserve a space
          </h1>
          <p className="pb-[20px] text-[#2B3F58] text-[12px] sm:text-[10px] md:text-[14px] leading-5 sm:leading-4 md:leading-6 text-center">
            Thank you for choosing shortment service
            <br /> apartment for your upcoming stay. We are <br />
            delighed to assist you with your reservation
          </p>
          <Link to="/view more" className="">
            <Button text="Get Started" />
          </Link>
        </div>
      </section>

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
    </div>
  );
};

export default Loglanding;
