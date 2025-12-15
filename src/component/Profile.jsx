

function Profile() {
  return (
    <>
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 py-16 bg-[#e8effc] my-6 ">

    {/* <!-- Left Arrow --> */}
    <button className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full border">
        <span className="text-xl">❮</span>
    </button>

    {/* <!-- IMAGE + TEXT WRAPPER --> */}
    <div className="flex flex-col lg:flex-row items-center gap-6 max-w-3xl">

        {/* <!-- Image --> */}
        <img 
            src="src/assets/images/review_profile_1-7c108bb9210218076f7a9bfdd4e64b7a849d540a9de8950c3d549cb5b9fe940a.png"
            className="w-[200px] h-[200px] rounded-full object-cover"
        />

        {/* <!-- Text Section --> text-center lg:text-left*/}
        <div className="px-8 ">
            <div className="text-yellow-500 text-2xl mb-4 ">★★★★★</div>

            <h4 classNameName="text-[30px] font-bold  leading-relaxed text-black">
                I was looking for a low volume Konica the 8 series model and they were
                pretty hard to find online. Printree had it for under 5k with delivery included.
                Good work guys!
            </h4>
        </div>
    </div>

    {/* <!-- Right Arrow --> */}
    <button className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full border">
        <span className="text-xl">❯</span>
    </button>

</div>

    </>
  )
}

export default Profile