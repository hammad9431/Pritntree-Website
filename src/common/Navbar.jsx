import { useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/printree-ee516c6629087bfaf75e7dab71d5d5a2b4a1337f180818f5a80da55898756501.svg";
import logo1 from "../assets/images/logo-vector-b3e2ff39671b5410e1034b189ff89134f8246f8d6c45013adb7a42936ce36c29.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* ✅ LEFT SIDE (Logo + Menu) */}
        <div className="flex items-center lg:gap-4 md:gap-4 gap-2">
          <img src={logo1} alt="printree" className="h-8" />
          <img src={logo} alt="printree" className=" lg:h-8 md:h-6 h-4  sm:block" />

          {/* ✅ DESKTOP MENU INLINE WITH LOGO */}
          <ul className="hidden lg:flex gap-3 text-sm text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Instant Quote</li>
            <li className="hover:text-blue-600 cursor-pointer">Marketplace</li>
            <li className="hover:text-blue-600 cursor-pointer">How it Works</li>
            <li className="hover:text-blue-600 cursor-pointer">Products</li>
            <li className="hover:text-blue-600 cursor-pointer">Brands</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">Industries</li>
            <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
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
            <li>Instant Quote</li>
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
  );
}
