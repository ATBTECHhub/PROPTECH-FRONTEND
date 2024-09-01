const Herosection = () => {
  return (
    <section className="flex flex-col items-center pt-[100px] md:pt-[180px] pb-[100px] md:pb-[130px] text-center">
      <div className="px-4 md:px-0 text-white">
        <h1 className="text-3xl md:text-6xl leading-8 md:leading-12">
          Find Your Perfect Shortlet <br />
          In Nigeria
        </h1>
        <p className="pt-[10px] pb-[10px] text-sm md:text-base">
          Discover comfortable and affordable apartments in the heart of
          Nigeria's most vibrant cities
        </p>
      </div>
      <div className="flex justify-center items-center px-4 md:px-[275px] w-full">
        <form className="flex md:flex-row flex-col justify-center items-center gap-[10px] md:gap-[15px] border-white bg-white p-4 border rounded-lg w-full md:w-[800px] text-black">
          <div className="flex flex-col w-full">
            <label
              htmlFor="location"
              className="mb-2 border-none font-semibold text-[#2B3F58] text-[12px] text-left md:text-[14px]"
            >
              Location
            </label>
            <select
              name="location"
              id="location"
              className="bg-transparent border-none w-full text-[#2B3F58] text-[10px] md:text-[12px] placeholder-gray-500"
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
              className="mb-2 font-semibold text-[#2B3F58] text-[12px] text-left md:text-[14px]"
            >
              Apartment Type
            </label>
            <select
              name="apartment"
              id="apartment"
              className="bg-transparent border-none w-full text-[#2B3F58] text-[10px] md:text-[12px] placeholder-gray-500"
            >
              <option value="Studio">Select Type</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="host"
              className="mb-2 font-semibold text-[#2B3F58] text-[12px] text-left md:text-[14px]"
            >
              Function as a Host
            </label>
            <select
              name="host"
              id="host"
              className="bg-transparent border-none w-full text-[#2B3F58] text-[10px] md:text-[12px] placeholder-gray-500"
            >
              <option value="Yes">Select Option</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="reserve"
              className="mb-2 font-semibold text-[#2B3F58] text-[12px] text-left md:text-[14px]"
            >
              Reserve a Space
            </label>
            <select
              name="reserve"
              id="reserve"
              className="bg-transparent border-none w-full text-[#2B3F58] text-[10px] md:text-[12px] placeholder-gray-500"
            >
              <option value="One Bedroom">Select Option</option>
              <option value="Two Bedroom">Two Bedroom</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Herosection;

// const Herosection = () => {
//   return (
//     <section className="flex flex-col pt-[100px] sm:pt-[180px] pb-[80px] sm:pb-[130px] w-full text-center">
//       <div className="px-4 sm:px-0 text-white">
//         <h1 className="text-3xl sm:text-6xl leading-8 sm:leading-[72px]">
//           Find Your Perfect Shortlet <br />
//           In Nigeria
//         </h1>
//         <p className="pt-[10px] sm:pt-[20px] pb-[20px] sm:pb-[10px] text-sm sm:text-base">
//           Discover comfortable and affordable apartments in the heart of
//           Nigeria's most vibrant cities
//         </p>
//       </div>
//       <div className="flex justify-center items-center w-full">
//         <form className="flex sm:flex-row flex-col gap-10 sm:gap-[20px] border-4 border-white bg-white sm:px-[30px] pt-[10px] pb-[18px] rounded-[50px] w-[500px] sm:w-[500px] text-black">
//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="location"
//               className="mb-2 font-semibold text-[#2B3F58] text-[12px] text-left"
//             >
//               Location
//             </label>
//             <select
//               name="location"
//               id="location"
//               className="border-none w-full text-[#2B3F58] text-[10px] placeholder-gray-500"
//             >
//               <option value="Lagos">Select Location</option>
//               <option value="Abeokuta" placeholder="Nigeria">
//                 Abeokuta
//               </option>
//             </select>
//           </div>

//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="apartment"
//               className="mb-2 font-semibold text-[#2B3F58] text-[12px] text-left"
//             >
//               Apartment Type
//             </label>
//             <select
//               name="apartment"
//               id="apartment"
//               className="border-none w-full text-[#2B3F58] text-[10px] placeholder-gray-500"
//             >
//               <option value="Studio">Select Type</option>
//               <option value="Apartment">Apartment</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="host"
//               className="mb-2 font-semibold text-[#2B3F58] text-[12px] text-left"
//             >
//               Function as a Host
//             </label>
//             <select
//               name="host"
//               id="host"
//               className="border-none w-full text-[#2B3F58] text-[10px] placeholder-gray-500"
//             >
//               <option value="Yes">Select Location</option>
//               <option value="No">No</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="reserve"
//               className="mb-2 font-semibold text-[#2B3F58] text-[12px] text-left"
//             >
//               Reserve a Space
//             </label>
//             <select
//               name="reserve"
//               id="reserve"
//               className="border-none w-full text-[10px] placeholder-gray-500"
//             >
//               <option value="One Bedroom">Select Location</option>
//               <option value="Two Bedroom">Two Bedroom</option>
//             </select>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Herosection;
