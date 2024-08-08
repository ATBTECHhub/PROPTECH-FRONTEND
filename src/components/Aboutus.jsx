import logo2 from "../assets/logo2.svg";

const Aboutus = () => {
  return (
    <section className="grid grid-cols-2 container items-center gap-10">
      <div
        className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center"
      >
        <img
          src={logo2}
          alt="about us logo"
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div>
        <h1 className="pb-[25px] text-[#2B3F58] font-bold">About Us</h1>
        <p className="pb-[25px]  text-[#2B3F58] text-[14px] ">
          Welcome to Shortment Service Apartment, where comfort meets
          convenience. Nestled in the heart of Nigeria, our service apartments
          offer a perfect blend of home-like comfort and modern amenities,
          tailored to meet the needs of both short-term and long-term guests. At
          Shortment, we believe in providing a welcoming and personalized
          experience. Whether you're traveling for business, leisure, or
          relocating, our team is dedicated to making your stay comfortable and
          memorable. With a focus on exceptional service and attention to
          detail, we strive to exceed your expectations.
        </p>
        <h1 className="pb-[25px] text-[#2B3F58] font-bold">Our Apartments</h1>
        <p className="pb-[25px]  text-[#2B3F58] text-[14px] ">
          Our fully furnished apartments are designed with you in mind. Each
          unit features modern décor, spacious living areas, fully equipped
          kitchens, and high-speed internet as well as a private workspace.
          Enjoy the flexibility of a self-catering apartment with the added
          benefits of hotel-like services, including housekeeping, 24/7 support,
          security, and more.
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
