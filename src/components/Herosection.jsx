const Herosection = () => {
  return (
    <section className="text-center items-center flex flex-col pt-[180px] pb-[130px]">
        <div className="text-white">
            <h1 className="text-6xl leading-12">Find Your Perfect Shortlet <br />In Nigeria</h1>
            <p className="pt-[20px] pb-[10px]">Discover comfortable and affordable apartments in the heart of Nigeria's most vibrant cities</p>
        </div>
<div className="items-center">
        <form className="text-black border border-white bg-white rounded-[20px] w-[700px]  pt-[10px] flex  gap-[28px] ">
        <label for="menu">Location</label>
            <select name="menu" id="menu">
                <option value="Lagos"></option>
                <option value="Abeokuta"></option>
            </select>

                    <label for="menu">Apartment Type</label>
            <select name="menu" id="menu" >
                <option value="Lagos"></option>
                <option value="Abeokuta"></option>
            </select>

                    <label for="menu">Function as a host</label>
            <select name="menu" id="menu">
                <option value="Lagos"></option>
                <option value="Abeokuta"></option>
            </select>

                    <label for="menu">Reserve a space</label>
            <select name="menu" id="menu">
                <option value="Lagos"></option>
                <option value="Abeokuta"></option>
            </select>
        </form>
        </div>
    </section>
  )
}

export default Herosection