import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../src/Header.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {setUser, userslicepath } from './slice/user.slice.js'
import axios from 'axios';
import Home from './Home/Index.jsx'

function App() {
  const [loading, setloading] = useState(true)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const selector= useSelector(userslicepath)
  const fetchdata = async (token) => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1" +"/auth/profile", {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      
      dispatch(setUser(data.user));
  
      setloading(false);
      return;
    } catch (error) {
      console.log(error);
      navigate("/login");
      return;
    }
  };  
  useEffect(()=>{
    const token=localStorage.getItem("token") ||""
    if(!token){
      navigate("/login")
      return
    }else{
      (async()=>{
        await fetchdata(token)
      })()
    }
  },[])

  if(loading){
    return <div>loading</div>
  }
  return (
    <div className='bg-[#f7fcfdff]'>
    <Header/>
    <Home>
    <Outlet/>
    </Home>
    </div>
  )
}

export default App
