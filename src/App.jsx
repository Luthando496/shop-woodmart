import { useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// components
import Header from './components/Header';
// module
// import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaMoneyBillAlt,FaBuilding,FaHandsHelping,FaWallet,FaEnvelope,FaPhone,FaSearchLocation,FaTimes} from 'react-icons/fa'
import {CiMenuBurger} from 'react-icons/ci'



function App() {

  const [toggle,setToggle]= useState(1)
  const [show,setShow]= useState(false)

  const updateToggle=(id)=>{
    setToggle(id)
  }




  return (
    <>
    <nav className="blue-1 py-4 w-full">
    <div className="w-[90%] mx-auto flex justify-between items-center">
    <h1 className="text-4xl font-light text-white">BankWise</h1>

    <ul className="flex-gap-8 hidden lg:flex items-center gap-2 lg:gap-6">
      <li className="hover:bg-white/10  cursor-pointer duration-700 px-6 py-4 rounded-2xl">
        <a href='#overview' className=" lg:text-md font-semibold text-white">Overview</a>
      </li>
      <li className="hover:bg-white/10 duration-700  cursor-pointer px-6 py-4 rounded-2xl">
        <a href='#features' className=" lg:text-md font-semibold text-white">Features</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a href='#inter' className=" lg:text-md font-semibold text-white">Intergrations</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a href='#pay' className=" lg:text-md font-semibold text-white">Money Services</a>
      </li>
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

    <button className="text-white hidden lg:block bg-white/75 hover:bg-white/10 duration-700 hover:text-indigo-600 rounded-xl px-8 py-4 text-xl font-semibold">Get Started</button>

    </div>
     
    </nav>
    <Header />
    

    <section className="bg-gray-300/90 py-[3rem]">
    <div className=" px-8 md:px-[5rem]">
      <span className="text-black/75 text-2xl uppercase border-b-[2px] border-b-sky-600 pb-[1rem] tracking-[2px]">TOP Categories</span>
      <div className="w-full bg-amber-600 h-[2px] mt-[1rem]"></div>
      <div className="grid grid-cols-2 md:grid-cols-2 mt-[1rem] lg:grid-cols-6 gap-8">
        {/* card */}
        <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">Furniture</h2>
        </div>
        {/*  */}
        {/* card */}
        <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-yellow-3.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">Furniture</h2>
        </div>
        {/*  */}
        {/* card */}
        <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-yellow.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">Cooking</h2>
        </div>
        {/*  */}
        {/* card */}
        <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-yellow-4.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">Clocks</h2>
        </div>
        {/*  */}
        {/* card */}
        <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/bed.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">Accessories</h2>
        </div>
        {/*  */}
        {/* card */}
        <div className="w-full">
          <div className="img overflow-hidden h-[190px]  ">
            <img src="/assets/bed-1.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">Technology</h2>
        </div>
        {/*  */}


      </div>

    </div>


    </section>


    {/*  */}
    <section className="w-full py-28 ">
    <div className="px-4  lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* left */}
    <div className="w-full px-6 py-8 relative bg-white border-[3px] border-sky-600">
    <h1 className="text-3xl uppercase text-black/60 tracking-[2px] font-semibold">Sale Products</h1>

    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}  className="img w-full h-[65vh] mt-16">
      <SwiperSlide>
      <img src='/assets/chair-yellow-2.jpg' alt="image" className="w-full object-cover  h-full duration-700" />
      </SwiperSlide>
      <SwiperSlide>
      <img src='/assets/chair-green-3.jpg' alt="image" className="w-full object-cover h-full duration-700" />
      </SwiperSlide>
      <SwiperSlide>
      <img src='/assets/chair-yellow-4.jpg' alt="image" className="w-full object-cover h-full duration-700" />
      </SwiperSlide>
      <SwiperSlide>
      <img src='/assets/chair-green-2.jpg' alt="image" className="w-full h-full object-cover duration-700" />
      </SwiperSlide>
    </Swiper>
    <div className="mt-8 w-full grid gap-4 grid-cols-4 border-t">
    {/*  */}
    <div className="flex flex-col items-center mt-4">
      <span className="text-2xl font-semibold text-black/70">267</span>
      <span className="light-text md text-gray-600 capitalize">days</span>
    </div>
    {/*  */}
    {/*  */}
    <div className="flex flex-col items-center mt-4">
      <span className="text-2xl font-semibold text-black/70">13</span>
      <span className="light-text md text-gray-600 capitalize">Hr</span>
    </div>
    {/*  */}
    {/*  */}
    <div className="flex flex-col items-center mt-4">
      <span className="text-2xl font-semibold text-black/70">35</span>
      <span className="light-text md text-gray-600 capitalize">Min</span>
    </div>
    {/*  */}
    {/*  */}
    <div className="flex flex-col items-center mt-4">
      <span className="text-2xl font-semibold text-black/70">39</span>
      <span className="light-text md text-gray-600 capitalize">Sec</span>
    </div>
    {/*  */}

    </div>

    </div>
    {/*  */}

    {/* right */}
    <div className="py-4 px-6">
    <span className="text-white text-2xl uppercase border-b-[2px] border-b-sky-600 pb-[1rem] tracking-[2px]">Special Offers</span>
      <div className="w-full bg-red-600 h-[2px] mt-[1rem]"></div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/shoe.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/shoe-1.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-brown.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/dinner.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-red.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}


      </div>


    </div>

    </div>

    </section>
    {/* //  */}

    {/*  */}
    <section className="w-full py-28 ">
    <div className="px-4  lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* right */}
    <div className="py-4 px-6">
    <span className="text-white text-2xl uppercase border-b-[2px] border-b-sky-600 pb-[1rem] tracking-[2px]">Special Offers</span>
      <div className="w-full bg-red-600 h-[2px] mt-[1rem]"></div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/shoe.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/shoe-1.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-brown.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/dinner.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-red.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}


      </div>


    </div>
    {/* left */}
    <div className="w-full px-6 py-8 relative bg-white border-[3px] border-sky-600">
    <h1 className="text-3xl uppercase text-black/60 tracking-[2px] font-semibold">Sale Products</h1>

    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}  className="img w-full h-[65vh] mt-16">
      <SwiperSlide>
      <img src='/assets/chair-yellow-2.jpg' alt="image" className="w-full object-cover  h-full duration-700" />
      </SwiperSlide>
      <SwiperSlide>
      <img src='/assets/chair-green-3.jpg' alt="image" className="w-full object-cover h-full duration-700" />
      </SwiperSlide>
      <SwiperSlide>
      <img src='/assets/chair-yellow-4.jpg' alt="image" className="w-full object-cover h-full duration-700" />
      </SwiperSlide>
      <SwiperSlide>
      <img src='/assets/chair-green-2.jpg' alt="image" className="w-full h-full object-cover duration-700" />
      </SwiperSlide>
    </Swiper>
    <div className="mt-8 w-full grid gap-4 grid-cols-4 border-t">
    {/*  */}
    <div className="flex flex-col items-center mt-4">
      <span className="text-2xl font-semibold text-black/70">267</span>
      <span className="light-text md text-gray-600 capitalize">days</span>
    </div>
    {/*  */}
    {/*  */}
    <div className="flex flex-col items-center mt-4">
      <span className="text-2xl font-semibold text-black/70">13</span>
      <span className="light-text md text-gray-600 capitalize">Hr</span>
    </div>
    {/*  */}
    {/*  */}
    <div className="flex flex-col items-center mt-4">
      <span className="text-2xl font-semibold text-black/70">35</span>
      <span className="light-text md text-gray-600 capitalize">Min</span>
    </div>
    {/*  */}
    {/*  */}
    <div className="flex flex-col items-center mt-4">
      <span className="text-2xl font-semibold text-black/70">39</span>
      <span className="light-text md text-gray-600 capitalize">Sec</span>
    </div>
    {/*  */}

    </div>

    </div>
    {/*  */}

    

    </div>

    </section>
    {/*  */}

    {/* SECTION */}
    <section className="w-full  py-28">
    <div className="px-16 w-full">
    <span className="text-white text-2xl uppercase border-b-[2px] border-b-sky-600 pb-[1rem] tracking-[2px]">ALL FOR THE GARDEN</span>
      <div className="w-full bg-amber-600 h-[2px] mt-[1rem]"></div>

      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')} className='mt-8'  >
        <SwiperSlide>
          {/* card */}
      <div className="w-full border">
          <div className="img  h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full  duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
        </SwiperSlide>
        <SwiperSlide>
          {/* card */}
      <div className="w-full border">
          <div className="img  h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full  duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
        </SwiperSlide>
        <SwiperSlide>
          {/* card */}
      <div className="w-full border">
          <div className="img  h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full  duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
        </SwiperSlide>
        <SwiperSlide>
          {/* card */}
      <div className="w-full border">
          <div className="img  h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full  duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
        </SwiperSlide>
        <SwiperSlide>
          {/* card */}
      <div className="w-full border">
          <div className="img  h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full  duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
        </SwiperSlide>
        <SwiperSlide>
          {/* card */}
      <div className="w-full border">
          <div className="img  h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full  duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
        </SwiperSlide>
      </Swiper>

    </div>

    </section>
    {/*  */}

    <section className="w-full py-12 ">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8">
      {/*  */}
      <div className="w-full garden-1 py-16 px-8">
        <h3 className="text-xl font-thin my-4 leading-[1.6] text-amber-600">Scelerisque fusce</h3>
        <h1 className="text-3xl font-bold my-4 text-white">New Arrival of<br />
        Modern Garden Gloves</h1>
        <span className="text-xl uppercase my-1 border-b-2 border-b-teal-700 pb-2 font-semibold text-white">View More</span>
      </div>
      {/*  */}
      <div className="w-full garden-2 py-16 px-8">
        <h3 className="text-xl font-thin my-4 leading-[1.6] text-amber-600">Garden Tools</h3>
        <h1 className="text-3xl font-bold my-4 text-white">Discount 30% Garden<br />
        Equipment.</h1>
        <span className="text-xl uppercase my-1 border-b-2 border-b-teal-700 pb-2 font-semibold text-white">View More</span>
      </div>

      </div>
    </section>

    {/* //  */}
    <section className="w-full mt-8">
    <div className="w-full px-4 lg:px-12 items-stretch grid grid-cols-1 lg:grid-cols-8 gap-4 py-8">

    {/* left */}
    <div className="col-span-2 h-full w-full hidden lg:block">
    <div className="flex flex-col gap-8 h-full">
    {/*  */}
      <div className="w-full garden-2 pt-8 px-6 pb-16 ">
      <h3 className="text-xl font-thin my-4 leading-[1.6] text-amber-600">Garden Tools</h3>
        <h1 className="text-xl font-semibold my-4 text-white">Discount 30% Garden<br />
        Equipment.</h1>
        <span className="text-md uppercase my-1 border-b-2 border-b-teal-700 pb-2 font-semibold text-white">View More</span>
      </div>
      {/*  */}
      <div className="w-full garden-2 pt-8 px-6 h-full pb-16">
      <h3 className="text-xl font-thin my-4 leading-[1.6] text-amber-600">Garden Tools</h3>
        <h1 className="text-xl font-semibold my-4 text-white">Discount 30% Garden<br />
        Equipment.</h1>
        <span className="text-md uppercase my-1 border-b-2 border-b-teal-700 pb-2 font-semibold text-white">View More</span>
      </div>
      {/*  */}
    </div>


    </div>
    {/* right */}
    <div className="col-span-6 w-full">
    <div className="py-4 w-full px-6">
    <span className="text-black/70 text-2xl uppercase border-b-[2px] border-b-sky-600 pb-[1rem] tracking-[2px]">Special Offers</span>
      <div className="w-full bg-red-600 h-[2px] mt-[1rem]"></div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* card */}
      <div className="w-full border border-sky-200">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-yellow-2.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full border border-sky-200">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/shoe.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full border border-sky-200">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/shoe-1.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full border border-sky-200">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-brown.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full border border-sky-200">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/dinner.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}
      {/* card */}
      <div className="w-full border border-sky-200">
          <div className="img overflow-hidden h-[190px] ">
            <img src="/assets/chair-red.jpg" alt="chair" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">Shorts</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">$169.00</h2>
        </div>
        {/*  */}


      </div>


    </div>

    </div>

    </div>

    </section>


    <section id='inter' className="pt-28 pb-12 blue-1 w-full">
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
    <h1 className="text-5xl font-bold text-white">BankWise</h1>

    <p className="text-xl font-semibold text-gray-400">Copyright: © 2023 BankWise Bank Theme by Luthando Didiza. All Rights Reserved.</p>

    </div>

    </section>



    </>
  )
}

export default App
