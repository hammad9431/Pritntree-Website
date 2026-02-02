

import image1 from'../assets/images/trusted_2-899fc9864160ff5daf125da3b707d15dcb97b5f38d09aaa8ae0c2c983ba21b78.png'
import image2 from '../assets/images/WhatsApp_Image_2025-12-07_at_22.27.34_727efba7-removebg-preview.png'
// import image2 from '../assets/images/sale_page_1-29f35d020a61dcfddcd991ec72633bc6b0ebca1d2785354f45f22d24b7972c91.png'
function SalesShope() {
  return (
    <>
<div className=' lg:py-10 py-14 sm:py-8'>
  <div className='mx-auto w-fit flex items-center gap-2'>

    <img className='h-28 hidden lg:inline md:inline' src={image1} alt="" />

    <h1 className='lg:text-4xl md:text-4xl text-xl sm:text-2xl font-bold '>VOTED #1 COPIER IN 2024</h1>
</div>
<p className='text-center lg:text-base md:text-lg sm:text-base'>GET YOUR HANDS ON THE #1 COPIER IN 2024. TRUSTED BY THOUSANDS OF <br/> BUSINESS WORLDWIDE. GREAT FOR HIGH VOLUME COLOR</p>
 
 <div
class="bg-[#2143AC]   lg:w-[85%] md:w-[98%] w-[97%] md:py-10 py-2  mx-auto rounded-2xl bg-cover bg-center"
      >   
{/* grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 */}
<div className="flex lg:flex-row md:flex-col flex-col gap-10 lg:px-10 md:px-10 px-2 w-full">

  <div className='lg:w-[40%] md:w-[100%] w-[100%] lg:my-16 md:my-4 md:mx-auto mx-auto py-3 lg:ml-20 rounded-lg'>
   <div className='bg-white lg:m-4 md:m-6 m-3 md:my-6 py-2  lg:py-2 md:py-1 rounded-lg'>
     <h3 className='text-blue-700 font-bold text-center'>The Best Seller</h3>
    </div> 
    <img className='md:mx-auto sm:mx-auto' src={image2} alt="" />
     <div className='bg-white lg:m-4 md:m-6 py-2 rounded-lg '>
       <h3 className='text-blue-700 text-center '>Konica Minolta Bizhub C458</h3> 
     </div> 
     </div>

  <div className=' mt-4 !border border-green-600 py-4 lg:w-[60%] md:w-[100%] w-[97%]  md:py-10 md:mx-auto ml-1  bg-[#e8effc] rounded-2xl'>
    {/* <h1>Box--2</h1> */}

    <div className="flex gap-3  px-4">
  <span className="px-1 py-2 bg-gray-100 text-blue-700 rounded-lg border inline-block">Pre Owned</span>
  <span className="px-2 py-2 bg-gray-100 text-sm rounded-lg border">Print: <span className='text-blue-700'>Color and B&W</span></span>
  <span className="px-2 py-2 bg-gray-100 text-sm rounded-lg border">Speed: 40-50 PPM</span>
</div>




<div class="w-full p-6  
     grid grid-cols-3 items-center 
     gap-6">

    {/* <!-- LEFT BUTTONS --> */}
    <div class="flex flex-col lg:gap-3 md:gap-3 ">
        {/* <button class="bg-white px-3 py-3 rounded-full shadow text-sm font-medium">
            Select A Service Plan
        </button> */}
        <button class="bg-white lg:px-3 md:px-3 lg:py-2 md:py-2 px-2 py-1 rounded-full shadow text-sm font-medium"> 
          Select A Service Plan </button>
        <button class="bg-white px-3 py-2 rounded-full shadow text-sm font-medium">
            Add Accessories
        </button>
    </div>

    {/* <!-- QUANTITY --> */}
    <div class="flex flex-col items-center">
        <span class="text-sm text-gray-700 mb-1">Quantity</span>
        <div class="flex items-center space-x-3">
            <button class="w-8 h-8 flex items-center justify-center bg-white rounded shadow text-gray-600">−</button>
            <span class="text-lg font-semibold">1</span>
            <button class="w-8 h-8 flex items-center justify-center bg-white rounded shadow text-blue-600">+</button>
        </div>
    </div>

    {/* <!-- CONTACT BUTTON --> */}
    <button class="hidden bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg  items-center space-x-2 justify-center">
        <span>Contact us</span>
        <span class="text-lg">→</span>
    </button>

</div>



{/* Quality ---End */}


<div className='bg-red-50  rounded-lg md:m-3 border border-1 border-black'>
<div className='bg-white m-3 py-4 rounded-lg'>
  <h5 className='text-blue-700 text-center underline decoration-solid'>What’s Included</h5> 
</div>
<div className='bg-white m-2 h-8 my-2 rounded-lg'>
 <p className='text-blue-700 px-2'>Deliver & Installation Included</p>
 </div>



{/* Purchase--Button */}
 <div className="mt-6 bg-white rounded-xl m-2 flex justify-between items-center !border border-1 border-blue-700">
          <div className='px-2'>
            <p className="font-semibold text-gray-600 text-[10px]">PURCHASE PRICE</p>
          <span className="inline-flex items-center gap-2 -mt-8">
  <p className="lg:text-xl md:text-xl text-sm font-bold ">$4997</p>
  <span className="lg:text-xs md:text-xs text-[8px] bg-green-100 text-green-600 lg:px-2 lg:py-1 md:px-2 md:py-1 px-1 rounded -mt-4"> 20.0% discount </span>
</span>
          </div>

          <button className="mr-2 bg-blue-600 text-white px-3 py-2 rounded-xl font-semibold text-lg hover:bg-blue-700 transition">
            Purchase
          </button>
        </div>

</div>


  </div>

</div>

</div>  

 
</div>

    </>
  )
}

export default SalesShope