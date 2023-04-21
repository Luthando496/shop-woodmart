import React,{useState,useEffect} from 'react'
import {FaMoneyBillAlt,FaBuilding,FaHandsHelping,FaShoppingCart,FaWallet,FaEnvelope,FaPhone,FaSearchLocation,FaTimes} from 'react-icons/fa'
import {CiMenuBurger} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { auth } from '../firebase'
import {onAuthStateChanged,signOut } from "firebase/auth";


const Navbar = () => {

    const [toggle,setToggle]= useState(1)
    const [show,setShow]= useState(false)
    const [cartShow,setCart]= useState(false)
    const {user} = useSelector(state => state.user)

    const logOut =()=>{
      signOut(auth)
    
    }

    const handleSignIn =()=>{
      try{
  
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
          dispatch(signIn(currentUser))
        })
    
        return ()=>{
        
          unsubscribe()
        }
      
      }catch(err){
        console.log(err)
      }
      
  
    }

    useEffect(()=>{
      handleSignIn()
     
    },[])

    


  return (
    <nav className="blue-1 py-4 w-full">
    <div className="w-[90%] mx-auto flex justify-between items-center">
    <Link to='/' className="text-2xl md:text-4xl font-light text-white">Shopi</Link>

    <ul className="flex items-center gap-2 lg:gap-6">
      <li className="hover:bg-white/10  cursor-pointer duration-700 px-6 py-4 rounded-2xl">
        <Link to='/' className="text-sm lg:text-xl font-semibold text-white">Home</Link>
      </li>
      <li className="hover:bg-white/10 duration-700  cursor-pointer px-6 py-4 rounded-2xl">
      {user?.displayName ? <Link to='/' onClick={logOut}  className="text-sm lg:text-xl font-semibold text-white">Logout</Link>:<Link to='/login' className="text-sm lg:text-xl font-semibold text-white">Login</Link> }
        
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <Link to='/products' className="text-sm lg:text-xl font-semibold text-white">All Products</Link>
      </li>
    </ul>



    <Link to='/cart'  className='px-4 hidden lg:block py-2 rounded-lg bg-sky-600 relative'  variant="contained">
    {/* <span>Cart</span> */}
    <FaShoppingCart size={30} fill='white' /> </Link>


    </div>
     
    </nav>
  )
}

export default Navbar