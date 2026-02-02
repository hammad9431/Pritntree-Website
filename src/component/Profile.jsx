import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/images/review_profile_1-7c108bb9210218076f7a9bfdd4e64b7a849d540a9de8950c3d549cb5b9fe940a.png';
import Image2 from '../assets/images/review_profile_2-3388fde9b80b2d23586106f93ce74c227391758bfb801c2ccd6a47017bb0e02b.webp';
import '../index.css'
function Profile() {
  return (
    <>
  <Carousel >
      <Carousel.Item>
     <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 py-16 bg-[#e8effc] my-6 "> 
          {/* <button className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full border">
        <span className="text-xl">❮</span>
    </button> */}
    <div className="flex flex-col lg:flex-row items-center gap-6 max-w-3xl">
        <img 
            src={Image1}
            className="w-[200px] h-[200px] rounded-full object-cover"
        />
        <div className="px-8 ">
            <div className="text-yellow-500 text-2xl mb-4 ">★★★★★</div>
            <h4 classNameName="text-[30px] font-bold  leading-relaxed text-black">
                I was looking for a low volume Konica the 8 series model and they were
                pretty hard to find online. Printree had it for under 5k with delivery included.
                Good work guys!
            </h4>
             <p>Karissa Ross • St. Louis, MO</p>
        </div>
    </div>
    {/* <button className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full border">
        <span className="text-xl">❯</span>
    </button> */}

</div>
</Carousel.Item>

     

{/* 2 */}
      <Carousel.Item>
     <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 py-16 bg-[#e8effc] my-6 "> 
    <div className="flex flex-col lg:flex-row items-center gap-6 max-w-3xl">
        <img 
        src={Image2}
            className="w-[200px] h-[200px] rounded-full object-cover"
        />
        <div className="px-8 ">
            <div className="text-yellow-500 text-2xl mb-4 ">★★★★★</div>
            <h4 classNameName="text-[30px] font-bold  leading-relaxed text-black">
               Our office was struggling with our little hp desktop printer, especially during tax
            season. We got 2 copiers from printree and they delivered it in 3 days!!
            </h4>
            <p>Karissa Ross • St. Louis, MO</p>
        </div>
    </div>

</div>
</Carousel.Item>
</Carousel>




   
    </>
  )
}

export default Profile