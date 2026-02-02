import image from'../assets/images/image20231019-644101-u5wqgq.webp'
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
function PrintingSection() {
  return (
   <>
   <h3 className='text-black text-center font-bold lg:text-4xl text-lg sm:text-2xl sm:px-8 md:text-2xl md:px-20 mt-24 md '>SPECIAL OFFER : HIGH QUALITY COPIERS FOR SALE - BOOK NOW!</h3>
   <h5 className='text-gray-500 text-center md:text-xl '>Select a copier according to your offices usage</h5>

  <div className='gap-5 w-full grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 '>
  {/* FIRST--CARD--1 */}
  {/* <div className='border border-1 border-black w-[80%] mx-auto'> */}
  <div className=" flex justify-center mt-10">
      <div className="lg:ml-auto lg:w-[68%] md:w-[75%] w-[90%] !border border-1 border-blue-700 rounded-lg p-6 shadow-md relative bg-white ">

        {/* Top Badge */}
       <div className="absolute -top-4 left-1/2 -translate-x-1/5 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-6 py-1 rounded-full shadow">
        Average Volume User </div>

        {/* Title Section */}
       
 <div className='flex gap-2'>
        <h1 className="text-3xl font-bold ">Xerox AltaLink C8045</h1>
        <div className='border border-1 border-gray-500 ml-auto h-8 w-7 rounded-lg'>
            <CiHeart className='text-2xl mt-1 hover:text-red-700  cursor-pointer' />
         </div>
    
        <div className='border border-1 border-gray-500  h-8 w-7 rounded-lg'>
            <FaShare className='text-2xl mt-1 text-red-700  cursor-pointer'  />
        </div>
        </div>

    
       

        <p className="text-sm text-gray-700 mt-1">
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
       <div className="flex gap-3 mt-6">
  <span className="lg:px-1 lg:py-2 md:px-1 md:py-2  bg-gray-100 text-blue-700 rounded-lg border inline-block">Pre Owned</span>
  <span className="lg:px-2 lg:py-2 md:px-2 md:py-2 bg-gray-100 text-sm rounded-lg border">Print: <span className='text-blue-700'>Color and B&W</span></span>
  <span className="lg:px-2 lg:py-2 md:px-2 md:py-2 bg-gray-100 text-sm rounded-lg border">Speed: 40-50 PPM</span>
</div>

        {/* Quantity Selector */}
        <div className="mt-6">
         

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
        </div>

        {/* Purchase Section */}
        <div className="mt-6  rounded-xl  flex justify-between items-center !border border-1 border-blue-700">
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

        {/* Feature List */}
        <div className="mt-6 space-y-2 text-gray-800">
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> MEDIUM SPEED PRINTER
          </p>

          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> HIGH CAPACITY SCANNER
          </p>

          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> FAX / STAPLE / HOLE PUNCH OPTIONS
          </p>

          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> MULTIPLE PAPER TREYS
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> HIGH QUALITY COLOR PRINT
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> SERVICE AGREEMENT OPTIONAL
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> TONER OPTIONAL
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> FREE DELIVERY
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> FREE INSTALLATION 
          </p>
        </div>
      </div>
    </div>
    {/* </div> */}
  {/* Second--CARD--2 */}
  {/* <div className=' border border-1 border-black w-[80%] mx-auto'> */}

    <div className=" flex justify-center lg:mt-10 md:mt-5">
      <div className="lg:mr-auto lg:w-[68%] md:w-[75%] w-[90%]  !border border-1 border-blue-700 rounded-lg p-6 shadow-md relative bg-white ">

        {/* Top Badge */}
       <div className="absolute -top-4 left-1/2 -translate-x-1/5 bg-red-400 text-white text-xs sm:text-sm font-semibold px-2 sm:px-6 py-1 rounded-full shadow">
          High Volume User
        </div>

        {/* Title Section */}
        <div className='flex gap-2'>
        <h1 className="text-3xl font-bold ">Xerox AltaLink C8045</h1>
        <div className='border border-1 border-gray-500 ml-auto h-8 w-7 rounded-lg'>
            <CiHeart className='text-2xl mt-1 hover:text-red-700  cursor-pointer' />
         </div>
    
        <div className='border border-1 border-gray-500  h-8 w-7 rounded-lg'>
            <FaShare className='text-2xl mt-1 text-red-700  cursor-pointer'  />
        </div>
        </div>
        <p className="text-sm text-gray-700 mt-1">
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
        <div className="flex gap-3 mt-6">
  <span className="px-1 py-2 bg-gray-100 text-blue-700 rounded-lg border inline-block">Pre Owned</span>
  <span className="px-2 py-2 bg-gray-100 text-sm rounded-lg border">Print: <span className='text-blue-700'>Color and B&W</span></span>
  <span className="px-2 py-2 bg-gray-100 text-sm rounded-lg border">Speed: 40-50 PPM</span>
</div>

        {/* Quantity Selector */}
        <div className="mt-6">
         

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
        </div>

        {/* Purchase Section */}
        <div className="mt-6  rounded-xl  flex justify-between items-center !border border-1 border-blue-700">
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

        {/* Feature List */}
          <div className="mt-6 space-y-2 text-gray-800">
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> MEDIUM SPEED PRINTER
          </p>

          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> HIGH CAPACITY SCANNER
          </p>

          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> FAX / STAPLE / HOLE PUNCH OPTIONS
          </p>

          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> MULTIPLE PAPER TREYS
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> HIGH QUALITY COLOR PRINT
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> SERVICE AGREEMENT OPTIONAL
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> TONER OPTIONAL
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> FREE DELIVERY
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> FREE INSTALLATION 
          </p>
        </div>
      </div>
    </div>
  </div>
{/* </div> */}

   </>
  )
}

export default PrintingSection