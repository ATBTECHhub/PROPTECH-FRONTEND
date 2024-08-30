import React from "react";
import { Link } from "react-router-dom";
import logos from "../assets/logos2.svg";
import map from "../assets/map.svg";
import man from "../assets/man.svg";
import { CiSearch } from "react-icons/ci";
import { rooms, stay } from "../constants/data";
import Button from "./Button";

const Apartment = () => {
  return (
    <section>
      <nav
        className="h-[75px] fixed w-full z-[2] flex justify-cente bg-white border-b-[3px]
      "
      >
        <div className="container flex justify-between items-center sm:gap-[15px]">
          <img src={logos} alt="logo" className="sm:hidden md:block" />
          {/* <img src={logo} alt="logo" className="block lg:hidden" /> */}

          <ul className="hidden lg:flex gap-[32px] text-[#2B3F58] ">
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
              className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer bg-[#4C4989] text-white leading-3 p-2"
            >
              <option value="One Bedroom" className="text-xs py-2 px-4">
                Handlling Bookings
              </option>
              <option value="Two Bedroom" className="text-xs py-2 px-4">
                Favorite
              </option>
              <option value="Two Bedroom" className="text-xs py-2 px-4">
                Message
              </option>
              <option value="Two Bedroom" className="text-xs py-2 px-4">
                Logout
              </option>
            </select>
            <span className="absolute right-2 top-2 pointer-events-none text-white">
              &#9662;
            </span>
          </div>
        </div>
      </nav>

      <div className="text-center items-center flex flex-col pt-[100px] pb-[50px] text-[#2B3F58]">
        <h1 className="text-[1.2rem] md:text-[2rem] leading-12 pt-[30px] md:pt-[73px] text-[#2B3F58] font-bold">
          Vacant apartments found in Lagos
        </h1>
        <p className="pt-[5px] pb-[25px] text-[#2B3F58] text-[0.9rem] md:text-[1.5rem]">
          Experience Comfort and Luxury in Every stay
        </p>
        <p className="text-[#2B3F58] border border-[#2B3F58] md:rounded-[30px] rounded-[10px] md:px-[26px] px-[16px] py-[12px] flex gap-[5px] w-full md:w-auto">
          <CiSearch className="text-[#2B3F58]" />
          <b>Search</b>
          <span className="hidden md:inline">
            for an apartment, packages, or add-one
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[20px] text-[#2B3F58] m-[5px] sm:grid-cols-2 lg:grid-cols-3 sm:gap-[30px] lg:gap-[41px] sm:m-[50px] lg:m-[75px] container">
        {stay.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={item.image}
              alt=""
              className="pb-[20px] sm:pb-[30px] lg:pb-[37px]"
            />

            <ul>
              <Link to="/apartments">
                <li className="font-bold text-[#2B3F58] leading-[27px] text-center sm:text-left">
                  {item.header}
                </li>
              </Link>
            </ul>
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

        <div className="text-center items-center flex flex-col pt-[10px] pb-[10px] text-[#2B3F58]">
          <button className="border-[1px] border-[#2B3F58] text-[#2B3F58] py-2 px-4 rounded-[10px] text-[14px] md:text-[20px] font-medium w-[100px] md:w-[250px] h-[40px] md:h-[50px] text-center">
            <Link to="/lagos apartments">More Results</Link>
          </button>
        </div>
      </div>

      <div className="text-center items-center flex flex-col pt-[10px] pb-[10px] text-[#2B3F58]">
        <h1 className="text-[1.2rem] md:text-[20px] leading-12 pt-[10px] md:pt-[10px] text-[#2B3F58] font-bold">
          Site of attractions in Lagos
        </h1>
        <p className="pt-[5px] pb-[25px] text-[#2B3F58] text-[0.7rem] md:text-[1rem]">
          Lagos Nigeria is a vibrant city with numerous site of attractions.
          Here are some notable ones:
        </p>

        <section className="text-center items-center flex flex-col pt-[10px] pb-[50px]">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 container items-center gap-10 pt-[30px]">
              <div
                className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
              >
                <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
                  Lekki Conservation centre
                </h1>
                <p className="pb-[25px] text-[#2B3F58] text-[14px] leading-6">
                  A natural reserve offering a conopy walkway, nature trails and
                  the chance to see wildlife in their natural habitat.
                </p>
              </div>

              <div
                className="md:flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
              >
                <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
                  Nike Art Gallery
                </h1>
                <p className="pb-[25px] text-[#2B3F58] text-[14px] leading-6">
                  One of the largest art gallery in West Africa, showcasing
                  traditional and contemporary African art.
                </p>
              </div>

              <div
                className="md:flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
              >
                <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
                  Tarkwa Bay Beach
                </h1>
                <p className="pb-[25px] text-[#2B3F58] text-[14px] leading-6">
                  A popular beach accessible by boat, known for it's calm waters
                  and beautiful screnery.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[10px] m-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                <div
                  className="md:flex flex-col border-white border-[10px] rounded-[30px] bg-white
      shadow-2xl items-center p-[10px] w-full max-w-[400px]"
                >
                  <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
                    Eko Atlantic City
                  </h1>
                  <p className="pb-[25px] text-[#2B3F58] text-[14px] leading-6">
                    A planned city built on a land reclaimed from the Atlantic
                    Ocean, featuring modern infrastructure and development.
                  </p>
                </div>

                <div
                  className="hidden md:flex flex-col border-white border-[10px] rounded-[30px] bg-white
      shadow-2xl items-center p-[10px] w-full max-w-[400px]"
                >
                  <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
                    Ikeja City Mall
                  </h1>
                  <p className="pb-[25px] text-[#2B3F58] text-[14px] leading-6">
                    A large shopping mall with a variety of retail stores,
                    eateries, and entertainment options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center m-[30px]">
        <img src={map} alt="logo" />
      </div>
      <section className="bg-[#12082D] blue-500 w-full">
        <div className="flex gap-[33px] text-white container">
          <p className="text-[14px]">
            looking forward to a wonderful stay at Shortment Service Apartment
          </p>
          <div className="flex gap-[33px]">
            <ul className="leading-6">
              <li className="text-[16px]">Contact Us</li>
              <li className="text-[12px]">
                <Link to="/">Contact Us</Link>
              </li>

              <li className="text-[12px]">
                <Link to="/">+2349069994348</Link>
              </li>
              <li className="text-[12px]">
                <Link to="/">Facilities</Link>
              </li>
            </ul>

            <ul className="leading-6">
              <li className="text-base">What we offer</li>
              <li className="text-[12px]">
                <Link>Reserve a space</Link>
              </li>
              <li className="text-[12px]">
                <Link>Function as a host</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-[33px] ">
            <ul className="leading-6">
              <li className="text-base">Help</li>
              <li className="text-[12px]">
                <Link>About us</Link>
              </li>
              <li className="text-[12px]">
                <Link>Refund Policy</Link>
              </li>
              <li className="text-[12px]">
                <Link>Privacy Policy</Link>
              </li>
              <li className="text-[12px]">
                <Link>FAQs</Link>
              </li>
            </ul>

            <ul className="leading-6">
              <li className="text-base">Social media</li>
              <li className="text-[12px]">
                <Link>Facebook</Link>
              </li>
              <li className="text-[12px]">
                <Link>Twitter</Link>
              </li>
              <li className="text-[12px]">
                <Link>Instagram</Link>
              </li>
              <li className="text-[12px]">
                <Link>Linkedin</Link>
              </li>
            </ul>
          </div>

          <ul className="leading-6">
            <li className="text-[16px]">Newsletter</li>
            <li className="text-[12px]">
              Kindly subscribe to our news letter to get latest deals on our
              rooms and vacation discounts.
            </li>

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
          </ul>
        </div>

        <p className="col-span-1 md:col-span-6 text-right mt-10 whitespace-nowrap w-full container text-[14px] text-white">
          copyright © 2024 Shortment.com TM. All rights reserved.
        </p>
      </section>
    </section>
  );
};

export default Apartment;
