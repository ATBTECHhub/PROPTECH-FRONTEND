// const Herosection = () => {
//   return (
//     <section className="text-center items-center flex flex-col pt-[180px] pb-[130px]">
//         <div className="text-white">
//             <h1 className="text-6xl leading-12">Find Your Perfect Shortlet <br />In Nigeria</h1>
//             <p className="pt-[20px] pb-[10px]">Discover comfortable and affordable apartments in the heart of Nigeria's most vibrant cities</p>
//         </div>
// <div className="items-center">
//         <form className="text-black border border-white bg-white rounded-[20px] w-[700px]  pt-[10px] flex  gap-[28px] ">
//         <label for="menu">Location</label>
//             <select name="menu" id="menu">
//                 <option value="Lagos"></option>
//                 <option value="Abeokuta"></option>
//             </select>

//                     <label for="menu">Apartment Type</label>
//             <select name="menu" id="menu" >
//                 <option value="Lagos"></option>
//                 <option value="Abeokuta"></option>
//             </select>

//                     <label for="menu">Function as a host</label>
//             <select name="menu" id="menu">
//                 <option value="Lagos"></option>
//                 <option value="Abeokuta"></option>
//             </select>

//                     <label for="menu">Reserve a space</label>
//             <select name="menu" id="menu">
//                 <option value="Lagos"></option>
//                 <option value="Abeokuta"></option>
//             </select>
//         </form>
//         </div>
//     </section>
//   )
// }

// export default Herosection

const Herosection = () => {
  return (
    <section className="text-center flex flex-col pt-[100px] pb-[80px] sm:pt-[180px] sm:pb-[130px] w-full">
      <div className="text-white px-4 sm:px-0">
        <h1 className="text-3xl leading-8 sm:text-6xl sm:leading-[72px]">
          Find Your Perfect Shortlet <br />
          In Nigeria
        </h1>
        <p className="pt-[10px] pb-[20px] sm:pt-[20px] sm:pb-[10px] text-sm sm:text-base">
          Discover comfortable and affordable apartments in the heart of
          Nigeria's most vibrant cities
        </p>
      </div>
      <div className="w-full flex justify-center">
        <form className="text-black border-2 border-white bg-white rounded-[30px] w-full sm:w-[700px] pt-[10px] px-[20px] sm:px-[30px] flex flex-col sm:flex-row gap-[10px] sm:gap-[20px]">
          <div className="flex flex-col w-full">
            <label htmlFor="location" className="text-left mb-2 text-[16px]">
              Location
            </label>
            <select
              name="location"
              id="location"
              className="p-2 rounded-md border border-gray-300 placeholder-gray-500 text-[12px] w-full"
            >
              <option value="Lagos">Lagos</option>
              <option value="Abeokuta">Abeokuta</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="apartment" className="text-left mb-2 text-[16px]">
              Apartment Type
            </label>
            <select
              name="apartment"
              id="apartment"
              className="p-2 rounded-md border border-gray-300 placeholder-gray-500 text-[12px] w-full"
            >
              <option value="Studio">Studio</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="host" className="text-left mb-2 text-[16px]">
              Function as a Host
            </label>
            <select
              name="host"
              id="host"
              className="p-2 rounded-md border border-gray-300 placeholder-gray-500 text-[12px] w-full"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="reserve" className="text-left mb-2 text-[16px]">
              Reserve a Space
            </label>
            <select
              name="reserve"
              id="reserve"
              className="p-2 rounded-md border border-gray-300 placeholder-gray-500 text-[12px] w-full"
            >
              <option value="One Bedroom">One Bedroom</option>
              <option value="Two Bedroom">Two Bedroom</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Herosection;
