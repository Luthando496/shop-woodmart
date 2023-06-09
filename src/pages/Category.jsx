import React,{useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { fetchCategory } from '../store/actions.js/productAction';
import {Vortex} from 'react-loader-spinner'
import { highSort, lowSort,rating } from '../store/actions.js/productAction';



const ProductDetails = () => {
  const total = useSelector(state => state.prod.products?.total)
  const skip = useSelector(state => state.prod.products?.skip)

  const [totalPage,setTotalPage] = useState(total || 1)
  const [page,setPage] = useState(skip || 1)
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

  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchCategory(name))

  },[dispatch])

  console.log(products)


  return (
    <>
    <header className="header  w-full py-[10rem]">
    <h1 className="text-5xl thin-light uppercase text-white/70 text-center">{name}</h1>
    <div className="w-[9rem] mx-auto h-[2px] mt-5 bg-yellow-500"></div>
    </header>
    {/*  */}


    <section className="pt-8 pb-16 w-full">
    {loading ? <div className="w-full flex justify-center">
    <Vortex visible={true}
        height="400"
        width="400"

        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['black', 'pink', 'blue', 'yellow', 'orange', 'purple']}
        />
    </div> :(
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
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card */}
        {products && products?.map((product,index)=>(
        <Link to={`/details/${product.id}`} className="group w-full" key={index} >
          <div className="img h-[20rem] overflow-hidden">
            <img src={product.thumbnail} className='w-full h-full group-hover:scale-150 duration-1000' alt="shoe" />
          </div>
          <div className="text-center py-2">
            <h3 className="text-md text-black/80 capitalize">{product.title}</h3>
            <h4 className="text-sm text-gray-300">{product.category}</h4>
            <span className="tex-md font-semibold text-orange-600">$ {product.price}</span>
          </div>
        </Link>
        
        ))}
        {/*  */}
      </div>
      {/* <Pagination count={totalPage} onChange={handleChange} page={page}  variant="outlined" shape="rounded" color="primary" className='w-[95%] lg:w-[90%] mx-auto py-[1rem]' size='large'   /> */}


    </div>

    </div>


    </div>
    ) }
    
    </section>

    </>
  )
}

export default ProductDetails