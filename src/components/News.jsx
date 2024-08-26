import { CiSearch } from "react-icons/ci";
const News = () => {
  return (
    <div className="text-center items-center flex flex-col pt-[10px] pb-[50px] text-black">
      <h1 className="text-[1.2rem] md:text-[2rem] leading-12 pt-[30px] md:pt-[73px] text-[#2B3F58] font-bold">
        Featured Accomodation
      </h1>
      <p className="pt-[5px] pb-[25px] text-[#2B3F58] text-[0.9rem] md:text-[1.5rem]">
        Experience Comfort and Luxury in Everystay
      </p>
      <p className="text-[#2B3F58] border border-[#2B3F58] md:rounded-[30px] rounded-[10px] md:px-[26px] px-[16px] py-[12px] flex gap-[5px] w-full md:w-auto">
        <CiSearch className="text-[#2B3F58]" />
        <b>Search</b>
        <span className="hidden md:inline">
          for an apartment, packages, or add-one
        </span>
      </p>
    </div>
  );
};

export default News;
