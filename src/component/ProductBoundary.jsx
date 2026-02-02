// import image from '../assets/images/product_boundry-8d7ca4d15433f8b11b44774201fd359c27844b22ef15ade29cc78f307f27fe83.png'
import image1 from '../assets/images/product_boundry-8d7ca4d15433f8b11b44774201fd359c27844b22ef15ade29cc78f307f27fe83.png'
import image2 from '../assets/images/image20231019-644101-u5wqgq.webp'
function ProductBoundary() {
  return (
    <>
      <div className="lg:w-[90%] md:w-[90%] mx-auto flex lg:flex-row md:flex-col flex-col gap-10 items-start">
        {/* Left Side */}
        <div className='lg:w-[60%] md:w-[100%] '>
          <div className="flex items-center space-x-3 mb-4 px-2">
            <span className="text-sm bg-blue-100 text-blue-700 lg:px-4 md:px-3 px-4 lg:py-1  rounded-lg font-semibold"><p className='text-base mt-1'>Most Popular</p></span>
            
            <span className='lg:flex hidden '><input type='checkbox' className='mt-1'/><p className="text-sm mt-3 ">Free toners & automatic delivery</p></span>
            <span className='lg:flex  hidden '><input type='checkbox' className='mt-1'/><p className="text-sm mt-3 ">Next day free repairs & service</p></span>
            {/* <span className="text-sm ">Next day free repairs & service</span> */}
          </div>

          <h2 className="px-2 lg:text-3xl md:text-xl text-[23px] font-bold leading-snug md:text-gray-500 lg:text-black text-gray-500">Special Lease<br />
            Lease a full-size copier with unlimited toner for only <span className="lg:text-blue-600 ">$449/month!</span>
          </h2>

          <p className="px-2 mt-4 text-gray-600 lg:text-2xl md:text-[15px]">This package is tailored to high volume users that are looking for cost-effective, flexible, and high-quality copier solutions.</p>
          <p className='lg:text-xl'>Features Included - Month to Month: No Contract</p>
          {/* Features */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:gap-2 md:gap-2 ">
            {[ 
              <h6 className='lg:text-xl md:text-[10px] text-[11px]   '>10,000 BW Copies included</h6>, 
              <h6 className='lg:text-xl md:text-[10px] text-[11px]  '>BW Overages 0.009"</h6>, 
              <h6 className='lg:text-xl md:text-[10px] text-[11px]  '>5,000 Color Copies Included</h6>, 
              <h6 className='lg:text-xl md:text-[10px] text-[11px]  '>Color Overages 0.065</h6>, 
              <h6 className='lg:text-xl md:text-[10px] text-[11px]  '>All-Inclusive Maintenance</h6>, 
              <h6 className='lg:text-xl md:text-[10px] text-[11px]  '>Includes Full Service, Labor, Parts & Toner</h6> 
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                                                                                           {/* underline decoration-solid */}
                <div className='w-[50px] h-[50px]  flex items-center rounded-lg justify-center !border !border-dashed !border-blue-700'>
                <div className="lg:w-[40px] md:w-[40px] lg:h-[40px] md:h-[40px] w-[30px] h-[30px] bg-blue-600 text-white flex items-center justify-center rounded">
                  ✓
                </div>
                </div>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
    <div className='flex justify-center lg:h-80 md:h-80 h-28'>
    <img  src="src/assets/images/prem_lp_2-99b0b52025bf8b6e54ee2a2a6b8660682e89db89e99b17281f7a2b4f56d782ca.jpg" alt="" />
  </div>
         </div>
        {/* Right Side */}

        <div className='lg:w-[50%] md:w-[100%] w-[100%] bg-cover '
         style={{background:`url(${image1})`}}>
        <div className="border rounded-2xl p-6  shadow-md card lg:my-6 md:my-5 my-8 lg:w-[80%] md:w-[80%] w-[95%] mx-auto ">
          <h3 className="text-xl font-bold">Xerox AltaLink C8045</h3>
          <p className="text-gray-500 text-sm mb-4">Refurbished copier – copy, print, scan</p>

          <img
            src={image2}
            alt="Xerox AltaLink C8045"
            className="w-full  "
          />

          <div className="flex items-center space-x-4 mt-4">
            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Pre Owned</span>
            <span className="text-sm">Print: Color & B&W</span>
            <span className="text-sm">Speed: 40–50 PPM</span>
          </div>

          <div className="mt-6 flex items-center space-x-3">
            <span className="text-gray-600">Quantity</span>
            <button className="px-3 py-1 bg-gray-200 rounded">-</button>
            <span>1</span>
            <button className="px-3 py-1 bg-gray-200 rounded">+</button>
          </div>

          <button className=" w-full bg-blue-600 text-white py-3 rounded-xl font-semibold mt-6">LEASE PRICE</button>
        </div>
        
        </div>

      </div>
  

    </>
  )
}

export default ProductBoundary