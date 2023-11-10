import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

const NavRoutes = () => {
    const[data] = useState([
        {
            id : 0,
            img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
            heading : "APPLE iPhone 14 (Blue, 128 GB)",
            price : 57999,
            category : "Mobile",
            subcategory:"iphone"
        },
        {
            id : 1,
            img : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
            heading : "APPLE iPhone 15 (Blue, 128 GB)",
            price : 79900,
            category : "Mobile",
            subcategory:"iphone"
        }
        ,{
            id : 2,
            img : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagtc6fyrstd4jm.jpeg?q=70",
            heading : "APPLE iPhone 15 Plus (Black, 128 GB)",
            price : 89900,
            category : "Mobile",
            subcategory:"iphone"
        },
        {
            id : 3,
            img : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/x/h/-original-imagtc3k6zztrhnb.jpeg?q=70",
            heading : "APPLE iPhone 15 Pro Max (Blue Titanium, 256 GB)",
            price : 159900,
            category : "Mobile",
            subcategory:"iphone"
        },
        {
            id : 4,
            img : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/s/t/-original-imaghxengzjc2djt.jpeg?q=70",
            heading : "APPLE iPhone 14 Pro Max (Silver, 128 GB)",
            price : 127999,
            category : "Mobile",
            subcategory:"iphone"
        },
        {
            id : 5,
            img : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70",
            heading : "OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM)",
            price : 17139,
            category : "Mobile",
            subcategory:"oneplus"
        },
        {
            id : 6,
            img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/1/k/narzo-n53-rmx3761-realme-original-imagur5dgtujf37t.jpeg?q=70",
            heading : "Realme Narzo N53(Feather Black, 128GB)",
            des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi eaque molestiae cupidita sed. Ea beatae quia facilis voluptatum ab unde facere corporis aperiam, commodi perferendis, alias nemo possimus laboriosam!",
            rating : "4",
            price : 35000,
            category : "Mobilen",
            subcategory:"oneplus"
        }
    ])

    const [Data] = useState(Store)
  return (
    <div>
        <BrowserRouter>
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
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default NavRoutes