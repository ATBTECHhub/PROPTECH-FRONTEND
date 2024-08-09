import { CiSearch } from "react-icons/ci";
const News = () => {
  return (
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
  );
};

export default News;
