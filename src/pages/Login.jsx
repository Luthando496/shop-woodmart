import React,{useEffect, useState} from 'react'
import {FaGoogle} from 'react-icons/fa'
import { register, signIn } from '../store/actions.js/userAction'
import {useDispatch,useSelector} from 'react-redux'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../firebase'


const Login = () => {
  
  const googleSignIn = async() => {
    // const 

    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth,provider)
  }

  const {user} = useSelector(state => state.user)

  const dispatch = useDispatch()

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
    <>
    <section className="w-full py-8 loginpage">
    <div className="flex justify-center items-center w-full">
      <div  className="py-8 px-10 w-[90%] lg:w-[50%] mx-auto rounded-xl shadow-2xl shadow-slate-600 bg-stone-700/50 my-8 ">
        {/* <h1 className="font-semibold text-5xl uppercase text-sky-600 text-center my-8 tracking-[3px]">Login</h1>

        <div className="form-control my-8 space-y-3">
          <h3 className="px-4 text-3xl uppercase font-bold text-emerald-700 tracking-[3px]">Email</h3>
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder='Your Email Account' className="w-full focus:border-[3px] text-gray-600 text-xl focus:outline-none focus:border-green-500 duration-300  px-12 py-4 rounded-xl" />
        </div>
        <div className="form-control space-y-3 my-12">
          <h3 className="px-4 text-3xl  font-bold uppercase text-emerald-700 tracking-[3px]">Password</h3>
          <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} required placeholder='Your Password' className="w-full focus:border-[3px] text-gray-600 text-xl focus:outline-none focus:border-green-500 duration-300  px-12 py-4 rounded-xl" />
        </div>

          <div className="w-full flex justify-end">
        <button className="my-2 px-8 py-4 rounded-xl bg-green-600 text-white text-xl font-semibold text-center">Submit</button>

          </div> */}

        <div className="google mt-12">
        <GoogleButton onClick={googleSignIn} className='' />
        </div>
      </div>
    </div>

    </section>
        
    </>
  )
}

export default Login