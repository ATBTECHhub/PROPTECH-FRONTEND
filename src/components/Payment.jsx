import React from 'react'
import { Link } from 'react-router-dom';
import logos from "../assets/logos2.svg";
import Button from './Button';


const Payment = () => {
  return (
    <section>
      <nav
        className="h-[75px] fixed w-full z-[2] flex justify-cente bg-white mb-[180px] border-b-[3px]
      "
      >
        <div className="container flex justify-between items-center sm:gap-[15px]">
          <img src={logos} alt="logo" className="sm:hidden md:block" />
          {/* <img src={logo} alt="logo" className="block lg:hidden" /> */}

          <ul className="hidden lg:flex gap-[32px] text-[#4C4989] ">
            <li>
              <Link to="/">Reserve a space</Link>
            </li>
            <li>
              <Link to="/explore">Function as a host</Link>
            </li>
          </ul>
          <Link to="/signup">
            <Button text="Begin now" />
          </Link>
        </div>
      </nav>

      <div className='mt-[18opx]'>
        <h1>Payment</h1>
        <p>Apartment successfully booked!</p>
        <p>
          Your reservation has been confirmed. Confirmation of your reservation
          was sent to your email wit all details
        </p>
        <p>See you soon, Juwon!</p>
        <Link to="/">
          <Button text="Back to home page" />
        </Link>
      </div>
    </section>
  );
}

export default Payment