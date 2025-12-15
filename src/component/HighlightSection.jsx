import logo1 from '../assets/images/bill-7e3940dd82404b9cbb359f4a20d663c0282b3b69baf9623b8cc40e2140b0ffc8.svg'
import logo2 from '../assets/images/truck_white-b9490ba57a8efa4c4fbdc162481ee85f785d3bd19738a78089695e125a9a473d.svg'
import logo3 from '../assets/images/support-667170aa4fc31b0ce2b2eee64414cd75a159ead135320e3158c7a36d05a4a8ff.svg'
import logo4 from '../assets/images/fair_price-a0498557368cf6988cca45ca5f24d3621feda84727f9e37dc2330b0e3d2eee2c.svg'
function HighlightSection() {
  return (
    <>
    <div className="lg:w-full  lg:my-4 w-full md:h-20 xl:h-28 lg:h-28 h-20   flex bg-blue-700 xl:px-14 lg:px-0 lg:gap-10 md:gap-5  mt-8">
<div className="lg:w-[25%] md:w-[36%] w-[25.4%] md:px-4">
   <div className='lg:mt-10 mt-7 md:mt-7  flex'>
    <img src={logo1} alt="" className='md:h-4 lg:h-4 xl:h-7 h-3 sm:h-4' />
    <p className='text-white  md:text-[11px] lg:text-sm xl:text-lg text-[7px] sm:text-xs'>SECURE PAYMENT</p>
  </div>
  <p className='text-white  -mt-4 md:text-[10px] lg:text-sm xl:text-base   text-[7px] sm:text-xs '>100% Secure Payment</p>
</div>

<div className="lg:w-[25%] md:w-[36%] w-[25.4%] ">
   <div className='lg:mt-10 mt-7 md:mt-7  flex'>
    <img src={logo2} alt="" className='md:h-4 lg:h-4 xl:h-7 h-3 sm:h-4' />
    <p className='text-white md:text-[11px] lg:text-sm xl:text-lg text-[7px] sm:text-xs'>FAST DELIVERY</p>
  </div>
  <p className='text-white  -mt-4 md:text-[10px] lg:text-sm xl:text-sm text-[6px] sm:text-xs'>Delivery in 3-7 Business Days</p>
</div>

<div className="lg:w-[25%] md:w-[36%] w-[25.4%] ">
   <div className='lg:mt-10 mt-7 md:mt-7  flex'>
    <img src={logo3} alt="" className='md:h-4 lg:h-4 xl:h-7 h-3 sm:h-4' />
    <p className='text-white  md:text-[11px] lg:text-sm xl:text-lg text-[7px] sm:text-xs'>Help Center</p>
  </div>
  <p className='text-white  -mt-4 md:text-[10px] lg:text-base xl:text-base text-[7px] sm:text-xs'>100% Secure Payment</p>
</div>

<div className="lg:w-[25%] md:w-[36%] w-[25.4%] ">
   <div className='lg:mt-10 mt-7 md:mt-7  flex '>
    <img src={logo4} alt="" className='md:h-4 lg:h-4 xl:h-7 h-3'sm:h-4 />
    <p className='text-white  md:text-[11px] lg:text-sm xl:text-lg text-[7px] sm:text-xs'>Fair PriceGuarantee</p>
  </div>
  <p className='text-white  -mt-4 md:text-[10px] lg:text-sm xl:text-base text-[6px] sm:text-xs'>Premium Refurbished Copier</p>
</div>

    </div>
    </>
  )
}

export default HighlightSection