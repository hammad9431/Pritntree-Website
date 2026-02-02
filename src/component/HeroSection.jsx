
import image from "../assets/images/home_pg_1-bca1b0ecd6b1f076b5d6ee800e9d564e3c54389454c70b3f62d39fe11e09f731 (1).jpg"
import { FaArrowRight } from "react-icons/fa";
import image1 from "../assets/images/light-c472bae705b279aa53ed5618df9d2011993c4b82404b0ff26e4ae064b3881df7.svg"
function HeroSection() {
  return (
    <>
      <div className=" lg:w-[100%] md:w-[100%] sm:w-[100%] xl:w-[90%] w-full md:mt-20 xl:mt-24 lg:mt-28 mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
        <div className=" max-sm:p-2 sm:p-2 w-[100%] sm:w-[100%] lg:order-2  md:order-2 sm:order-2 max-sm:order-2 xl:order-2">
          <button className="mt-12 text-blue-400  rounded-3xl h-10 w-[130px] bg-gray-200 border border1 border-black">Price Guarantee</button>
          <h1 className="text-black  mt-4 md:text-4xl font-bold lg:text-5xl xl:text-6xl text:2xl">Looking for a  Premium copier<br />
            <p className="text-blue-700 lg:text-5xl lg:mt-4  block md:text-4xl xl:text-5xl">below market price?</p></h1>
          <div className="flex  lg:mt-20 ">
            <p className="lg:text-xl xl:text-2xl text-black-300 md:text-base">Get your copier delivered with our lightning speed delivery service.</p>
            <img src={image1} alt="" className="lg:h-16 lg:inline-block md:hidden sm:hidden hidden" />
          </div>
          {/* <button className="h-10  bg-blue-500 text-white flex text-xl">Book Now<span className="px-2 mt-2"><FaArrowRight /></span></button> */}
          <div className="flex mt-12 lg:mt-12 lg:gap-8">
            <button className="h-12 lg:w-[170px] md:w-[170px] bg-blue-500 text-white flex items-center text-xl px-3 rounded">
              Book Now <span className="px-2"><FaArrowRight /></span>
            </button>

            <button className="h-12 lg:w-[170px] md:w-[170px] ml-auto lg:ml-0 rounded text-blue-500 flex items-center text-xl px-4 border border-gray-300">
              Shop Now
            </button>
          </div>


        </div>
        {/* Second--Div */}
        <div className="lg:w-[100%] md:w-[100%]  lg:order-1  xl:order-2 md:order-1 max-sm:order-1 sm:w-[100%]">

          <img src={image} alt="" className="lg:h-[550px] lg:w-full md:h-[500px]   md:w-full mx-auto sm:w-[100%] sm:border-red-600 xl:w-full" />
        </div>
      </div>
    </>
  )
}

export default HeroSection