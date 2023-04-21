import React,{useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { fetchAllProducts, highSort, lowSort,rating } from '../store/actions.js/productAction';
import {Vortex} from 'react-loader-spinner'
import Pagination from '@mui/material/Pagination'




const Products = () => {
  const total = useSelector(state => state.prod.products?.total)
  const skip = useSelector(state => state.prod.products?.skip)

  const [page,setPage] = useState(skip || 0)
  const products = useSelector(state=>state.prod.products)
  const loading = useSelector(state=>state.prod.loading)
  const name= useParams().id






  const handleSort=(e)=>{
    if(e.target.value === 'high'){
    dispatch(highSort())
    }

    if(e.target.value === 'low'){
    dispatch(lowSort())
  }

  if(e.target.value === 'rating'){
    dispatch(rating())
  }


  }

  const handleChange=(e,page)=>{
      console.log(page)
      setPage(page)
    }

  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchAllProducts(page))

  },[dispatch,page])

  console.log(products)


  return (
    <>
    <header className="header  w-full py-[10rem]">
    <h1 className="text-5xl thin-light text-white/70 text-center">All Products</h1>
    <div className="w-[9rem] mx-auto h-[2px] mt-5 bg-yellow-500"></div>
    </header>
    {/*  */}


    <section className="pt-8 pb-16 w-full">
    <div className="px-12 flex flex-col lg:grid lg:grid-cols-8 gap-4 ">
    {/* <div className="col-span-2 px-2 lg:pt-28">
    <h2 className="text-2xl font-semibold text-black/70 capitalize">Filter By Brand</h2>


    </div> */}
    <div className="col-span-8">
    <div className="flex justify-end py-8">
    <select onChange={handleSort} defaultValue='default sorting' className='py-6 px-6 rounded-2xl bg-slate-700 text-white font-semibold' >
      <option value="default"  >Sort By Default</option>
      <option value="low">Sort By Price: low to high</option>
      <option value="rating">Sort By Rating</option>
      <option value="high">Sort By Price: high to low</option>
    </select>

    </div>
    <div className="pt-4">

      {loading ? <div className="w-full flex justify-center">
    <Vortex visible={true}
        height="400"
        width="400"

        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['black', 'pink', 'blue', 'yellow', 'orange', 'purple']}
        />
    </div> : 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card */}
        {products?.map((product,index)=>(
        <Link to={`/details/${product.id}`} className="group w-full shadow-xl " key={index} >
          <div className="img h-[20rem] overflow-hidden">
            <img src={product.thumbnail} className='w-full h-full group-hover:scale-150 duration-1000' alt="shoe" />
          </div>
          <div className="text-center py-2  bg-gray-300/40 space-y-3">
            <h3 className="text-md tracking-[2px] text-black/80 capitalize"><span className="text-md tracking-[2px] text-amber-800 font-semibold roboto">Title :</span> {product.title}</h3>
            <div className="flex justify-center">
            <span className="text-md tracking-[2px] text-amber-800 font-semibold roboto">Title :</span>
            <h4 className="text-md tracking-[2px] capitalize text-gray-700">{' '} {product.category}</h4>
            </div>

            <div className="flex justify-center">
            <span className="text-md tracking-[2px] text-amber-800 font-semibold roboto">Price :</span>
            <h4 className="text-md tracking-[2px] capitalize text-gray-700">{' '} {product.price}</h4>
            </div>

            <div className="flex justify-center">
            <span className="text-md tracking-[2px] text-amber-800 font-semibold roboto">Rating :</span>
            <h4 className="text-md tracking-[2px] capitalize text-gray-700">{' '} {parseInt(product.rating)}</h4>
            </div>

          </div>
        </Link>
        ))}
        {/*  */}
      </div>
    
    }

    <Pagination count={9} onChange={handleChange} page={page} variant="outlined" color="secondary" className='w-[80%] mx-auto py-[1rem] my-8 shadow-xl px-6 shadow-orange-500 bg-cyan-600'   />
      


    </div>

    </div>


    </div>
    </section>

    </>
  )
}

export default Products