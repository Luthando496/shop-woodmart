import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'



const Header = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      // direction='vertical'
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
      <header className="w-full h-[90vh] relative">
        <div className="img absolute top-0 left-0 w-full h-full">
          <img src="https://images.pexels.com/photos/2622170/pexels-photo-2622170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bed"  className='w-full h-full object-cover' />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-full h-full space-y-6 mt-24">
            <h2 className="text-amber-500 uppercase text-center font-semibold text-xl">Time for a new speaker</h2>
            <h1 className="text-white font-semibold capitalize leading-normal text-5xl text-center">Bring the best experience home<br/> with a speaker from marshall.</h1>
            <div className="w-full flex justify-center">
            <div className="flex gap-8">
            <Link to='/products' className="text-xl px-6 shadow-xl hover:bg-slate-600 duration-700 shadow-gray-700 py-4 text-white bg-slate-800 rounded-2xl">View More</Link>
              <Link to='/products' className="text-xl px-6 hover:bg-red-800 duration-700 hover:text-black py-4 text-white bg-slate-800 rounded-2xl">To Shop</Link>
            </div>

            </div>
          </div>
        </div>

      </header>
    </SwiperSlide>
    <SwiperSlide>
      <header className="w-full h-[90vh] relative">
        <div className="img absolute top-0 left-0 w-full h-full">
          <img src="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bed"  className='w-full h-full object-cover' />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-full h-full space-y-6 mt-24">
            <h2 className="text-amber-500 uppercase text-center font-semibold text-xl">Time for a new speaker</h2>
            <h1 className="text-white font-semibold capitalize leading-normal text-5xl text-center">Buy The Best Home Equipment<br/> For An Excellent Holiday. </h1>
            <div className="w-full flex justify-center">
            <div className="flex gap-8">
            <Link to='/products' className="text-xl px-6 shadow-xl hover:bg-slate-600 duration-700 shadow-gray-700 py-4 text-white bg-slate-800 rounded-2xl">View More</Link>
              <Link to='/products' className="text-xl px-6 hover:bg-red-800 duration-700 hover:text-black py-4 text-white bg-slate-800 rounded-2xl">To Shop</Link>
            </div>

            </div>
          </div>
        </div>

      </header>
    </SwiperSlide>
    <SwiperSlide>
      <header className="w-full h-[90vh] relative">
        <div className="img absolute top-0 left-0 w-full h-full">
          <img src="https://images.pexels.com/photos/5531746/pexels-photo-5531746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bed"  className='w-full h-full object-cover' />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-full h-full space-y-6 mt-24">
            <h2 className="text-amber-500 uppercase text-center font-semibold text-xl">Time for a new speaker</h2>
            <h1 className="text-white font-semibold capitalize leading-normal text-5xl text-center">Bring the best experience home<br/> with a speaker from marshall.</h1>
            <div className="w-full flex justify-center">
            <div className="flex gap-8">
              <Link to='/products' className="text-xl px-6 shadow-xl hover:bg-slate-600 duration-700 shadow-gray-700 py-4 text-white bg-slate-800 rounded-2xl">View More</Link>
              <Link to='/products' className="text-xl px-6 hover:bg-red-800 duration-700 hover:text-black py-4 text-white bg-slate-800 rounded-2xl">To Shop</Link>
            </div>

            </div>
          </div>
        </div>

      </header>
    </SwiperSlide>

    </Swiper>
  )
}

export default Header