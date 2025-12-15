
import image from'../assets/images/image20231019-644101-u5wqgq.webp'
import image2 from '../assets/images/high_value_secIcon-e0ae34c66f2f0f9c5356002172c33f04c63f04babfa44a6fac607d1e83aabc75 (1).svg'
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
function WinnerSection() {
  return (
    <>
<div>
        <div className='justify-center items-center flex'>
            <img className='h-20 md:hidden lg:inline-block hidden' src="src/assets/images/win_award_icon_1-89c128609fa3fc8495c94e11ffb8992eaf6d828ebf81514766166b8636c68645.png" alt="" />
        <h1 className='font-bold text-lg md:text-3xl lg:text-[34px]'>THE WINNER - MOST PURCHASED</h1>
        </div>

    <div className='justify-center items-center flex gap-2'>
    <input className='mt-1 bg-green-500 text-blue-600' type='checkbox'/>
    <span className='text-[9px]'>Freen toners & automatic delivery</span>
      
    <input className='mt-1 bg-green-500 text-blue-600' type='checkbox'/>
    <span className='text-[9px]'>Next day free repairs & service</span>
        </div>
</div>

{/* UPPER---TEXT SECTION---END */}

{/* grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1  */}
<div className='lg:w-[90%] md:w-[95%] justify-center items-center mx-auto'>
<div className='flex lg:flex-row md:flex-col flex-col !border border-1 border-green-500'>
    <div className=' lg:w-[40%] md:w-full'>
        {/* <h1>Box---Image---1</h1> */}

 <div className=" flex justify-center ">
      <div className="!border border-1 border-blue-700 rounded-xl card md:my-4 my-4 w-[90%] md:w-[100%] lg:p-6 md:p-6 p-2 shadow-md relative bg-white ">
        {/* Title Section */}
        <div className='flex gap-2'>
        <h1 className="lg:text-xl md:text-3xl text-base font-bold ">Xerox AltaLink C8045</h1>
        <div className='border border-1 border-gray-500 ml-auto h-8 w-7 rounded-lg'>
            <CiHeart className='text-2xl mt-1 hover:text-red-700  cursor-pointer' />
         </div>
    
        <div className='border border-1 border-gray-500  h-8 w-7 rounded-lg'>
            <FaShare className='text-2xl mt-1 text-red-700  cursor-pointer'  />
        </div>
        </div>
        <p className="lg:text-sm md:text-sm text-[10px] text-gray-700 mt-1">
          Xerox Alta Link C8045 / refurbished copier - color copier, copy machine,
          color printer and scanner
        </p>

        {/* Product Image */}
        <div className="w-full flex justify-center mt-5">
          <img
            src={image}
            alt="product"
            className="w-60 md:w-72"
          />
        </div>

        {/* Badges Row */}
       <div className="flex gap-3 mt-6 mx-auto">
  <span className="lg:px-1 lg:py-2 md:px-1 md:py-2  bg-gray-100 text-blue-700 rounded-lg border inline-block">Pre Owned</span>
  <span className="lg:px-2 lg:py-2 md:px-2 md:py-2 bg-gray-100 text-sm rounded-lg border">Print: <span className='text-blue-700'>Color and B&W</span></span>
  <span className="lg:px-2 lg:py-2 md:px-2 md:py-2 bg-gray-100 text-sm rounded-lg border">Speed: 40-50 PPM</span>
</div>

        {/* Quantity Selector */}
        <div className="mt-6 flex !border border-1 border-red-600 ">
         

          <div className="flex items-center gap-2 mt-2">
             <p className="text-md font-sm mt-3">Quantity</p>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 text-xl rounded-md border hover:bg-gray-200">
              -
            </button>

            <p className="text-xl font-semibold mt-3">1</p>

            <button className="w-8 h-8 flex items-center text-blue-700 justify-center bg-gray-100 text-xl rounded-md border hover:bg-gray-200">
              +
            </button>
          </div>

          <buttion className='bg-gray-100 rounded-2xl lg:h-10 md:h-10 ml-2  lg:ml-auto md:ml-auto lg:px-4 md:px-4 mt-3'><p className='my-1 text-center'>Add Accessories</p></buttion>
        </div>

        {/* Purchase Section */}
        <div className="mt-6  rounded-xl w-[100%] flex justify-between items-center !border border-1 border-blue-700">
          <div className='p-2'>
            <p className="font-semibold text-gray-600 text-[10px]">PURCHASE PRICE</p>
          <span className="inline-flex items-center gap-2 -mt-8">
  <p className="lg:text-xl md:text-xl text-sm font-bold ">$4750</p>
  <span className="lg:text-xs md:text-xs text-[8px] bg-green-100 text-green-600 lg:px-2 lg:py-1 md:px-2 md:py-1 px-1 rounded -mt-4"> 0% discount </span>
</span>
          </div>

          <button className="mr-2 bg-blue-600 text-white px-3 py-2 rounded-xl font-semibold text-lg hover:bg-blue-700 transition">
            Purchase
          </button>
        </div>

      </div>
    </div>
</div>

{/* SECOND---box---2 */}
    <div className='border border-1 border-black my-3  lg:w-[60%] md:w-[100%] bg-[#e8effc]'>
        {/* <h1>Box---Text---2</h1> */}
        <h1 className='text-center my-4 font-bold md:text-2xl lg:text-3xl text-xl'>OVER 400 ORDERS DELIVERED</h1>
        <p className='text-center lg:text-base md:text-base'>Now delivering Nationwide - 3-7 Business day lightning delivery!</p>
       {/* Small---BOXES--1  */}
<div className=' flex my-4 flex-row justify-center gap-3 !border border-1 border-red-600'>
       <div className='flex-col '>
         <div className=' bg-white lg:w-16  md:w-12 w-12 card'>
        <p className='text-center lg:text-5xl md:text-4xl text-4xl mt-2 md:mt-2 text-gray-700'>4</p>
        </div>
        <p className='text-2xl text-center'>#</p>
        </div> 
          {/* Small---BOXES--2  */}
        
         <div className='flex-col '>
         <div className=' bg-white lg:w-16  md:w-12 w-12 card'>
        <p className='text-center lg:text-5xl md:text-4xl text-4xl mt-2 md:mt-2 text-gray-700'>2</p>
        </div>
        <p className='lg:text-2xl md:text-2xl text-lg text-center'>of</p>
        </div> 
          {/* Small---BOXES--3  */}
        <div className='flex-col '>
         <div className=' bg-white lg:w-16  md:w-12 w-12 card'>
        <p className='text-center lg:text-5xl md:text-4xl text-4xl mt-2 md:mt-2 text-gray-700'>3</p>
        </div>
        <p className='lg:text-2xl md:text-2xl text-lg text-center'>Orders</p>
        </div> 
</div>
{/* SMALL --- BOX ---END */}
        

<div className='justify-center items-center flex  mx-auto border border-1 border-black'>
    <img className='lg:h-32 md:h-32 h-24' src={image2} alt="" />
</div>
<div className='text-center'>
<h3 className='md:text-2xl lg:text-xl text-xl mt-3'>Full Warranty Included</h3>
<p className='lg:text-xl md:text-xl text-xl text-gray-500'>Comes with a Full Warranty!</p>
</div>

{/* Button---Section */}
   

            <button className="mx-auto  my-4 h-12 w-[150px]  bg-blue-700 text-white flex items-center text-xl px-3 rounded">
            <span className='mx-auto'>Purshase</span> <span className="px-2 text-2xl"><MdArrowOutward /></span>
            </button>
            <button className="mx-auto h-12 w-[150px]  bg-blue-700 text-white flex items-center text-base px-3 rounded">
            <span className='mx-auto'>Contact us</span> <span className="px-2"><FaArrowRight /></span>
            </button>

            {/* <button className="h-12 lg:w-[170px] md:w-[170px] ml-auto lg:ml-0 rounded text-blue-500 flex items-center text-xl px-4 border border-gray-300">
              Shop Now
            </button> */}
        


        </div>
</div>
</div>
    </>
  )
}

export default WinnerSection