import image1 from '../assets/images/ask_q_sec-7e4e81bbf0425f4aec9ee4a188d9749fd21a26102fe86db7de6c0976658eaba4.jpg'

function ContactUs() {
  return (
    <>
<div className='w-full  '>
    <div className='w-[85%] justify-center items-center place-content-center mx-auto'>
  <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-14'>
    <div >
        {/* <h1>IMAGE----BOX----1</h1> */}
        <img className='rounded-xl h-auto w-full' src={image1} alt="" />
        </div>
    <div >
        {/* <h1>text----BOX----2</h1> */}
        <h1 className='font-bold lg:text-2xl xl:text-4xl text-lg'>Questions ? Get in touch with us! We’re here to help</h1>
        <p className='xl:text-[21px] lg:text-[20px] text-gray-600'>Fill out the form below and let us know how we can help you to choose best machine.</p>
        <p className='xl:text-xl lg:text-base  text-gray-600'>Please complete all fields marked with an asterisk (*)</p>
        {/* <div className='flex justify-end relative'>
        <input className='mt-[-16px] h-24 w-full px-2 rounded-md border border-1 border-black opacity-30 text-black text-lg' placeholder='Full Name' />
        <h1 className='text-red-500 -mt-6'>*</h1>
        </div> */}

        <div className='flex justify-end relative'>
  <input className=' lg:h-24 h-[75px] md:h-[75px] w-full px-2 rounded-md border border-1 border-black opacity-30 text-black text-lg' placeholder='Full Name' />
  <h1 className='absolute mr-2  text-red-500'>*</h1>
</div>
        
        
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-end relative lg:gap-5'>
        <input className='mt-[16px] h-[75px] lg:h-24 md:h-[78px] lg:w-[100%]  px-2 rounded-md border border-1 border-black opacity-30 text-black text-lg' placeholder='Email' />
          <h1 className='absolute mr-2 mt-3 text-red-500'>*</h1>

        <input className='mt-[16px] h-[75px] lg:h-24 md:h-[78px] lg:w-[100%]  px-2 rounded-md border border-1 border-black opacity-30 text-black text-lg' placeholder='Phone' />

        </div>
    <div className='flex justify-end relative my-3'>
       <input className='lg:h-24 md:h-[75px] h-[75px] w-full px-2 border rounded-md border-1 border-black opacity-30 text-black text-lg' placeholder='Type Your message here...' />
         <h1 className='absolute mr-2  text-red-500'>*</h1>

</div>
<div className='flex lg:justify-end md:justify-center justify-center'>
  <button className='bg-blue-700 text-white lg:mt-4 md:mt-1 h-12 px-6 rounded-md text-xl'>Submit</button>
</div>        {/* <div ></div> */}
        </div>
  </div>
</div>

</div>
    </>
  )
}

export default ContactUs