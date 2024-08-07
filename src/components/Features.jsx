import frame1 from "../assets/frame1.svg"
import frame2 from "../assets/frame2.svg"
import frame3 from "../assets/frame3.svg"
import frame4 from "../assets/frame4.svg"
import frame5 from "../assets/frame5.svg"
import frame6 from "../assets/frame6.svg"


const Features = () => {
  return (
      <div className="grid grid-cols-3 gap-[41px] text-[#2B3F58] m-[75px]">
          <div className="rooms">
              <div className="room">
                  <div>
                      <img src={frame1} alt="" className="pb-[35px]"/>
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold">Royal Suit</h2>
                      <p>Lagos State, Nigeria</p>
                      <p className="pt-[10px] pb-[15px]">3 beds, 3 baths</p>
                      <p>NGN 50,000 per night </p>
                  </div>
              </div>
          </div>

          <div className="rooms">
              <div className="room ">
                  <div>
                      <img src={frame2} alt="" className="pb-[35px]" />
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold">Imperial Residence</h2>
                      <p>Abuja FCT, Nigeria</p>
                      <p className="pt-[10px] pb-[15px]">3 beds, 3 baths</p>
                      <p>NGN 50,000 per night </p>
                  </div>
              </div>
          </div>

         
              <div className="room">
                  <div>
                      <img src={frame3} alt="" className="pb-[35px]" />
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold">Studio Apartment</h2>
                      <p>Ogun State, Nigeria</p>
                      <p className="pt-[10px] pb-[15px]">3 beds, 3 baths</p>
                      <p>NGN 50,000 per night </p>
                  </div>
              </div>
         

              <div className="room">
                  <div>
                      <img src={frame4} alt="" className="pb-[35px]" />
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold">Royal Suit</h2>
                      <p>Lagos State, Nigeria</p>
                      <p className="pt-[10px] pb-[15px]">3 beds, 3 baths</p>
                      <p>NGN 50,000 per night </p>
                  </div>
              </div>

              <div className="room">
                  <div>
                      <img src={frame5} alt="" className="pb-[35px]" />
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold">Royal Suit</h2>
                      <p>Lagos State, Nigeria</p>
                      <p className="pt-[10px] pb-[15px]">3 beds, 3 baths</p>
                      <p>NGN 50,000 per night </p>
                  </div>
              </div>

              <div className="room">
                  <div>
                      <img src={frame6} alt="" className="pb-[35px]" />
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold">Royal Suit</h2>
                      <p>Lagos State, Nigeria</p>
                      <p className="pt-[10px] pb-[15px]">3 beds, 3 baths</p>
                      <p>NGN 50,000 per night </p>
                  </div>
              </div>
    </div>
  )
}

export default Features