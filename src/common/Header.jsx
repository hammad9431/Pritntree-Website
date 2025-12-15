import logo from "../assets/images/printree-ee516c6629087bfaf75e7dab71d5d5a2b4a1337f180818f5a80da55898756501.svg";
import logo1 from "../assets/images/logo-vector-b3e2ff39671b5410e1034b189ff89134f8246f8d6c45013adb7a42936ce36c29.svg";
import { MdLocalPhone } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";

function Header() {
  return (
       <nav className="w-full shadow-sm bg-white py-3 fixed top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4">

        {/* ✅ LEFT – Logo */}
        <div className="flex items-center gap-2">
          <img src={logo1} alt="printree" className="h-8" />
          <img src={logo} alt="printree" className="h-8" />
        </div>

        {/* ✅ CENTER – Menu */}
        <ul className="hidden lg:flex gap-5 text-sm text-gray-700">
          <li className="cursor-pointer hover:text-blue-600">Instant Quote</li>
          <li className="cursor-pointer hover:text-blue-600">Marketplace</li>
          <li className="cursor-pointer hover:text-blue-600">How it Works</li>
          <li className="cursor-pointer hover:text-blue-600">Products</li>
          <li className="cursor-pointer hover:text-blue-600">Brands</li>
          <li className="cursor-pointer hover:text-blue-600">Services</li>
          <li className="cursor-pointer hover:text-blue-600">Industries</li>
          <li className="cursor-pointer hover:text-blue-600">Blogs</li>
        </ul>

        {/* ✅ RIGHT – Phone, Login, Cart, Join */}
        <div className="flex items-center gap-5">

          <div className="hidden lg:flex items-center gap-2 cursor-pointer">
            <MdLocalPhone size={18} />
            <span className="text-sm">(877) 777-7419</span>
          </div>

          <button className="text-sm text-gray-700 hover:text-black">
            Login
          </button>

          <div className="relative cursor-pointer">
            <BsFillCartFill size={22} />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">
              0
            </span>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
            Join
          </button>

        </div>
      </div>
    </nav>
 
  )
}

export default Header



 
