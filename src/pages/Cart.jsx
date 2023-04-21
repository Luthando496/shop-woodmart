import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import { RemoveItem, clearCartAction } from '../store/actions.js/cartActions'




const Cart = () => {
  const {products} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const totalAmount = products?.reduce((acc, item) => acc +  item.price,0)
  const total = totalAmount + 30
  const total_items = products?.length

  const clearCart=()=>{
  dispatch(clearCartAction())
  }
  const handleRemove=(id)=>{
  dispatch(RemoveItem(id))
  }


  return (
    <>
    <section className="lg:grid flex flex-col lg:grid-cols-3 py-20 w-full">
      {/* left */}
      <div className="lg:px-20 px-10 col-span-2 mb-10 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-black text-2xl font-semibold">Shopping Cart</h2>
        <h2 className="text-black text-2xl font-semibold">{total_items} Items</h2>
      </div>
      {/* <input type="number" value={8} /> */}


      <div className="w-full bg-gray-500 h-[1px]  my-6"></div>

      <div className="flex items-center w-full">
        <button onClick={clearCart} className="text-xl self-end my-4 text-white font-semibold bg-red-700 rounded-xl px-4 py-2">Clear Cart</button>
      </div>

      <table className='w-full shadow-lg border shadow-slate-950'>
        <thead className='bg-sky-700'>
          <tr className='bg-sky-700 py-8'>
            <th className="px-4 py-8 text-gray-800 font-bold text-md lg:text-2xl">Product Details</th>
            <th className="px-4 py-8 text-gray-800 font-bold text-md lg:text-2xl">Price</th>
            <th className="px-4 py-8 text-gray-800 font-bold text-md lg:text-2xl">Quantity</th>
            <th className="px-4 py-8 text-gray-800 font-bold text-md lg:text-2xl">Total</th>
            <th className="px-4 py-8 text-gray-800 font-bold text-md lg:text-2xl">Remove</th>
          </tr>
        </thead>
        <tbody>
        {products?.map((product,index) => (
          <tr className='my-8 border-b border-b-red-700' key={product.id}>
          <td className="px-2 text-gray-500 text-center font-light flex gap-6 items-center">
            <img src={product.thumbnail} className='w-[70px] md:w-[150px] lg:w-[200px] lg:h-[200px]' alt="lamp" />
            <p className="text-gray-500 hidden xl:inline-block font-light">{product.title}</p>
          </td>
          <td className="px-2  text-black/70 tracking-[2px] text-center font-semibold">${product.price}</td>
          <td className="px-2  text-black/70 tracking-[2px] text-center font-semibold relative">{product.stock}</td>
          <td className="px-2  text-black/70 tracking-[2px] text-center font-semibold">$ {product.price}</td>
          <td className="px-2  text-black/70 tracking-[2px] text-center font-semibold"> 
          <button onClick={(e)=>handleRemove(product.id)}  className="px-4 py-2 rounded-lg bg-red-500">
            <FaTimes />
          </button> 
          </td>
        </tr>
        ))}


        </tbody>
      </table>
      </div>

      <div className="col-span-1 px-20  py-20 border-2 border-gray-500">
      <h1 className="text-2xl black text-center font-semibold">Order Summary</h1>
      <div className="w-full bg-gray-800 h-[1px]  my-6"></div>
      <div className="flex justify-between py-4 my-8 border-b">
        <h2 className="text-black text-2xl font-semibold">Subtotal</h2>
        <h2 className="text-black text-2xl font-semibold">${totalAmount}</h2>
      </div>
      <div className="flex justify-between py-4 items-center my-8 border-b">
        <h4 className="text-black/60 text-xl font-semibold">Shipping Price</h4>
        <p className="text-orange-400 text-xl font-semibold">$30</p>

      </div>
      <div className="flex justify-between py-4 items-center my-8 border-b">
        <h1 className="text-orange-500 text-2xl font-semibold">Total Price</h1>
        <p className="text-orange-400 text-xl font-semibold">${total}</p>
      </div>

      <button className="px-6 py-4 bg-orange-500 hover:bg-yellow-500 duration-700 text-white font-semibold">Proceed Checkout</button>


      </div>
    </section>

    </>
  )
}

export default Cart