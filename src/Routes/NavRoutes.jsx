import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../Component/UI/Components/Home'
import Furniture from '../Component/UI/Components/Furniture'
import Fashion from '../Component/UI/Components/Fashion'
import MobileTablet from '../Component/UI/Components/MobileTablet'
import Electronics from '../Component/UI/Components/Elctronics'
import Navbar from '../Component/UI/Navbar'
import Cart from '../Component/UI/Components/Cart'
import Authentication from '../Component/Authentication/Authentication'
import RenderCArd from '../Component/UI/Components/RenderCArd'
import Subcomp from '../Component/UI/Subcomp'
import Singup from '../Component/Authentication/Singup '
import Login from '../Component/Authentication/Login'
import SearchRender from '../Component/UI/Components/Searchrender'
import Success from '../Component/UI/Components/Stripe/Success'
import Cancel from '../Component/UI/Components/Stripe/Cancel'

const NavRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/furniture' element={<Furniture/>} />
            <Route path='/fashion' element={<Fashion/>} />
            <Route path='/mobile&tablet' element={<MobileTablet/> } />
            <Route path='/electronics' element={<Electronics/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/authentication' element={<Authentication/>} />
            <Route path='/rendercard/:id/:category' element={<RenderCArd/>} />
            <Route path='/subcomp/:subcategory/:subroutes/:heading' element={<Subcomp/>} />
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