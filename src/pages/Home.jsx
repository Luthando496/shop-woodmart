import React,{useEffect} from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { fetchAllProducts } from '../store/actions.js/productAction';
// import {fetchAllProducts} from '../store/actions/productActions'





const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.prod.products)


  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[dispatch])




  return (
    <>
    
    <Header />
    <section className="bg-gray-300/90 py-[3rem]">
    <div className=" px-8 md:px-[5rem]">
      <span className="text-black/75 text-2xl uppercase border-b-[2px] border-b-sky-600 pb-[1rem] tracking-[2px]">TOP Categories</span>
      <div className="w-full bg-amber-600 h-[2px] mt-[1rem]"></div>
      <div className="grid grid-cols-2 md:grid-cols-2 mt-[1rem] lg:grid-cols-6 gap-8">
        {/* card */}
        <Link to='/category/smartphones' className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="smartphone" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">smartphones</h2>
        </Link>
        {/*  */}
        {/* card */}
        <Link to='/category/furniture' className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="chairs" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">Furniture</h2>
        </Link>
        {/*  */}
        {/* card */}
        <Link to='/category/fragrances' className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fragrances" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">fragrances</h2>
        </Link>
        {/*  */}
        {/* card */}
        <Link to='/category/laptops' className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="laptops" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">laptops</h2>
        </Link>
        {/*  */}
        {/* card */}
        <Link to='/category/sunglasses' className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="sunglasses" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">sunglasses</h2>
        </Link>
        {/*  */}
        {/* card */}
        <Link to='/category/mens-watches' className="w-full">
          <div className="img overflow-hidden h-[190px]  ">
            <img src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="mens-watches" className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-2xl my-6 text-center capitalize text-black font-semibold">mens watches</h2>
        </Link>
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
    <div className="w-full bg-sky-600 h-[1px] my-4"></div>


    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}  className="img w-full h-[65vh] mt-16">
      {products?.slice(0,9).map(prod=> (
      <SwiperSlide key={prod.id}>
      <img  key={prod.id} src={prod.thumbnail} alt="image" className="w-full object-cover  h-full duration-700" />
      </SwiperSlide>
      
      ))}

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
    <span className="text-gray-700/60 text-2xl uppercase border-b-[2px] border-b-sky-600 pb-[1rem] tracking-[2px]">Special Offers</span>
      <div className="w-full bg-red-600 h-[2px] mt-[1rem]"></div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* card */}
      {products?.slice(7,13).map(prod=> (
      <Link to={`/details/${prod.id}`} className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src={prod.thumbnail} alt={prod.title} className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">{prod.title}</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">${prod.price}</h2>
        </Link>
      
      ))}
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
    <span className="text-sky-600/70 text-2xl uppercase border-b-[2px] border-b-sky-600 pb-[1rem] tracking-[2px]">Special Offers</span>
      <div className="w-full bg-red-600 h-[2px] mt-[1rem]"></div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* card */}
      {products?.slice(-7,-1).map(prod=> (
      <Link to={`/details/${prod.id}`} className="w-full">
          <div className="img overflow-hidden h-[190px] ">
            <img src={prod.thumbnail} alt={prod.title} className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">{prod.title}</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">${prod.price}</h2>
        </Link>
      
      ))}

      </div>


    </div>
    {/* left */}
    <div className="w-full px-6 py-8 relative bg-white border-[3px] border-sky-600">
    <h1 className="text-3xl uppercase text-black/60 tracking-[2px] font-semibold">Sale Products</h1>
    <div className="w-full bg-sky-600 h-[1px] my-4"></div>

    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}  className="img w-full h-[65vh] mt-16">
      {products?.slice(0,9).map(prod=> (
      <SwiperSlide key={prod.id}>
      <img  key={prod.id} src={prod.thumbnail} alt="image" className="w-full object-cover  h-full duration-700" />
      </SwiperSlide>
      ))}
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
    <span className="text-gray-700 text-2xl uppercase border-b-[2px] border-b-sky-600 pb-[1rem] tracking-[2px]">ALL FOR THE GARDEN</span>
      <div className="w-full bg-amber-600 h-[2px] mt-[1rem]"></div>

      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')} className='mt-8'  >
      {products?.slice(9,19).map(prod=> (
        <SwiperSlide>
          {/* card */}
      <Link to={`/details/${prod.id}`} className="w-full border">
          <div className="img  h-[190px] ">
            <img src={prod.thumbnail} alt="chair" className="w-full  duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">{prod.title}</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">${prod.price}</h2>
        </Link>
        {/*  */}
        </SwiperSlide>
      
      ))}
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
      <div className="w-full garden-2 pt-8 px-6 h-full pb-16 ">
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
      {products?.slice(0,9).map(prod=> (
      <Link to={`/details/${prod.id}`} className="w-full border border-sky-200">
          <div className="img overflow-hidden h-[190px] ">
            <img src={prod.thumbnail} alt={prod.title} className="w-full hover:scale-150 duration-700 h-full" />
          </div>
          <h2 className="text-xl my-2 text-center capitalize text-black font-semibold">{prod.title}</h2>
          <h2 className="text-sm my-1 text-center capitalize text-gray-400 font-light">Retail</h2>
          <h2 className="text-md my-1 text-center capitalize text-orange-400 font-semibold">${prod.price}</h2>
        </Link>
      
      ))}
        {/*  */}



      </div>


    </div>

    </div>

    </div>

    </section>
    </>
  )
}

export default Home