import { useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/printree-ee516c6629087bfaf75e7dab71d5d5a2b4a1337f180818f5a80da55898756501.svg";
import logo1 from "../assets/images/logo-vector-b3e2ff39671b5410e1034b189ff89134f8246f8d6c45013adb7a42936ce36c29.svg";
import image2 from'../assets/images/locked_bg-01b60f18d1af556b04a01b8a8544e07cce106941bdbf24b90126dbf086cbbb58.webp'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RxDotFilled } from "react-icons/rx";
import { CiCirclePlus } from "react-icons/ci";
import { GrSubtractCircle } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";

// import { useRef } from 'react';
// import { Stepper } from 'primereact/stepper';
// import { StepperPanel } from 'primereact/stepperpanel';
// import { Button } from 'primereact/button';

        


        


export default function Navbar() {
//  const stepperRef = useRef(null);

  const [lgShow, setLgShow] = useState(false);

  const [open, setOpen] = useState(false);

  const [change,setchange]=useState(false)
  const [change2,setchange2]=useState(false)
  const [change3,setchange3]=useState(false)
  const [change4,setchange4]=useState(false)

  

  const showalert=()=>{
    alert('Please select atleast one option!')
  } 

  const fields = [
  {
    name: "color",
    label: "Color:",
   placeholder: "Select Color",
    options: ["Black And White", "Color And BW"],
  },
  {
    name: "brand",
    label: "Brand:",
    placeholder: "Select Brand",
    options: ["Konica Minolta", "Toshiba", "Sharp","Xerox", "Lexmark", "Ricoh"],
  },
  {
    name: "Condition",
    label: "Condition:",
    placeholder: "Select Condition",
    options: ["New", "Pre Owned", ],
  },
  {
    name: "Speed",
    label: "Speed:",
    placeholder: "Select Speed",
    options: ["20-30 PPM", "30-40 PPM", "40-50 PPM","50-60 PPM", "60-70 PPM", "70-80 PPM","80-90 PPM","90-100 PPM"],
  },
];
const Adds = [
  { checkbox: true, icon: CiCircleQuestion, text: "Fax" },
  { checkbox: true, icon: CiCircleQuestion, text: "Staplers" },
  { checkbox: true, icon: CiCircleQuestion, text: "Heavy Stapling" },
  { checkbox: true, icon: CiCircleQuestion, text: "Hole Punch" },
  { checkbox: true, icon: CiCircleQuestion, text: "Heavy Hole Punch" },
  { checkbox: true, icon: CiCircleQuestion, text: "Fold" },
  { checkbox: true, icon: CiCircleQuestion, text: "Heavy Fold" },
  { checkbox: true, icon: CiCircleQuestion, text: "Booklet Market" },
  { checkbox: true, icon: CiCircleQuestion, text: "Heavy Booklet Market" },
  { checkbox: true, icon: CiCircleQuestion, text: "Large Capacity Tray" },
];

const Quotes=[
  { label1: "Company Name:",placeholder1: "Inser Company name"},
  { label1: "Name:",placeholder1: "Inser name"},
  { label1: "Email:",placeholder1: "Inser email"},
  { label1: "Phone Number:",placeholder1: "Inser Phone Numbe"},
]
const [form, setForm] = useState({});
const [selectedOptions, setSelectedOptions] = useState({});
// const handleChange = (name, value) => {
//   setForm((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setSelectedOptions({ ...selectedOptions, [name]: value });
  };


//  const clearField = (fieldName,checkbox) => {
//   setForm(prevForm => {
//     const newForm = { ...prevForm };
//     delete newForm[fieldName];
//     delete newForm[checkbox];
//     return newForm;
//   });
// };

const clearField = (fieldName) => {
  setForm(prevForm => {
    const newForm = { ...prevForm };
    delete newForm[fieldName];
    return newForm;
  });
};


   return (
    <>
     <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="justify-center flex h-8 border border-1 -black">
            <img src="src/assets/images/locked_2-ee6a23954932cc558f1fc6a74047432d103e16977fffb5f7b37ae4ada39cc213.svg" alt="" />
            </div>
            <p className="justify-center flex text-[16px] text-black font-bold">Custom Quote Generator</p>
             <div className="flex justify-center gap-2 h-[60px] !border border-1 border-blue-600 lg:w-[30%] md:w-[70%] w-[95%] mx-auto rounded-lg">
              <img className="h-12 text-center" src="src/assets/images/trusted_seller-b812cff386805b416cee6d5b5f484eca187873446ec8374a2a616183be271e37.webp" alt="" />
              <div className="flex-col ">
              <p className=" text-base text-black mt-2">Talk With A Copier Expert</p>
              <p className="text-center -mt-5 text-blue-700">(877) 777-7419</p>
             </div>
             </div>

             <div className="flex w-[93%] mx-auto gap-8 border border-1 border-black">
              <div className=" w-[33%] bg-white  border-0 shadow-lg lg:inline md:hidden hidden ">
                <p className=" text-sm text-black text-center font-sans">Your selected Copier</p>
                <div className="border border-1 border-black ">
              <img src="src/assets/images/full_size_copier-1a94293f0e9f2ccb15a606cbea5b9d4b41c8057d461a252146376b66ab3b43e6.webp" alt="" />


<div className="grid grid-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 ">
  {Object.entries(form).map(([name, value]) => {
    const field = fields.find(f => f.name === name);

    return (
      <div
        key={name}
        className=" mx-auto border rounded border- flex justify-center px-2"
      >
        <p className="font-semibold text-sm my-1">
          {field?.label || name}
        </p>
        <p className="text-gray-700 text-sm my-1">{value}</p>
       
      </div>
    );
  })}
</div>

                </div>
               <div  className="rounded-lg" style={{backgroundImage:`url(${image2})`}}>
                <div className="card m-2">
                   <div className="justify-center flex h-8 ">
                   <img src="src/assets/images/locked_2-ee6a23954932cc558f1fc6a74047432d103e16977fffb5f7b37ae4ada39cc213.svg" alt="" />
                    </div>
                  <p className="text-center">Calculating your custom price...</p>
                  <p className="text-center text-[11px]">Your quote is almost ready! Just one step left to unlock it</p>
                </div>
               </div>
               {/* BACKGROUND--IMAGE --END */}
               <div className="flex justify-center text-center mt-8">
                <div className="flex  border border-1 border-black">
               <h6 className="  text-blue-700 ml-auto text-lg font-blod">We Make It Easy for You</h6>
              <img className="h-8  mx-auto" src="src/assets/images/trusted_seller-b812cff386805b416cee6d5b5f484eca187873446ec8374a2a616183be271e37.webp" alt="" />
              </div>
               </div>
               {/* LAST--SECTION */}
               <div className="bg-[#e8effc] px-2 m-2 rounded-lg">
                <span className="flex gap-2"><RxDotFilled className="mt-1" />
                <p className="text-[14px] text-black">No Obligation!</p></span>
                <p className="text-[12px] px-4 -mt-4">Filling out this form doesn’t lock you into anything. It’s free, fast, and hassle-free.</p>
               
                <span className="flex gap-2 -mt-4"><RxDotFilled className="mt-1" />
                <p className="text-[14px] text-black">No Hidden Fees! 💵</p></span>
                <p className="text-[12px] px-4 -mt-4">Get a clear, transparent quote with no surprises. Know exactly what you're paying for upfront.</p>

                 <span className="flex gap-2 -mt-4"><RxDotFilled className="mt-1" />
                <p className="text-[14px] text-black">No Pushy Sales Tactics! 🤝</p></span>
                <p className="text-[12px] px-4 -mt-4">We're here to help, not to pressure. Our team is ready to answer your questions and guide you toward the best</p>
               
               <span className="flex gap-2 -mt-4"><RxDotFilled className="mt-1" />
                <p className="text-[14px] text-black">100% Tailored to You! ✨</p></span>
                <p className="text-[12px] px-4 -mt-4">We're here to help, not to pressure. Our team is ready to answer your questions and guide you toward the best</p>

               </div>
              </div>
              <div className="!border border-1 border-green-600 lg:w-[58%] md:w-[100%]">
                
              <h6 className="text-[16px] lg:text-center md:px-3">Answer the following 3 questions and get your customized quotes on the next page</h6>
               
               {/* SELECTED---SECTION--1 */}
             <div className="shadow-lg flex  cursor-pointer mx-4 px-4 py-3 rounded-tl-lg rounded-tr-lg bg-white " 
              onClick={() => setchange(!change)}
             >
              
            {!change && <h6 className="">1. Select your Equipment</h6>}
              {!change && <CiCirclePlus className=" mt-1 ml-auto text-2xl text-blue-700" />}
              {change && <GrSubtractCircle className=" mt-1 ml-auto text-2xl text-blue-500" />}
             </div>
             {change && (
               <div className=" shadow-xl bg-white rounded-bl-lg rounded-br-lg  mx-4">
              <h6 className="text-center">Select your Equipment</h6>
              <p className="lg:text-[12px] md:rounded-lg text-[8px] text-center">Choose your equipment, feel free to select more than 1 option</p>
             <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto justify-center px-2 md:px-8 lg:px-12">

{fields.map((field) => (
  <div key={field.name} className="flex flex-col">
    <label className="text-lg font-medium">
      {field.label}
    </label>

   <div className="relative">

            <input
  className="w-[100%] px-2 py-2 lg:pr-9 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  list={field.name}
  placeholder={field.placeholder}
  value={form[field.name] || ""}
  onChange={(e) => handleChange(field.name, e.target.value)}
/>


           
            {form[field.name] && (
              <button
                type="button"
                onClick={() => clearField(field.name)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                <RxCross2 size={16} />
              </button>
            )}
          </div>

    <datalist id={field.name}>
      {field.options.map((opt) => (
        <option key={opt} value={opt} />
      ))}
    </datalist>
  </div>
))}
              </div>
              <div className="flex justify-end px-8 my-4">
              <button className="bg-blue-700 text-white px-3 rounded-lg py-1 hover:opacity-25 transition-shadow" onClick={showalert}>Next</button>
              </div>  
             </div>
             )}



 <div className="shadow-lg flex  cursor-pointer mx-4 px-4 py-3 rounded-tl-lg rounded-tr-lg bg-white mt-3"
       onClick={()=>{setchange2(!change2)}}
 >
              
           {!change2 && <h6 className="">2. Select your Add-Ons</h6>} 
             {!change2 && <CiCirclePlus className=" mt-1 ml-auto text-2xl text-blue-700" />}
            {change2 && <GrSubtractCircle className=" mt-1 ml-auto text-2xl text-blue-500" />}
             </div>
{change2 && (
  <div className=" shadow-xl bg-white mx-4 rounded-bl-lg rounded-br-lg">
              <h6 className="text-center">Select your Add-on's</h6>
              <p className="text-[12px] text-center">*All add-on’s are optional</p>

 <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2 lg:px-12 md:px-4">
  {Adds.map((item, index) => (
    <div key={index} className="flex items-center gap-2">
      {item.checkbox && 
    <input
  type="checkbox"
  className="h-6 w-6"
  checked={form[item.text] || false}
  onChange={(e) => {
    if (e.target.checked) {
      handleChange(item.text, true);   
    } else {
      clearField(item.text);           
    }
  }}
/>


      }
      {item.icon && <item.icon className="text-lg text-black" />}
      {item.text && <p className="text-base my-1 text-black">{item.text}</p>}
    </div>
  ))}
</div>

              {/* <div className="flex relative px-12">
             <div className="flex gap-1">
              <input 
               className="h-6 w-6"
               type="checkbox"/>
               <CiCircleQuestion className="text-lg text-red-600" />
               <p className="text-lg -mt-1">Fax</p>
               </div>
               </div> */}
  </div>

)}
      {/* per Month */}
     <div className="shadow-lg flex  cursor-pointer mx-4 px-4 py-3 rounded-tl-lg rounded-tr-lg bg-white mt-3" 
              onClick={() => setchange3(!change3)}
             >
              
            { !change3 && <h6 className="">3.How Much Do You Print Per Month?</h6>}
            {!change3 && <CiCirclePlus className=" mt-1 ml-auto text-2xl text-blue-700" />}
            {change3 && <GrSubtractCircle className=" mt-1 ml-auto text-2xl text-blue-500" />}
             </div> 
           {change3 &&(
              <div className=" shadow-xl bg-white mx-4 rounded-bl-lg rounded-br-lg">
              <h6 className="text-center">How Much Do You Print Per Month?</h6>
              <p className="text-[12px] text-center">*Please be as specific as you can, it will affect your quote</p>
               
               <div className="px-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
              
               <input className="bg-slate-100 rounded-lg md:w-[70%] md:mx-auto lg:px-2 py-2" type="number"/>
               <input className="bg-slate-100 rounded-lg md:w-[70%] md:mx-auto py-2" type="number"/>

                 </div>
                 <div className="flex justify-end px-8 my-4">
              <button className="bg-blue-700 text-white px-3 rounded-lg py-1 hover:opacity-25 transition-shadow" onClick={showalert}>Next</button>
              </div>  
               
               </div>
           )}



{/* 4----Quote is READY */}
      
      <div className="shadow-lg flex  cursor-pointer mx-4 px-4 py-3 rounded-tl-lg rounded-tr-lg bg-white mt-3" 
              onClick={() => setchange4(!change4)}
             >
              
            { !change4 && <h6 className="">See my Quotes</h6>}
            {!change4 && <CiCirclePlus className=" mt-1 ml-auto text-2xl text-blue-500" />}
            {change4 && <GrSubtractCircle className=" mt-1 ml-auto text-2xl text-blue-500" />}
             </div> 
            {change4 && (
               <div className=" shadow-xl bg-white mx-4 rounded-bl-lg rounded-br-lg">
              <div className="justify-center flex">
                <img className="h-8" src="src/assets/images/locked_2-ee6a23954932cc558f1fc6a74047432d103e16977fffb5f7b37ae4ada39cc213.svg" alt="" />
              </div>
              <h4 className="text-center">Your Quote is READY!</h4>
              <p className="text-[12px] text-center text-green-500 mt-4">This Quote is Personalized for Your Business</p>
            
 <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:px-24 lg:px-12 px-2">
              {Quotes.map((field,index)=>{
                return(
                
                     <div className="flex flex-col" key={index}>
                  
    <label className="text-lg font-medium">
        {field.label1}
    </label>

   <div className="relative">
    <input 
    className="w-full mx-auto px-2 py-2 pr-9 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
     placeholder={field.placeholder1}
    />
           
          </div>
          </div>
          
            )})}
 </div>
 <div className="flex justify-end px-8 my-4">
              <button className="bg-blue-700 text-white px-3 rounded-lg py-1 hover:opacity-25 transition-shadow" onClick={showalert}>Next</button>
              </div> 

    </div>
            )}

              
 



        </div>
        </div>
        </Modal.Body>
        </Modal>

         {/* Model---End */}

    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* ✅ LEFT SIDE (Logo + Menu) */}
        <div className="flex items-center lg:gap-4 md:gap-4 gap-2">
          <img src={logo1} alt="printree" className="h-8" />
          <img src={logo} alt="printree" className=" lg:h-8 md:h-6 h-4  sm:block" />

          {/* ✅ DESKTOP MENU INLINE WITH LOGO */}
          <ul className="hidden lg:flex gap-3 text-[11px] text-gray-700  my-2">
            <li className="hover:text-blue-600 hover:underline cursor-pointer" onClick={() => setLgShow(true)}>Instant Quote</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer">Marketplace</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer">How it Works</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer">Products</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer">Brands</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer">Services</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer">Industries</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer">Blogs</li>
          </ul>

          {/* ✅ DESKTOP PHONE */}
          <div className="hidden lg:flex items-center gap-2 border px-3 py-2 rounded cursor-pointer">
            <MdLocalPhone size={18} />
            <span className="text-sm">(877) 777-7419</span>
          </div>
        </div>

        {/* ✅ RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-sm">Login</button>

          <div className="relative cursor-pointer">
            <BsFillCartFill size={22} />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">
              0
            </span>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            Join
          </button>
        </div>

        {/* ✅ MOBILE ICONS */}
        <div className="flex items-center gap-4 lg:hidden">
          <div className="relative cursor-pointer">
            <BsFillCartFill size={22} />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">
              0
            </span>
          </div>

          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-white shadow-md px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm text-gray-700">
            <li onClick={() => setLgShow(true)}>Instant Quote</li>
            <li>Marketplace</li>
            <li>How it Works</li>
            <li>Products</li>
            <li>Brands</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Blogs</li>
          </ul>

          <div className="mt-4 flex items-center gap-2 border px-3 py-2 rounded">
            <MdLocalPhone size={18} />
            <span className="text-sm">(877) 777-7419</span>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="text-sm">Login</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
              Join
            </button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
