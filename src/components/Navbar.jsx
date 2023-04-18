import React,{useState} from 'react'
import {FaMoneyBillAlt,FaBuilding,FaHandsHelping,FaWallet,FaEnvelope,FaPhone,FaSearchLocation,FaTimes} from 'react-icons/fa'
import {CiMenuBurger} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';



const Navbar = () => {

    const [toggle,setToggle]= useState(1)
    const [show,setShow]= useState(false)
    const [cartShow,setCart]= useState(false)


  return (
    <nav className="blue-1 py-4 w-full">
    <div className="w-[90%] mx-auto flex justify-between items-center">
    <Link to='/' className="text-4xl font-light text-white">Shopi</Link>

    <ul className="flex-gap-8 hidden lg:flex items-center gap-2 lg:gap-6">
      <li className="hover:bg-white/10  cursor-pointer duration-700 px-6 py-4 rounded-2xl">
        <Link to='/' className=" lg:text-md font-semibold text-white">Home</Link>
      </li>
      <li className="hover:bg-white/10 duration-700  cursor-pointer px-6 py-4 rounded-2xl">
        <Link to='/login' className=" lg:text-md font-semibold text-white">Login</Link>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <Link to='/products' className=" lg:text-md font-semibold text-white">All Products</Link>
      </li>
      {/* <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <Link href='/' className=" lg:text-md font-semibold text-white">Money Services</Link>
      </li> */}
    </ul>

    <button className="lg:hidden text-5xl text-orange-600 " onClick={()=> setShow(!show)} >
      <CiMenuBurger  />
    </button>

    {show && <div className={`${show ?'fixed lg:hidden top-0 left-0 translate-x-0 duration-1000 z-40 bg-slate-900 w-full h-full':'fixed top-0 lg:hidden translate-x-[-100%] duration-1000'}`}>
      <div className="text-right pr-8">
        <button className="lg:hidden text-[5rem] text-orange-600 " onClick={()=> setShow(!show)} >
          <FaTimes  />
        </button>
      </div>

      <ul className="flex flex-col gap-8">
      <li  className="hover:bg-white/10  cursor-pointer duration-700 px-6 py-4 rounded-2xl">
        <a onClick={()=> setShow(!show)} href='#overview' className=" lg:text-md font-semibold text-white">Overview</a>
      </li>
      <li  className="hover:bg-white/10 duration-700  cursor-pointer px-6 py-4 rounded-2xl">
        <a onClick={()=> setShow(!show)}  href='#features' className="lg:text-md font-semibold text-white">Features</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a onClick={()=> setShow(!show)} href='#inter' className="lg:text-md font-semibold text-white">Intergrations</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a onClick={()=> setShow(!show)} href='#pay' className=" lg:text-md font-semibold text-white">Money Services</a>
      </li>
      </ul>
    </div>}

    <Button onClick={()=> setCart(!cartShow)}  variant="contained">Cart </Button >
    {cartShow && <div className={`${cartShow ?'fixed  top-0 right-0 translate-x-[50%] duration-1000 z-40 bg-slate-900 h-full':'fixed top-0 right-0 translate-x-[-100%] duration-1000'}`}>
      <div className="text-right pr-8">
        <button className="lg:hidden text-[5rem] text-orange-600 " onClick={()=> setCart(!cartShow)} >
          <FaTimes  />
        </button>
      </div>

      <ul className="flex flex-col gap-8">
      <li  className="hover:bg-white/10  cursor-pointer duration-700 px-6 py-4 rounded-2xl">
        <a onClick={()=> setCart(!cartShow)} href='#overview' className=" lg:text-md font-semibold text-white">Overview</a>
      </li>
      <li  className="hover:bg-white/10 duration-700  cursor-pointer px-6 py-4 rounded-2xl">
        <a onClick={()=> setCart(!cartShow)}  href='#features' className="lg:text-md font-semibold text-white">Features</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a onClick={()=> setCart(!cartShow)} href='#inter' className="lg:text-md font-semibold text-white">Intergrations</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a onClick={()=> setCart(!cartShow)} href='#pay' className=" lg:text-md font-semibold text-white">Money Services</a>
      </li>
      </ul>
    </div>}

    </div>
     
    </nav>
  )
}

export default Navbar