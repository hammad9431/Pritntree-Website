import { useState, useEffect } from 'react';
import imageMob from '../assets/images/printree_proccess_1_mob-9d12e5c1f25a6127372128435a1e0f1f0d7ee5f50c6d1aaa249faa4c557a49e8.jpg';
import imageLg from '../assets/images/printree_proccess_1-691e8b508eb4153a65a2d0f07b38fd37ddd0280dd2982931d958c687c7857c83.jpg';

function Image() {
  const [isLg, setIsLg] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => setIsLg(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
    <div className='xl:w-[100%] lg:w-[98%] mx-auto md:my-40 mt-40 xl:my-4 lg:my-16'>
      <div
     className="w-full xl:w-[95%] mx-auto xl:h-[580px] lg:h-[480px] md:h-[1700px] bg-no-repeat bg-cover"
     style={{ backgroundImage: `url(${isLg ? imageLg : imageMob})` }}>



 <div className="w-[100%] flex mx-auto relative ">

        {/* LEFT TOP CONTENT */}
        <div className="max-w-md  xl:mt-20 px-2 lg:mt-2 md:mt-[-13%] mt-[-40%]">
          <p className="text-blue-600 text-base font-semibold mb-2 xl:px-11 md:px-4 lg:px-4">
            3 Steps to Done!
          </p>

          <h5 className="lg:text-base xl:text-base font-bold mb-3 md:text-base text-sm xl:px-11 lg:px-4 md:px-4">
            The Printree Process
          </h5>

          <p className="text-gray-600 mb-6 lg:text-sm md:text-[13px] text-sm md:px-4 xl:px-11 lg:px-2">
            We’ve simplified the copier buying process. You’re now
            only 3 steps away from getting your copier delivered.
          </p>

          <button className="md:hidden lg:inline hidden bg-indigo-900 text-white px-6 py-3 rounded-lg xl:ml-11 lg:ml-4">
            Buy Now
          </button>
        </div>




          <div className="ml-auto w-[30%] hidden lg:inline  mt-28   ">
           
            <h5 className="font-semibold mt-8 ml-40 lg:text-base md:text-base">
              Accept Delivery
            </h5>
            <p className="text-sm text-gray-600 mt-2 ml-40">
           Your copier will be delivered no later that 7 
           business days.We will deliver install your copier for free.
            </p>
          </div>
</div>
        {/* STEPS */}
        <div className="xl:mt-36 lg:mt-8 md:mt-[40%] w-full flex relative  ">

          {/* STEP 1 */}
          <div className="px-12 mt-8 xl:w-[44%] lg:w-[50%]  md:w-[100%] ">
         
            <h5 className="font-semibold mt-12 lg:text-base text-base md:text-base">
              Choose your Copierllll
            </h5>
            <p className="text-sm text-gray-600 mt-2">
           Select a copier from that’s perfect for you.<br className='lg:hidden hidden md:hidden xl:inline'/>
            We carry all the major brands and models.
            </p>
          </div>




          {/* STEP 2 */}
          <div className="md:hidden hidden lg:inline xl:w-[27%] lg:w-[47%]   ml-20">
            
            <h5 className="font-semibold xl:mt-8 lg:mt-4 text-base xl:px-8">
              Book your Order
            </h5>
            <p className="text-sm text-gray-600 mt-2 xl:px-8">
            Add your copier to your cart and head over <br className='lg:hidden xl:inline'/> to the checkout page to book your order
            </p>
          </div>

          
        

        </div>

<div className=" mt-20  w-[100%]  lg:hidden md:inline xl:hidden">
           
            <h5 className="text-center font-semibold mt-[66%] text-base md:text-base">
             Book your Order
            </h5>
            <p className="text-sm text-gray-600 mt-2 px-10 ml-7">
            Add your copier to your cart and head over to the checkout page to book your order.
            </p>
          </div>






          <div className="  w-[100%]  lg:hidden md:inline xl:hidden">
           
            <h5 className="font-semibold mt-[60%]   text-base ml-12 text-[14px]">
            Accept Delivery
            </h5>
            <p className="text-sm text-gray-600 mt-2 px-12">
Your copier will be delivered no later that 7 business days. 
We will deliver and even help you <br/> install your copier for free.            </p>
          </div>

         
      </div>


      </div>



    </>
  )
}

export default Image;
