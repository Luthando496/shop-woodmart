import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';




const Header = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
      <header className="w-full h-[90vh] relative">
        <div className="img absolute top-0 left-0 w-full h-full">
          <img src="/assets/bed.jpg" alt="bed"  className='w-full h-full object-cover' />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-full h-full space-y-6 mt-24">
            <h2 className="text-amber-500 uppercase text-center font-semibold text-xl">Time for a new speaker</h2>
            <h1 className="text-white font-semibold capitalize leading-normal text-5xl text-center">Bring the best experience home<br/> with a speaker from marshall.</h1>
            <div className="w-full flex justify-center">
            <div className="flex gap-8">
              <button className="text-xl px-6 shadow-xl hover:bg-slate-600 duration-700 shadow-gray-700 py-4 text-white bg-slate-800 rounded-2xl">View More</button>
              <button className="text-xl px-6 hover:bg-red-800 duration-700 hover:text-black py-4 text-white bg-slate-800 rounded-2xl">To Shop</button>
            </div>

            </div>
          </div>
        </div>

      </header>
    </SwiperSlide>
    <SwiperSlide>
      <header className="w-full h-[90vh] relative">
        <div className="img absolute top-0 left-0 w-full h-full">
          <img src="/assets/chair-green.jpg" alt="bed"  className='w-full h-full object-cover' />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-full h-full space-y-6 mt-24">
            <h2 className="text-amber-500 uppercase text-center font-semibold text-xl">Time for a new speaker</h2>
            <h1 className="text-white font-semibold capitalize leading-normal text-5xl text-center">Bring the best experience home<br/> with a speaker from marshall.</h1>
            <div className="w-full flex justify-center">
            <div className="flex gap-8">
              <button className="text-xl px-6 shadow-xl hover:bg-slate-600 duration-700 shadow-gray-700 py-4 text-white bg-slate-800 rounded-2xl">View More</button>
              <button className="text-xl px-6 hover:bg-red-800 duration-700 hover:text-black py-4 text-white bg-slate-800 rounded-2xl">To Shop</button>
            </div>

            </div>
          </div>
        </div>

      </header>
    </SwiperSlide>
    <SwiperSlide>
      <header className="w-full h-[90vh] relative">
        <div className="img absolute top-0 left-0 w-full h-full">
          <img src="/assets/chair-yellow-2.jpg" alt="bed"  className='w-full h-full object-cover' />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-full h-full space-y-6 mt-24">
            <h2 className="text-amber-500 uppercase text-center font-semibold text-xl">Time for a new speaker</h2>
            <h1 className="text-white font-semibold capitalize leading-normal text-5xl text-center">Bring the best experience home<br/> with a speaker from marshall.</h1>
            <div className="w-full flex justify-center">
            <div className="flex gap-8">
              <button className="text-xl px-6 shadow-xl hover:bg-slate-600 duration-700 shadow-gray-700 py-4 text-white bg-slate-800 rounded-2xl">View More</button>
              <button className="text-xl px-6 hover:bg-red-800 duration-700 hover:text-black py-4 text-white bg-slate-800 rounded-2xl">To Shop</button>
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