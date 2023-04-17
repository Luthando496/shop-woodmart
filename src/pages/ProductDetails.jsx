import React,{useEffect,useState} from 'react'
import axios from 'axios'



const ProductDetails = () => {
  const [products,setProducts] = useState(null)

  const fetchProducts = async()=>{
  
    const {data} = await axios.get('https://dummyjson.com/products')
    setProducts(data)
  
  }


  useEffect(()=>{
    fetchProducts()

  },[])


  return (
    <>
    <header className="header  w-full py-[10rem]">
    <h1 className="text-5xl thin-light text-white/70 text-center">Furniture</h1>
    <div className="w-[9rem] mx-auto h-[2px] mt-3 bg-yellow-500"></div>
    </header>
    {/*  */}


    <section className="pt-8 pb-16 w-full">
    <div className="px-12 flex flex-col lg:grid lg:grid-cols-8 gap-4 ">
    <div className="col-span-2 px-2 lg:pt-28">
    <h2 className="text-2xl font-semibold text-black/70 capitalize">Filter By Brand</h2>


    </div>
    <div className="col-span-6">
    <div className="flex justify-end py-8">
    <select  defaultValue='default sorting' className='py-6 px-6 rounded-2xl bg-slate-700 text-white font-semibold' >
      <option value="popularity">Sort By Popularity</option>
      <option value="">Sort By Rating</option>
      <option value="">Sort By Price: low to high</option>
      <option value="">Sort By Price: high to low</option>
    </select>

    </div>
    <div className="pt-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card */}
        {products && products?.products?.map((product,index)=>(
        <div className="group w-full" key={index} >
          <div className="img h-[20rem] overflow-hidden">
            <img src={product.thumbnail} className='w-full h-full group-hover:scale-150 duration-1000' alt="shoe" />
          </div>
          <div className="text-center py-2">
            <h3 className="text-md text-black/80 capitalize">{product.title}</h3>
            <h4 className="text-sm text-gray-300">{product.category}</h4>
            <span className="tex-md font-semibold text-orange-600">$ {product.price}</span>
          </div>
        </div>
        
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

export default ProductDetails