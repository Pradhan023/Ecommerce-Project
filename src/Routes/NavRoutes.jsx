import React, { useEffect, useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../Component/UI/Components/Home'
import Furniture from '../Component/UI/Components/Furniture'
import Fashion from '../Component/UI/Components/Fashion'
import MobileTablet from '../Component/UI/Components/MobileTablet'
import Electronics from '../Component/UI/Components/Elctronics'
import Navbar from '../Component/UI/Navbar'
import Store from '../Component/Content/Store'
import Cart from '../Component/UI/Components/Cart'
import Authentication from '../Component/Authentication/Authentication'
import RenderCArd from '../Component/UI/Components/RenderCArd'
import Subcomp from '../Component/UI/Subcomp'
import axios from 'axios'
import Singup from '../Component/Authentication/Singup '
import Login from '../Component/Authentication/Login'
import SearchRender from '../Component/UI/Components/Searchrender'
import Success from '../Component/UI/Components/Stripe/Success'
import Cancel from '../Component/UI/Components/Stripe/Cancel'

const NavRoutes = () => {
    const [data , setData] = useState([])

    useEffect(()=>{
        axios.get("https://ecommerce-backend-s1ya.onrender.com/api/findData")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log("catch error"+err))
    },[])

    const [Data] = useState(Store)
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={
            <Data.Provider value={data}>
               <Home/>
            </Data.Provider>
            } />
            <Route path='/furniture' element={
            <Data.Provider value={data}>
                <Furniture/>
            </Data.Provider>
            } />
            <Route path='/fashion' element={
            <Data.Provider value={data}>
               <Fashion/>     
            </Data.Provider>
            } />
            <Route path='/mobile&tablet' element={
                <Data.Provider value={data}>
                    <MobileTablet/>
                </Data.Provider>
            } />
            <Route path='/electronics' element={
            <Data.Provider value={data}>
               <Electronics/>     
            </Data.Provider>
            } />
            
            <Route path='/cart' element={<Cart/>} />
            <Route path='/authentication' element={<Authentication/>} />
            <Route path='/rendercard/:id/:category' element={
                <Data.Provider value={data}>
                    <RenderCArd/>
                </Data.Provider>
            } />
            <Route path='/subcomp/:subcategory/:subroutes/:heading' element={
                <Data.Provider value={data}>
                    <Subcomp/>
                </Data.Provider>
            } />
            <Route path='/singup' element={<Singup/>} />
            <Route path='/signin' element={<Login/>} />
            <Route path='/searchcomp' element={<SearchRender/>} />
            <Route path='/success' element={<Success/>} />
            <Route path='/cancel' element={<Cancel/>} />
        </Routes>
    </div>
  )
}

export default NavRoutes