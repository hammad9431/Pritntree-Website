import { useState, useEffect } from 'react';
import imageMob from '../assets/images/mee.PNG';
import imageLg from '../assets/images/quote_page_header_product-431fb59a0cbfa4f9da25d0281acaa4edef56d9883d25d4fb7510e9fa6b67d68e.jpg';
import images from '../assets/images/quote_page_22-6d40d25f61a20e5ac44b9a4e56c810d91bb563b63f98e10b0c512ca1186913e3.svg';
import imageN from '../assets/images/show_quote_wo_tv-1e4a4b454d31dcfa5cb943b8bc5a5c6051f0a161a19a22c82a7d8e13fd60b7d2.svg';
import printimage from '../assets/images/c458.webp';

function Sales() {
  const [isLg, setIsLg] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => setIsLg(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
   
<div className='my-12 w-[98%] justify-center items-center flex'>
<div className='xl:w-[90%] border rounded-2xl lg:w-[95%] md:w-[95%] w-[95%] flex flex-col  lg:flex-row-reverse gap-10'>
    

<div
  className="rounded-2xl
    xl:w-[65%] lg:w-[90%] md:w-[100%] w-[100%] lg:h-[780px] md:h-[640px] h-[600px] 
    bg-cover bg-center"
  style={{ backgroundImage: `url(${isLg ? imageLg : imageMob})` }}
>

  {/* content */}

   {/* grid grid-cols-2 lg:grid-cols-2 */}
   {/* BCK-GROUND---TEXT */}
<div >
    <div className='flex '>
        <div className='xl:mt-12 px-2 mt-4 lg:ml-[13%] xl:ml-[20%] md:ml-[3%]'>
    <h2 className='text-white lg:my-4 md:mt-8 lg:text-3xl md:text-2xl text-[12px]'>ONE TIME CUSTOM OFFER</h2>
    <h1 className='text-white lg:my-4 lg:text-6xl md:text-4xl '>BIG SALE</h1>
    <h2 className='text-white md:text-2xl lg:text-4xl text-base'>UNTIL SUPPLY’S LAST</h2> 
    </div>
    <div >
     <img className=' px-4 lg:mt-20  lg:absolute h-20 lg:h-44 md:h-44 mt-16  xl:ml-2 md:ml-40 lg:hidden xl:inline-block' src={images} alt="" />
</div>
</div>
</div>

 {/* BCK-GROUND---IMAGE---TOOO IMAGE */}

<div>
    <div className='flex  '>
      
    <img className='h-28 lg:h-40 md:h-40 mt-20 xl:ml-[43%] lg:ml-[30%] md:ml-[19%]' src={imageN} alt="" />
  
    <div className='lg:mt-20 '>
          <h4 className='lg:mt-20  md:mt-20 mt-4 text-white lg:text-2xl xl:text-base  text-center text-xl'>SAMSUNG GALAXY TABLET</h4>
          <p className='mt-2 text-white text-center lg:text-lg text-lg'>1 FREE BOX OF PAPER</p>
</div>
</div>
</div>


{/* PURCHASE---BUTTON */}

   
 <div className="lg:mt-24 lg:w-[70%] md:w-[70%] h-16 w-[90%]  mx-auto md:mx-auto md:my-12 mt-8  xl:ml-[25%] lg:ml-40  rounded-xl  flex justify-between items-center !border border-1 bg-white">
          <div className='px-4 my-2'>
            <p className="font-semibold text-gray-600 text-[10px] mt-2">PURCHASE PRICE</p>
          <span className="inline-flex items-center gap-2 -mt-8">
  <p className="lg:text-xl md:text-xl text-sm font-bold ">$4997</p>
  <span className="lg:text-xs md:text-xs text-[8px] text-black lg:px-2 lg:py-1 md:px-2 md:py-1 px-1 rounded -mt-4"> 20% Off </span>
</span>
          </div>

          <button className="mr-2 bg-blue-600 text-white px-3 py-2 rounded-xl font-semibold text-lg hover:bg-blue-700 transition">
            Purchase
          </button>
       
    
</div>

</div>



{/* FIRST---TEXT---BOX */}
 {/* <h1>TEXT----BOX</h1> */}
    <div className=' lg:w-[35%] md:w-[100%] '>
    <div className='!border border-1 border-blue-600 my-4 m-4   rounded-3xl lg:w-[150%] xl:w-[95%]   lg:relative'>
     <h5 className=' my-1 text-center py-1 '>Nationwide Delivery : 3-7 Business days</h5>
    </div> 
         <h4 className='text-center text-blue-600 '>$4,997.00</h4>
<div className=''>
    {/* <img src="src/assets/images/image20231019-644101-u5wqgq.webp" alt="" /> */}
    <img className='md:mx-auto' src={printimage} alt="" />
</div>
    


 <div className='bg-white lg:m-4 lg:mt-16 md:m-6 py-2 rounded-lg card px-8 xl:w-[130%] lg:w-[190%]'>
       <h2 className='text-black underline deccoraotion- solid'>Konica Minolta Bizhub C458</h2> 
     <h6>Features: Copy / Print / Scan / Fax</h6>
     <h6>Delivery & Installation Included</h6>
     </div> 
<div className="lg:w-[70%] xl:w-[140%] xl:mt-4 lg:mt-20 lg:absolute xl:relative">
     <h5 className='  lg:text-lg  xl:text-center md:text-center'>Nationwide Delivery: 3-7 Business days</h5>
</div>    
    </div>
  </div>



</div>

    
    </>
  )
}

export default Sales