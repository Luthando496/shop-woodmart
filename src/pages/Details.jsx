import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchDetails } from '../store/actions.js/productAction';
import { useParams } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {FaArrowRight} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { addToCart } from '../store/actions.js/cartActions';
// import {addToCart} from '../store/actions/cartActions'


const Details = () => {
    const dispatch = useDispatch()
    const {id} = useParams();


    const {product} = useSelector(state => state.prod)
    const [toggle,setToggle]= useState(1)

    console.log(product)

    useEffect(() => {
        dispatch(fetchDetails(id))

    },[dispatch])
    

    const addCart=(item)=>{
        dispatch(addToCart(item))
    }



  return (
    <>
    <section className="bg-gray-300/10 py-8">
    <div className="px-12 pt-8 flex flex-col lg:grid lg:grid-cols-9 gap-2">
    {/* left */}
    <div className="col-span-4 w-full">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
    //   navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='w-full'
    >
    {product?.images?.map((image, index) => (
    <SwiperSlide key={index}>
      <img src={image} alt={index} className='w-full h-[552px]' />
    </SwiperSlide>))}
    </Swiper>

   

    </div>

{/*  */}
    <div className="col-span-5 w-full py-12 space-y-5 px-4">
    <h1 className="text-4xl font-semibold capitalize text-black/70 ">{product?.title}</h1>
    <h3 className="text-orange-400 text-xl font-bold">${product?.price}</h3>

    <p className="text-md text-gray-800 font-semibold tracking-[2px]">{product?.description}</p>
    <div className="w-full bg-slate-400 h-[1px]"></div>
    <div className="flex justify-between">
        <h4 className="text-sm text-gray-600">Brand</h4>
        <h4 className="text-sm text-gray-600">{product?.brand}</h4>
    </div>
    <div className="w-full bg-slate-400 h-[1px]"></div>
    <div className="flex justify-between">
        <h4 className="text-sm text-gray-600">Category</h4>
        <h4 className="text-sm text-gray-600">{product?.category}</h4>
    </div>
    <button className="px-6 py-4 rounded-2xl mt-6 hover:bg-emerald-600 duration-1000 text-2xl capitalize bg-cyan-700 font-semibold text-white shadow-2xl shadow-red-300 hover:translate-y-2" onClick={()=> addCart(product)}  >Add To Cart </button>

    </div>
    {/*  */}

    </div>

    </section>

    <div className="w-full bg-slate-400 h-[1px] mt-8"></div>

    <div className="flex w-full justify-center gap-8 mb-12  mt-6 ">
        <ul className="flex gap-8">
            <li className={`${toggle === 1 ?  'border-t-[3px] border-teal-900' : '' }  text-xl cursor-pointer text-gray-600 font-semibold  -mt-[1.6rem] py-6 tracking-[2px]  `}  onClick={() => setToggle(1)}><span className="">Description</span>
            </li>
            <li className={`${toggle === 2 ?  'border-t-[3px] border-teal-900' : '' }  text-xl cursor-pointer text-gray-600 font-semibold  -mt-[1.6rem] py-6 tracking-[2px]  `}  onClick={() => setToggle(2)}><span className="">Shipping & Delivery</span>
            </li>
        </ul>
    </div>

    <div className={`w-full  ${toggle === 1 ? 'px-14 py-8 grid grid-cols-2 lg:grid-cols-3 gap-6 my-10 ' :'hidden'} `}>
        <div className="">
        <h1 className="text-black text-2xl font-semibold mb-6">MAECENAS IACULIS</h1>
        <p className="text-md text-gray-500">Nunc per mollis pot enti amet imperdiet blandit dis eu sociosqu accumsan dap ibus ultricies tristique montes a deros adipiscing a justo. Aliquet mus a aptent ullamcorper metus accumsan. Habitasse a purus nec ipsum a urna ac ullamcorper varius metus blandit posuere.</p>

        <p className="text-md mt-4 text-gray-500">Consectetur parturient ad imperdiet torquent dui dis eu sociosqu accumsan accumsan dapibus ultricies. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibur.</p>
        </div>


        <div className="">
        <h1 className="text-black text-2xl font-semibold mb-6">MAECENAS IACULIS</h1>
        <p className="text-md text-gray-500">Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante a mollis habitant duis urna cum iaculis ullamcorper luctus.</p>

        <ul className="text-md mt-4 text-gray-500 flex flex-col gap-4">
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">65% Polyester, 23% Elastane</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Abitur parturient praesent ipsu</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Abitur parturient praesent ipsu</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Diam parturient dictumst nibh mu</span>
            </li>
        </ul>

        </div>

        <div className="">
        <h1 className="text-black text-2xl font-semibold mb-6">FEUGIAT PARTURIENT</h1>
        <p className="text-md font-semibold text-gray-500">Model’s height: 4’2.2”/184 cm</p>
        <p className="text-md font-semibold text-gray-500">Model is wearing: Size Large</p>


        <h1 className="text-black text-2xl font-semibold mb-6 my-6">ALIQUET</h1>
        <p className="text-md font-semibold text-gray-500">Quam suspendisse adipiscing quis pretium nostra cubilia tristique nam non ac placerat nascetur a vel.</p>
        <h1 className="text-black text-2xl font-semibold  my-4">CURABITUR VELIT</h1>
        <p className="text-md font-semibold text-gray-500">Main: 76% Polyester, 24% Elastane.</p>

        </div>

    </div>

    <div className={`w-full ${toggle === 2 ? 'grid  grid-cols-1 lg:grid-cols-2 gap-4 my-10 px-12': 'hidden' } `}>
        <div className="img w-full flex gap-2">
            <img src="/assets/wood-ship-1.jpg" alt="shipping" className='w-full' />
            <img src="/assets/wood-ship-3.jpg" alt="shipping-2" className='w-full' />
        </div>
        <div className="w-full px-4">
        <h1 className="text-black text-2xl font-semibold mb-6">MAECENAS IACULIS</h1>
        <p className="text-md text-gray-500">Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames nunc natoque dui.</p>
        <h1 className="text-black text-xl font-semibold my-6">ADIPISCING CONVALLIS BULUM</h1>
        <ul className="text-md  text-gray-500 flex flex-col gap-4">
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">65% Polyester, 23% Elastane</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Abitur parturient praesent ipsu</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Abitur parturient praesent ipsu</span>
            </li>
            <li className="flex items-center gap-6">
                <FaArrowRight /> <span className="text-sm font-semibold">Diam parturient dictumst nibh mu</span>
            </li>
        </ul>
        <p className="text-md my-4 text-gray-500">Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac parturient scelerisque vestibulum amet elit ut volutpat.</p>



        </div>
    </div>



    </>
  )
}

export default Details