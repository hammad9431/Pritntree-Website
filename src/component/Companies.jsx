
import '../index.css'
import Image1 from "../assets/images/konica.jpeg";
import Image2 from "../assets/images/Kyocera-Logo-1982.png";
import Image3 from "../assets/images/toshiba.jpeg";
import Image4 from "../assets/images/Sharp-logo.png";
import Image5 from "../assets/images/xerox logo 2.webp";
import Image6 from "../assets/images/Canon logo.jpeg";
import Image7 from "../assets/images/Epson-Logo-1975.png";
import Image8 from "../assets/images/ricoh.jpeg";
import Image9 from "../assets/images/lexmark.png";

function Companies() {
  return (
    <>

      <div className="w-full overflow-hidden bg-[#e8effca8] py-6 my-8">
        <div className="flex w-max animate-scroll">
          
          {/* FIRST SET */}
          <div className="flex gap-10">
            <img src={Image1} className="h-12" />
            <img src={Image2} className="h-12" />
            <img src={Image3} className="h-12" />
            <img src={Image4} className="h-12" />
            <img src={Image5} className="h-12" />
            <img src={Image6} className="h-12" />
            <img src={Image7} className="h-12" />
            <img src={Image8} className="h-12" />
            <img src={Image9} className="h-12" />
          </div>

          {/* SECOND SET (CLONE) */}
          <div className="flex gap-10 ml-10">
            <img src={Image1} className="h-12" />
            <img src={Image2} className="h-12" />
            <img src={Image3} className="h-12" />
            <img src={Image4} className="h-12" />
            <img src={Image5} className="h-12" />
            <img src={Image6} className="h-12" />
            <img src={Image7} className="h-12" />
            <img src={Image8} className="h-12" />
            <img src={Image9} className="h-12" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Companies;
