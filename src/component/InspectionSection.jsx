import image from'../assets/images/landing_page_new_icon_1-2477eeabd1cf9dab41b9377b248c1d104b2a00281098d9bf1e7ace14062c6500.png'


function InspectionSection() {
  return (
    <>
<div className=' mt-12'>
  <div className='mx-auto w-20'>
  <img
    className='h-16 '
    src={image}
    alt=""
  />
</div>
  <div className='grid grid-cols-1 lg:flex lg:justify-between lg:items-center gap-4 text-center'>

  {/* Heading */}
  <h1 className=' text-center lg:text-3xl xl:text-4xl md:text-3xl text-lg sm:text-2xl font-bold mx-auto lg:mx-0'>
    Our 30 Point Inspection List
  </h1>

  {/* Button */}
  {/* <button className="bg-blue-600 text-white  mx-auto lg:mx-0 px-3 py-1 rounded-md font-semibold flex justify-center items-center gap-2 hover:bg-blue-700 transition">
    <span className="text-lg">Contact us</span>
    <span className="text-2xl">→</span>
  </button> */}

</div>
</div>

 <p className='lg:text-base  lg:px-36 md:text-base text-sm px-6  text-[15px] text-center'>
    We make sure every copier goes through our thorough 30 point inspection list ensuring that all refurbished copiers are in excellent working
    condition before being listed on our marketplace:
  </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">

        {/* LEFT SIDE — Top----BOX */}
        <div className="lg:ml-auto md:ml-6 w-[95%] ml-2 lg:h-[340px] lg:w-[80%]   md:w-[95%] flex justify-center lg:mt-10 md:mt-5   bg-[#e8effc] rounded-2xl">
          <div className=" lg:w-[90%] lg:h-[300px]  w-[95%] md:w-[95%] mx-auto my-4 rounded-lg shadow-md relative bg-white ">
            <h1 className="lg:text-2xl sm:text-2xl text-sm mt-4 px-4">PHYSICAL INSPESTION ( 5 )</h1>
            <hr className='lg:mt-8 md:mt-8 ' />


            {/* Feature List */}
            <div className="mt-6 space-y-2  px-4">
              <p className="flex items-center gap-2">
                <span className=" text-xl">✔</span> Power cord inspection
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Electrical grounding verification
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Power supply unit inspection
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Fuser assembly inspection
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Electrical component functionality check
              </p>

            </div>
          </div>
        </div>

        {/* left SIDE — TOP BOX */}

        <div className=" flex justify-center md:ml-6 w-[95%] h-[870px] ml-2  lg:mt-10 md:mt-5  lg:w-[80%] bg-[#e8effc] rounded-2xl">
          <div className=" lg:w-[90%] md:w-[95%] w-[95%] my-4 h-[830px] rounded-lg shadow-md relative bg-white ">

            <h1 className="lg:text-2xl md:text-2xl text-sm mt-4 lg:px-4 md:px-4 px-3">ELECTRICAL AND POWER CHECK ( 15)</h1>
            <hr className='lg:mt-12 mdLmt-12' />


            <div className="mt-6 space-y-2  px-4">
              <p className="flex items-center gap-2">
                <span className="!text-blue-600 text-xl">✔</span> Power cord inspection
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Electrical grounding verification
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Power supply unit inspection
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Fuser assembly inspection
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Electrical component functionality check
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Power-on Self Test (POST)
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Paper tray functionality check
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Paper path inspection
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Carriage assembly functionality check
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Print and copy functionality check
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Scan and fax functionality check
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Network connectivity check
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> USB functionality check
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Touchscreen functionality check
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Button and control panel functionality check
              </p>
            </div>
          </div>
        </div>


        {/* RIGHT SIDE — BOTTOM BOX */}
        <div className="lg:ml-auto  flex justify-center md:ml-6 w-[95%] ml-2   lg:mt-[-520px]  lg:w-[80%] bg-[#e8effc] rounded-2xl">
          <div className=" lg:w-[90%]  md:w-[95%] w-[95%] my-4 rounded-lg shadow-md relative bg-white ">
            <h1 className="lg:text-2xl md:text-2xl  text-sm mt-4 lg:px-4 md:px-4 px-2">PRINTING MECHANISM INSPECTION ( 5 )</h1>
            <hr className='lg:mt-8 md:md-8 ' />

             
              <h3 className="flex items-center text-xl gap-2 px-4">
                Print head alignment
              </h3>
          
            <div className="mt-1 space-y-2  px-4">
              <p className="flex items-center gap-2">
                <span className=" text-xl">✔</span> Power cord inspection
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Electrical grounding verification
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Power supply unit inspection
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Fuser assembly inspection
              </p>

            </div>


             <h3 className="flex items-center text-lg gap-2 px-4">
               Toner and Ink Inspection ( 5 )
              </h3>
          
            <div className="mt-1 space-y-2  px-4">
              <p className="flex items-center gap-2">
                <span className=" text-xl">✔</span> Power cord inspection
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Electrical grounding verification
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Power supply unit inspection
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Fuser assembly inspection
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Electrical component functionality check
              </p>

            </div>
          </div>
        </div>

      </div>




    </>
  )
}

export default InspectionSection