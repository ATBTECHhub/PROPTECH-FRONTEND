import React from 'react'

const Favorite = () => {
  return (
    <div>
      <nav
        className="h-[75px] fixed w-full z-[2] flex justify-cente bg-white border-b-[3px]
      "
      >
        <div className="container flex justify-between items-center sm:gap-[15px]">
          <Link to="/">
            <img src={logos} alt="logo" className="sm:hidden md:block" />
          </Link>
          {/* <img src={logo} alt="logo" className="block lg:hidden" /> */}
          <div className="flex items-center gap-[18px]">
            <ul className="hidden lg:flex gap-[32px] text-[#4C4989] ">
              {/* <li>
              <Link to="/">Reserve a space</Link>
            </li> */}
              <li className="border-[1px] p-[15px] text-[16px] rounded-[10px] text-[#4C4989]">
                <Link to="/explore">Function as a host</Link>
              </li>
              {/* <IoIosNotifications /> */}
            </ul>
            {/* <IoIosNotificationsOutline className="sm:hidden md:block md:text-[32px] md:text-[#4C4989]" /> */}
            <IoIosNotificationsOutline className="hidden md:block md:text-[32px] md:text-[#4C4989]" />

            <div className="relative inline-flex items-center gap-[3px] border p-2 rounded-[90px] bg-[#4C4989] border-[#4C4989] md:h-[55px] h-[30px] md:w-[120px] w-[100px]">
              <label
                htmlFor="reserve"
                className="flex-grow text-white text-xs leading-3"
              >
                <img
                  src={man}
                  alt="profile"
                  className="md:w-8 md:h-8 w-[25px] h-[25px]"
                />
              </label>
              <select
                name="reserve"
                id="reserve"
                className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer bg-[#4C4989] text-white leading-3 p-2"
              >
                <option
                  value="One Bedroom"
                  className="text-xs py-2 px-4 m-10 bg-none"
                >
                  <Link to="/">Account</Link>
                </option>
                <option
                  value="One Bedroom"
                  className="text-xs py-2 px-4 m-10 bg-none"
                >
                  <Link to="/">Handle Bookings</Link>
                </option>
                <option value="Two Bedroom" className="text-xs py-2 px-4">
                  <Link to="/favoriteapartments">Favorite</Link>
                </option>

                <option value="Two Bedroom" className="text-xs py-2 px-4">
                  <Link to="/">Message</Link>
                </option>
                <option value="Two Bedroom" className="text-xs py-2 px-4">
                  <Link to="/">Logout</Link>
                </option>
              </select>
              <span className="absolute right-2 top-2 pointer-events-none text-white">
                &#9662;
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Favorite