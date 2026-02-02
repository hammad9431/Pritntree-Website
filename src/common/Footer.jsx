import image1 from '../assets/images/payment_methods-cc07ea1d53fd531396a36ee9e94b62eb78e8ef8e61620b2e567ffaa69014db05.webp'

function Footer() {
  return (
   <>
 <div className="w-full px-6 py-12">

  {/* TOP GRID */}
  <div className="
      grid 
      grid-cols-1
      sm:grid-cols-3
      md:grid-cols-3
      lg:grid-cols-5
      gap-10
  ">

    {/* Contact Us */}
    <div className="sm:col-span-3 md:col-span-3 lg:col-span-1">
      <h3 className="font-bold mb-3">Contact Us</h3>
      <p>Printree Inc.<br/>200 Spectrum Center Drive, Suite 300<br/>Irvine, CA 92618</p>
      <p className="mt-2">Toll Free: 1(877) 777-7419</p>
      <p>Local Tel: 5625342671</p>
      <p>Fax No: 8887130522</p>
      <p className="mt-2">Monday to Saturday<br/>8:30 AM - 6:00 PM</p>
    </div>

    {/* Products */}
    <div>
      <h3 className="font-bold mb-3">Products</h3>
      <ul className="space-y-1">
        <li>Copy Machines</li>
        <li>New Copy Machines</li>
        <li>Refurbished Copiers</li>
        <li>Konica Minolta</li>
        <li>Kyocera</li>
        <li>Toshiba</li>
        <li>Sharp</li>
        <li>Xerox</li>
        <li>Canon</li>
        <li>Epson</li>
        <li>Lexmark</li>
        <li>Ricoh</li>
      </ul>
    </div>

    {/* Categories */}
    <div>
      <h3 className="font-bold mb-3">Categories</h3>
      <ul className="space-y-1">
        <li>Instant Quotes</li>
        <li>Marketplace</li>
        <li>Purchase Deals</li>
        <li>Lease Deals</li>
        <li>Rental Deals</li>
      </ul>
    </div>

    {/* How it Works */}
    <div>
      <h3 className="font-bold mb-3">How it Works</h3>
      <ul className="space-y-1">
        <li>How it Works</li>
        <li>Purchase</li>
        <li>Lease</li>
        <li>Rentals</li>
        <li>Assessment</li>
        <li>Verified Dealers</li>
        <li>Service Agreements</li>
        <li>Delivery & Installation</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="font-bold mb-3">Services</h3>
      <ul className="space-y-1">
        <li>Quote Generator</li>
        <li>Free Upgrade</li>
        <li>Stuck in Bad Leases</li>
        <li>Dealer List</li>
        <li>FAQ Page</li>
        <li>Add Ons</li>
        <li>Copier Speed Guide</li>
        <li>Free Upgrade Page</li>
        <li>Warranty and Cancellation</li>
        <li>Inspection List</li>
        <li>Reviews</li>
      </ul>
    </div>

    {/* Industries */}
    <div>
      <h3 className="font-bold mb-3">Industries</h3>
      <ul className="space-y-1">
        <li>Government Offices</li>
        <li>Education Institutions</li>
        <li>Financial Institutions</li>
        <li>Healthcare Facilities</li>
        <li>Real Estate Agencies</li>
        <li>Small Businesses</li>
        <li>Legal Firms</li>
        <li>None Profits</li>
      </ul>
    </div>

  </div>

  {/* PAYMENT ICONS SECTION */}
  <div className="flex justify-center items-center h-40 w-[100%] ">
    <img  src={image1} alt="Visa" className="h-8" />
   
  </div>

</div>

   </>
  )
}

export default Footer