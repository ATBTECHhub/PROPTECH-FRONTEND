import React from "react";
import { Link } from "react-router-dom";
import logos from "../assets/logos2.svg";
import logon from "../assets/logo3.svg";
import compo1 from "../assets/compo1.svg";
import compo2 from "../assets/compo2.svg";
import compo3 from "../assets/compo3.svg";
import pool from "../assets/pool.svg";
import secure from "../assets/secure.svg";
import Component from "../assets/Component.svg";
import man from "../assets/man.svg";
import my1 from "../assets/my1.svg";
import my2 from "../assets/my2.svg";
import my3 from "../assets/my3.svg";
import my4 from "../assets/my4.svg";
import ico1 from "../assets/ico1.svg";
import ico2 from "../assets/ico2.svg";
import lag from "../assets/lag.svg";
import signal from "../assets/signal.svg";
import map1 from "../assets/map1.svg";
import { FaArrowLeft } from "react-icons/fa";
import { aparts } from "../constants/data";

const Apartment1 = () => {
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

      <div className="text-left ml-[224px] flex flex-col pt-[30px] pb-[13px] text-[#2B3F58]">
        <h1 className="text-[1.2rem] md:text-[2rem] leading-12 pt-[10px] md:pt-[73px] text-[#2B3F58] font-bold flex gap-[80px] items-center">
          <FaArrowLeft className="mr-2" />
          Banana Island Lagos
        </h1>
      </div>

      <div className="container grid grid-cols-2 w-5/5 gap-[56px]">
        <div className="mt-0">
          <img src={Component} alt="framme" className="mt-[20px] mb-0" />
          <p className="mt-0 p-[14px] text-[#2B3F58]">
            5 guest | 2beds, 2 baths | #100,000 per night
          </p>
        </div>
        <div className="flex gap-[28px]">
          <div>
            <img src={compo1} alt="framme" className="m-[20px]" />
            <img src={compo2} alt="framme" className="m-[20px]" />
          </div>
          <div>
            <img src={compo3} alt="framme" className="m-[20px]" />
            <div className="border bg-[#ffffff] flex flex-col p-[20px] h-[260px] w-auto items-center justify-center">
              <img src={logon} alt="framme" className="mb-[115px]" />
              <Link to="/bookhere">
                <p className="border-[#ffffff] bg-[#4C4898] shadow-2xl text-white rounded-[15px] p-[10px] mb-[15px] items-center w-[250px] flex justify-center">
                  Book now
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex grid-col-2 container gap-[71px] justify-center items-center">
        <div>
          <h1 className="text-[20px] text-[#2B3F58] font-bold pt-[30px] pb-[12px]">
            Apartment Features:
          </h1>
          <p className="text-[14px] text-[#4C4989] font-light">
            Spacious 2 bedroom apartments <br />
            Modern kitchen with state-of-the-art appliances
            <br /> Cozy living room with flat-screen TV and free Wi-Fi <br />
            Daily housekeeping and 24-hour power service
          </p>
          <h1 className="text-[20px] text-[#2B3F58] font-bold pb-[12px] pt-[30px]">
            Amenities:
          </h1>
          <div className="leading-[36px] text-[#4C4989]">
            <div className="flex gap-[70px]">
              <p className="flex">
                <img src={pool} alt="pool-icon" />
                On-site gym and swimming pool
              </p>
              <p className="flex">
                <img src={secure} alt="security" />
                Security service
              </p>
            </div>

            <div className="flex gap-[142px] ">
              <p className="flex">
                <img src={my1} alt="pool-icon" />
                Complimentary parking
              </p>
              <p className="flex">
                <img src={my2} alt="security" />
                Wifi
              </p>
            </div>

            <div className="flex gap-[270px]">
              <p className="flex">
                <img src={my3} alt="pool-icon" />
                Laundry
              </p>
              <p className="flex">
                <img src={my4} alt="security" />
                Power supply
              </p>
            </div>
            <button className="border-2 p-[8px] rounded-xl text-[14px] mt-[21px] mb-[13px] border-[#666666]">
              View All Amenities
            </button>
          </div>
          <h1 className="text-[20px] text-[#2B3F58] font-bold pb-[12px]">
            Guest Guidelines
          </h1>
          <div className="flex justify-between text-[#4C4989] font-medium pb-[15px]">
            <p className="flex items-center mr-[120px]">
              <img src={ico1} alt="icon" className="mr-2" /> Check - In 8:00AM
            </p>

            <p className="flex items-center">
              <img src={ico1} alt="icon" className="mr-2" /> Check - Out 8:00AM
            </p>
          </div>

          <div className="text-[#4C4989] text-[15px] leading-8">
            <p className="flex gap-[5px]">
              <img src={ico2} alt="icon" /> Safety: No smoking inside the
              apartment. Use designated smoking areas
            </p>
            <p className="flex gap-[5px]">
              <img src={ico2} alt="icon" />
              Pets: Pets are allowed with prior approval and an additional fee
            </p>
            <p className="flex gap-[5px]">
              <img src={ico2} alt="icon" />
              No Parties: Parties and events are not allowed
            </p>
            <p className="flex gap-[5px]">
              <img src={ico2} alt="icon" />
              Damage: Guests are responsible for any damages. Report issues
              immediately
            </p>
          </div>
        </div>

        <div>
          <div className="border-2 rounded-3xl p-[30px] h-[650px] w-[400px]">
            <h1 className="mb-[12px] text-[#2B3F58]">
              <span className="font-bold">NGN 100,000 /</span>
              <span className="font-normal"> Night</span>
            </h1>

            <form action="/action_page.php" className="flex items-center gap-8">
              <label
                htmlFor="vehicle1"
                className="text-[#2B3F58] text-[15px] pb-[22px]"
              >
                Please note this apartment has a<br /> maximum capacity of 5
                guests
              </label>
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                className="w-8 h-8 rounded-full appearance-none border-2 border-gray-400  checked:border-[#2B3F58] checked:text-white checked:bg-[#2B3F58] focus:outline-none flex items-center justify-center"
              />
            </form>

            <hr />
            <h1 className="mt-[13px] text-[#2B3F58] text-[15px] pb-[6px]">
              <span className="font-bold">NGN 300,000 /</span>
              <span className="font-normal"> Party</span>
            </h1>
            <form action="/action_page.php" className="flex items-center gap-4">
              <label htmlFor="vehicle1" className="text-[#2B3F58] pb-[22px]">
                Please note this apartment has a<br /> maximum capacity of 15
                guests
              </label>
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                className="w-8 h-8 rounded-full appearance-none border-2 border-gray-400  checked:border-[#2B3F58] checked:text-white checked:bg-[#2B3F58] focus:outline-none flex items-center justify-center"
              />
            </form>
            <hr />

            <div className="border-2 rounded-3xl p-4 m-3 w-full items-center justify-center h-28">
              <h1 className="text-[#2B3F58] font-bold">CHECK IN</h1>
              <div className="flex gap-2">
                <p className="p-[18px] text-[12px] border-2 rounded-xl text-[#666666]">
                  12 - 08 - 2024
                </p>
                <p className="p-[18px] text-[12px] border-2 rounded-xl text-[#666666]">
                  03; 50
                </p>
                <select
                  name="time"
                  id="time"
                  className="flex p-[18px] text-[12px] border-2 rounded-xl text-[#666666]"
                >
                  <option value="volvo">AM</option>
                  <option value="saab">PM</option>
                </select>
              </div>
            </div>

            <div className="border-2 rounded-3xl p-4 m-3 w-full items-center justify-center h-28">
              <h1 className="text-[#2B3F58] font-bold">CHECK OUT</h1>
              <div className="flex gap-2">
                <p className="p-[18px] text-[12px] border-2 rounded-xl text-[#666666]">
                  16 - 08 - 2024
                </p>
                <p className="p-[18px] text-[12px] border-2 rounded-xl text-[#666666]">
                  03; 50
                </p>
                <select
                  name="time"
                  id="time"
                  className="flex p-[18px] text-[12px] border-2 rounded-xl text-[#666666]"
                >
                  <option value="volvo">AM</option>
                  <option value="saab">PM</option>
                </select>
              </div>
              <button className="mt-8 border border-[#4C4898] w-full p-[14px] bg-[#4C4898] mb-[14px] rounded-2xl h-auto text-white text-[14px]">
                <Link to="/login"> Log in </Link>
              </button>
              <p className="text-[#4C4989] text-[16px] p-[10px] font-semibold">
                Check Out termination policy here
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border bg-[#F0E8FF] w-[688px] h-auto p-5 ml-[190px] mt-[53px] ">
        <h1 className="flex justify-center p-4 item-center font-bold text-[20px] text-[#2B3F58]">
          NOTE:
        </h1>
        <div className="flex gap-[51px] text-justify">
          <img src={signal} alt="sign" />
          <p className="text-[14px] text-justify text-[#2B3F58]">
            The caution fee of ₦100,000 is a refundable security deposit
            <br />
            intended to cover any potential damages or additional cleaning
            <br />
            required after your stay. The caution fee will be refunded in full
            <br />
            upon check-out, provided there are no damages or excessive <br />
            cleaning required. The refund will be processed within 3 days <br />
            after your departure.
            <br /> <br />
            An inspection of the apartment will be conducted before
            <br />
            refunding the caution fee. Please ensure that any issues or <br />
            damages are reported immediately to our management team <br />
            during your stay. In the event of damages or the need for <br />
            additional cleaning, the cost will be deducted from the caution
            <br />
            fee. Any remaining balance will be refunded to you.
          </p>
        </div>
      </div>

      {/* <div style="width: 100%">
          <iframe
            width="520"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Lagos/Abeokuta+(Shortment%20Real%20Estate%20site)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        
      </div> */}
      <img src={map1} alt="map" className="container m-[25px]" />
      <div className="border-spacing-4 border-4 container items-center justify-center p-10 text-[#2B3F58]">
        <div className="flex gap-[750px]">
          <div className="leading-[35px] pb-[35px]">
            <h1 className="font-bold text-[20px]"> Hoster by: Lawrence</h1>
            <p>HOST ID: Law3000251</p>
          </div>
          <div>
            <h1 className="font-bold text-[20px]">Approved Host</h1>
          </div>
        </div>
        <p className="font-semibold mb-[30px]">0 listings | 15 reviews</p>
        <button className="border-2 p-[10px] rounded-xl text-[16px] mt-[21px] mb-[13px] w-[250px] border-[#666666]">
          View Profile Details
        </button>
      </div>

      <div className="container">
        <h1 className=""> Neighboring Apartment</h1>
        <p className="flex">
          <img src={lag} alt="icon" className="" />
          Lagos NIgeria
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[20px] text-[#2B3F58] m-[5px] sm:grid-cols-2 lg:grid-cols-3 sm:gap-[30px] lg:gap-[41px] sm:m-[50px] lg:m-[75px] container">
        {aparts.map((item, index) => (
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
      </div>

      <div className="text-center items-center flex flex-col pt-[10px] pb-[10px] text-[#2B3F58]">
        <h1 className="text-[1.2rem] md:text-[20px] leading-12 pt-[10px] md:pt-[10px] text-[#2B3F58] font-bold">
          Site of attractions in Lagos
        </h1>
        <p className="pt-[5px] pb-[25px] text-[#2B3F58] text-[0.7rem] md:text-[1rem]">
          Lagos Nigeria is a vibrant city with numerous site of attractions.
          Here are some notable ones:
        </p>

        <div className="text-center items-center flex flex-col pt-[10px] pb-[50px]">
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
        </div>
      </div>

      <section className="bg-[#12082D] blue-500 w-full p-">
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

export default Apartment1;
