import React from 'react'

function Reward() {
  return (
    <>
    <div className=' w-full h-auto'>
      {/* <div className=' items-center justify-center  grid grid-cols-2 lg:grid-cols-1 md:grid-cols-2'>
  <h1 className='text-center font-bold px-[20%]'>Why Buy From Printree?</h1>
  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex  items-center  lg:px-8 lg:py-2">
    <span>Contact us</span>
    <span className="text-4xl ml-2 ">→</span>
  </button>
</div> */}

<div className='flex flex-col lg:flex-row items-center justify-center '>
  <h3 className='text-center font-bold lg:px-[20%]  lg:text-4xl md:text-2xl text-lg'>Why Buy From Printree?</h3>
  <button className="bg-blue-600 hover:bg-blue-700 w-[11%] text-white rounded-lg flex items-center px-3  mt-4 lg:mt-0">
    <span>Contact us</span>
    <span className="text-4xl ml-2 ">→</span>
  </button>
</div>

        <p className='text-center lg:text-[17px] md:text-lg md:px-8 lg:px-[25%] text-lg px-12'>If your team uses more than 2 reams of paper monthly, consider upgrading to a full-size copier for your office.</p>
    
    <div className='w-full  flex justify-center items-center my-16'>
<div className='lg:w-[98%] xl:w-[80%]  gap-3 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-1'>

{/* Box--1 */}
            <div className=' md:w-[95%] w-[95%] lg:w-[95%] mx-auto md:mx-auto  !border-t-2-blue-500 p-4 relative card'>
  <div className="absolute -top-2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-xs sm:text-sm font-semibold px-2 sm:px-6 py-1 rounded-full shadow z-10">
    <img className='h-20' src="src/assets/images/win_award_icon_1-89c128609fa3fc8495c94e11ffb8992eaf6d828ebf81514766166b8636c68645.png" alt="" />
  </div>
  <img className='lg:h-16 lg:w-16 md:w-12 md:h-12 h-12 w-12 lg:my-1  relative z-0' src="src/assets/images/land_icon_1-d5e368cd662855c0a1eb4a0f89c8ac18524dd2fdba949fb0680e8cc09258b440.jpg" alt="" />
  {/* <h2 className='lg:my-4 md:my-1 md:text-xl lg:text-2xl text-xl xl:text-sm'>Quality Equipment</h2>  */}
      <h2 className='text-xl xl:text-2xl lg:my-2 md:my-1'>Quality Equipment</h2>
  <p className='lg:text-base md:text-[15px] text-base'>We ensure every copier goes through our thorough 30-point inspection list, ensuring that all refurbished copiers are in excellent working condition before being listed on our marketplace.</p>    
</div>

{/* Box--2 */}
            <div className='md:w-[95%] w-[95%] lg:w-[95%]  md:mx-auto mx-auto  border-top p-4 card'>
    <img className='lg:h-16 lg:w-16 md:w-12 md:h-12 h-12 w-12 lg:my-1 md:my-2 relative z-0' src="src/assets/images/land_icon_2-51018966c0aecd143aa8b42202e980eaf72899e7750fa0dbf713529e8e86885c.jpg" alt="" />
  <h2 className='lg:my-4 md:my-1 md:text-xl lg:text-2xl text-xl'>Below Market Pricing</h2> 
  <p className='lg:text-base md:text-[15px] text-base'>We offer our machines at a competitive discount, below the current market average, ensuring you receive exceptional quality at a remarkable value.</p>    
            </div>

{/* Box--3 */}
           <div className='md:w-[95%] w-[95%] lg:w-[95%]  mx-auto md:mx-auto  border-top p-4 card'>
    <img className='lg:h-16 lg:w-40 md:w-40 md:h-12 h-12 w-24 lg:my-1 md:my-2 relative z-0' src="src/assets/images/land_icon_3-1c63582a0ebeb5ce8d0457f4cbda3fc91bf1007b57a9f50ea4f1a5ec1fbff1fc.jpg" alt="" />
  <h2 className='lg:my-4 md:my-1 md:text-xl lg:text-2xl text-xl'>Lightning Delivery</h2> 
  <p className='lg:text-base md:text-[15px] text-base'>We are now delivering nationwide. Rest assured, your copier will be deliverd by one of our dealer network partners in 3-7 business days.
</p>    
            </div>
         </div>
    </div>
    
    
    </div>
    </>
  )
}

export default Reward