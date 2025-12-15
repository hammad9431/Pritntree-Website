
import image from '../assets/images/get_quote_win1-99f9a581286763693d88941e608d037634cab459884379925187c65ccaf947a6.png'
function QuoteSection() {
  return (
    <div className="w-full bg-[#e8effc] lg:py-20 md:py-20 sm:py-10 py-10 flex flex-col items-center">

      {/* Top Heading */}
      <h1 className="lg:text-5xl md:text-4xl text-xl  text-center">
        Need a Custom Copier Quote?
      </h1>

      <p className="text-center text-gray-700 mt-3 sm:text-base text-lg lg:text-lg">
        We’ve revolutionized copier shopping. Get Instant guaranteed<br/>
        custom copier quotes
      </p>

    
      <div
        className="
          lg:w-[80%] md:w-[90%] w-[90%] lg:h-[300px] mt-12 p-3  rounded-[40px] "
          style={{ backgroundImage: `url(${image})` }}
      >
     
        <div
          className="
            bg-white rounded-[40px] lg:h-[260px] py-10 lg:px-5 md:px-5 text-center shadow-lg lg:mt-1
          "
        >
         
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-2xl  lg:text-3xl md:text-2xl">Start My Free Quote!</h2>
            <img
              src="src/assets/images/trusted_seller-b812cff386805b416cee6d5b5f484eca187873446ec8374a2a616183be271e37.webp"
             
              className="w-10 h-10 md:hidden lg:inline-block hidden"
            />
          </div>

          <p className="text-black mt-2 text:[5px]">Compare Quotes Instantly</p>

<div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-4 mt-8 w-full px-4">
  <button className="bg-blue-600 text-white w-[110%] lg:w-[35%] md:w-[110%] sm:w-[105%] py-2  rounded-xl font-semibold flex justify-between items-center px-6 hover:bg-blue-700 transition"> 
    <span className="text-lg">Lease</span> 
    <span className="text-3xl">→</span> 
  </button> 
  <button className="bg-blue-600 text-white w-[110%]  lg:w-[35%] md:w-[110%] sm:w-[105%] py-2 rounded-xl font-semibold flex justify-between items-center px-6 hover:bg-blue-700 transition"> 
    <span className="text-lg">Purchase</span> 
    <span className="text-3xl">→</span> 
  </button> 
</div>

        </div>
      </div>
    </div>
  );
}

export default QuoteSection;
