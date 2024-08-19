const Herosection = () => {
  return (
    <section className="text-center items-center flex flex-col pt-[180px] pb-[130px]">
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
  );
};

export default Herosection;

// const Herosection = () => {
//   return (
//     <section className="text-center flex flex-col pt-[100px] pb-[80px] sm:pt-[180px] sm:pb-[130px] w-full">
//       <div className="text-white px-4 sm:px-0">
//         <h1 className="text-3xl leading-8 sm:text-6xl sm:leading-[72px]">
//           Find Your Perfect Shortlet <br />
//           In Nigeria
//         </h1>
//         <p className="pt-[10px] pb-[20px] sm:pt-[20px] sm:pb-[10px] text-sm sm:text-base">
//           Discover comfortable and affordable apartments in the heart of
//           Nigeria's most vibrant cities
//         </p>
//       </div>
//       <div className="w-full flex justify-center items-center">
//         <form className="text-black border-4 border-white bg-white rounded-[50px] w-[500px] sm:w-[500px] pt-[10px] pb-[18px] sm:px-[30px] flex flex-col sm:flex-row gap-10 sm:gap-[20px]">
//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="location"
//               className="text-left mb-2 text-[12px] font-semibold text-[#2B3F58]"
//             >
//               Location
//             </label>
//             <select
//               name="location"
//               id="location"
//               className=" border-none placeholder-gray-500 text-[10px] w-full text-[#2B3F58] "
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
//               className="text-left mb-2 text-[12px] font-semibold text-[#2B3F58]"
//             >
//               Apartment Type
//             </label>
//             <select
//               name="apartment"
//               id="apartment"
//               className="border-none placeholder-gray-500 text-[10px] w-full text-[#2B3F58]"
//             >
//               <option value="Studio">Select Type</option>
//               <option value="Apartment">Apartment</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="host"
//               className="text-left mb-2 text-[12px] font-semibold text-[#2B3F58]"
//             >
//               Function as a Host
//             </label>
//             <select
//               name="host"
//               id="host"
//               className="border-none placeholder-gray-500 text-[10px] w-full text-[#2B3F58]"
//             >
//               <option value="Yes">Select Location</option>
//               <option value="No">No</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="reserve"
//               className="text-left mb-2 text-[12px] font-semibold text-[#2B3F58]"
//             >
//               Reserve a Space
//             </label>
//             <select
//               name="reserve"
//               id="reserve"
//               className="border-none placeholder-gray-500 text-[10px] w-full"
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
