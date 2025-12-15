import bgImage from "../assets/images/lineprintree_proccess_1-691e8b508eb4153a65a2d0f07b38fd37ddd0280dd2982931d958c687c7857c83.jpg";

function ImageSection() {
  return (
    <section
      className="w-full bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[90%] mx-auto relative">

        {/* LEFT TOP CONTENT */}
        <div className="max-w-md">
          <p className="text-blue-600 font-semibold mb-2">
            3 Steps to Done!
          </p>

          <h2 className="text-2xl font-bold mb-3">
            The Printree Process
          </h2>

          <p className="text-gray-600 mb-6">
            We’ve simplified the copier buying process. You’re now
            only 3 steps away from getting your copier delivered.
          </p>

          <button className="bg-indigo-900 text-white px-6 py-3 rounded-lg">
            Buy Now
          </button>
        </div>

        {/* STEPS */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 relative">

          {/* STEP 1 */}
          <div className="text-center">
            <img
              // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="w-40 h-40 rounded-full mx-auto object-cover"
            />
            <h3 className="font-semibold mt-4">
              Choose your Copier
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Select a copier that’s perfect for you.
              We carry all major brands and models.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center mt-16">
            <img
              // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="w-40 h-40 rounded-full mx-auto object-cover"
            />
            <h3 className="font-semibold mt-4">
              Book your Order
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Add your copier to cart and complete checkout.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center">
            <img
              // src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              className="w-40 h-40 rounded-full mx-auto object-cover"
            />
            <h3 className="font-semibold mt-4">
              Accept Delivery
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Delivered within 7 business days. Installation included.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ImageSection;
