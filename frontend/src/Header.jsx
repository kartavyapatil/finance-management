import React from 'react'
import {useDispatch } from 'react-redux'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import { removeUser } from '../src/slice/user.slice.js';
import { useNavigate } from 'react-router-dom';
import logo from "../src/assets/logo.png"

const Header = () => {
  const dispatch = useDispatch();
   const navigate =useNavigate()
   const logout=()=>{
    try {
      localStorage.removeItem("token");
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <>
    <header>
      <nav className='flex justify-between items-center shadow-sm '>
        <div className='start flex items-center gap-2' >
          <div className='logo'>
            <img src={logo} className='w-16 ml-3 mt-2' alt="logo" />
          </div>
          <div className='logo-name font-serif font-bold text-2xl'>
            finance tracker
          </div>
        </div>
        <div className='end '>
          <button className='pl-4 ml-3 cursor-pointer' onClick={logout}><IoLogOutOutline size={27} /></button>
        </div>
      </nav>
      {/* <div className='w-full h-[0.5vh] bg-slate-300'></div> */}
    </header>
    </>
  )
}

export default Header
