
import HeroSection from "../component/HeroSection"
 import HighlightSection from "../component/HighlightSection"
// import ImageSection from "../component/ImageSection"
import Image from "../component/Image"
  import QuoteSection from "../component/QuoteSection"
  import PrintingSection from "../component/PrintingSection"
 import InspectionSection from "../component/InspectionSection"
 import SalesShope from "../component/SalesShope"
 import Profile from "../component/Profile"
 import ProductBoundary from "../component/ProductBoundary"
import Reward from "../component/Reward"
 import Companies from "../component/Companies"
  import Sales from "../component/Sales"
import ContactUs from "../component/ContactUs"
import WinnerSection from "../component/WinnerSection"
import Footer from "../common/Footer"
function Home() {
  return (
    <>
     <HeroSection/>
     <HighlightSection/>
  {/* <ImageSection/> */}
  <Image/>
     <QuoteSection/>
    <PrintingSection/>
    <InspectionSection/>
   <SalesShope/>
   <Profile/>
   <ProductBoundary/>
   <Reward/>
   <Companies/>
   <Sales/>
  
   <WinnerSection/>
    <ContactUs/>
    <Footer/>
    </>

   
  )
}

export default Home