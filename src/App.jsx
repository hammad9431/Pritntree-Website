import './App.css'
import Navbar from './common/Navbar'
// import Footer from './common/Footer'
//  import image from "./assets/images/home_pg_1-bca1b0ecd6b1f076b5d6ee800e9d564e3c54389454c70b3f62d39fe11e09f731 (1).jpg"
// import Navbar from './common/Navbar'
import Home from './Pages/Home'
// import Header from './common/Header'
function App() {

  return (
   <>
 {/* <Header/> */}
    <Navbar/>
    {/* <Footer/> */}

<Home/>
   
    {/* <div className='border border-1 border-black '>
   
      <img className='min-h-screen w-full' src={image} alt="" />
       </div> */}

   </>
  )
}

export default App
