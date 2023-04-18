import { useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// components

import Navbar from './components/Navbar';
// module
import {FaEnvelope,FaPhone,FaSearchLocation} from 'react-icons/fa'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Category from './pages/Category';
import Details from './pages/Details';
import {Routes,Route} from 'react-router-dom'


function App() {





  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/category/" element={<Category />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
    



    <footer id='inter' className="pt-28 pb-12 bg-stone-600 w-full">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-[19rem] mx-auto w-[90%] border-b pb-8">
    <div className="space-y-4">
      <h1 className="text-4xl tracking-[3px] capitalize font-bold text-white">Contact information</h1>
      <p className="text-md text-gray-400 font-semibold">Rhoncus quam dolor enim egestas cras. Senectus<br/> quis lectus pharetra diam sociis etiam magna</p>
    </div>

    <div className="space-y-4">
      <div className="flex gap-4">
        <FaEnvelope className='text-3xl text-sky-400' />
        <p className="text-md font-semibold cursor-pointer hover:text-sky-400 text-white">luthandodidiza197@gmail.com</p>
      </div>
      <div className="flex gap-4">
        <FaPhone className='text-3xl text-sky-400' />
        <p className="text-md font-semibold cursor-pointer hover:text-sky-400 text-white">(+27) 76 705 7533</p>
      </div>
      <div className="flex gap-4">
        <FaSearchLocation className='text-3xl text-sky-400' />
        <p className="text-md font-semibold cursor-pointer hover:text-sky-400 text-white">Cape Town, Western Cape, South Africa</p>
      </div>
    </div>

    </div>

    <div className="mt-8 w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 border-b pb-8">
    {/* card */}
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Product</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Overview</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Features</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Solutions</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Tutorials</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Pricing</h2>
        </li>
      </ul>
    </div>

    {/* card */}
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Company</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">About Us</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Careers</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Press</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">News</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Contact</h2>
        </li>
      </ul>
    </div>
    {/* card */}
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Resources</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Blogs</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Help Center</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Support</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Tutorials</h2>
        </li>
      </ul>
    </div>
    {/* card */}
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Social</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Twitter</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Facebook</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">GitHub</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Linkedin</h2>
        </li>
      </ul>
    </div>
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Legal</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Terms</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Privacy</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Cookies</h2>
        </li>
      </ul>
    </div>

    </div>

    <div className="mt-12 w-[85%] mx-auto items-center flex justify-between flex-col lg:flex-row">
    <h1 className="text-5xl font-bold text-white">Shopi</h1>

    <p className="text-xl font-semibold text-gray-400">Copyright: © 2023 Shopi Bank Theme by Luthando Didiza. All Rights Reserved.</p>

    </div>

    </footer>

    


    





    </>
  )
}

export default App
