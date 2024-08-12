const Testimonies = () => {
  return (
    <section className="text-center items-center flex flex-col pt-[10px] pb-[50px]">
      <div>
        <h1 className="pb-[15px] pt-[20px] font-bold text-[#2B3F58]">
          Testimonies
        </h1>
        <p className="text-[#2B3F58] text-[14px]">
          "Great value for you money! our apartments are always exactly what we
          showcase online"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 container items-center gap-10 pt-[30px]">
        <div
          className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
        >
          <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
            Adeola John
          </h1>
          <p className="pb-[25px]  text-[#2B3F58] text-[14px] leading-6">
            I had an incredible stay at Shortment Service Apartment. The
            apartment was clean, modern and had all the amenities I needed.
            Highly recommend it for both short and long stays!
          </p>
        </div>
        <div
          className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
        >
          <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
            Julius Jimmy
          </h1>
          <p className="pb-[25px]  text-[#2B3F58] text-[14px] leading-6">
            Fantastic location and excellent service! The apartment was spacious
            and comfortable, making me feel right at home. The nearby
            restaurants and shops were an added bonus. Will definitely stay here
            again on my next visit.
          </p>
        </div>
        <div
          className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
        >
          <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
            Andrew Blessing
          </h1>
          <p className="pb-[25px]  text-[#2B3F58] text-[14px] leading-6">
            One of the best service apartments I've ever stayed in. The fully
            equipped kitchen and laundry facilities were a lifesaver. The view
            from the balcony was stunning, and the gym was well-maintained.
            Perfect for business travelers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
