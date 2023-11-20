import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {RxAvatar} from 'react-icons/rx'
import {HiMenuAlt1} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import '../Style/Ui.css'
import { Link, NavLink, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Navbar = () => {
    const[menuval,setMenuval] = useState(true)
    const[menuNav,setMenuNav] = useState(true)
    const[menuSearch,setMenuSearch] = useState(true)
    const menutoggle = ()=>{
        setMenuval(!menuval)
        setMenuNav(!menuNav)
        setMenuSearch(!menuSearch)
    }

    const[Mobiledata] = useState(["iphone","Oneplus","Samsung","Motorola","Oppo"]);
    const[Elctronicsdata] = useState(["Mobile Accessories","Smart wearable Tech","Laptops","Tv & Appliances"])
    const[Fashiondata] = useState(["Beauty","Men","Female"])
    const[furnituredata] = useState(["Kitchen, Cookware & Serveware","Kitchen Storeage","Cleaning Supplies","Furnishing","Home Decor"])


    const[val,setval] = useState({
        value:"",
        btn:""
    })

    const Nav = useNavigate()

    const token = localStorage.getItem("token")
    const userName = localStorage.getItem("username")
    useEffect(()=>{
      if(token){
          setval({
            value:userName,
            btn:"LogOut"
          });
        }
      else{
        setval({
          value:"Profile",
          btn:"SignIn"
        })
      }
    },[token,Nav,userName])
  
    const handleClick = ()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      Nav("/")
    }
    
    const cartItem = useSelector((state)=>state.Cart.cart)

    
    const [searchval,setSearchval] = useState('')
    const [searchdata,setSearchdata] = useState([])

        useEffect(()=>{
            axios.get(`https://ecommerce-backend-s1ya.onrender.com/api/search?name=${searchval}`)
        .then((res)=> setSearchdata(res.data))
        .catch((Err)=> console.log("search error",Err))
        },[searchdata])

  
    return (
    <div>
        <div className='Container'>
            <h2 className='logo'>AP Store</h2>
          
                <nav className='links'>
                    <ul className={menuNav ? 'links-show'  : 'links-grid'}>
                        <li className={menuSearch ? 'search-show' : 'search-1'}>
                        <input className='search-input1' type='text' placeholder='Search for Product or Brand & more' onChange={(e)=>setSearchval(e.target.value)}/>
                        <button className='searchBtn1'><Link to='/searchcomp' state={searchdata}><AiOutlineSearch/></Link></button>
                        </li>
                        <li>
                            <NavLink className='navlinks' to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='navlinks' to='/mobile&tablet'>Mobile & Tablets</NavLink>
                            <div className='sublinks'>
                                {
                                    Mobiledata.map((item,index)=>{
                                        const[CompData] = useState(["Iphone","Oneplus","Samsung","Motorola","Oppo"]);
                                        return(
                                            <Link key={index} to={`/subcomp/${item}/${CompData}/Mobile & Tablet`} >
                                            <span>{item}</span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </li>
                        <li>
                            <NavLink className='navlinks' to='/electronics'>Electronics</NavLink>
                            <div className='sublinks'>
                                {
                                    Elctronicsdata.map((item,index)=>{
                                        const[CompData] = useState(["Mobile Accessories","Smart wearable Tech","Laptops","Tv & Appliances"]);
                                        return(
                                            <Link key={index} to={`/subcomp/${item}/${CompData}/Electronics`} >
                                                <span>{item}</span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </li>
                        <li>
                            <NavLink className='navlinks' to='/fashion'>Fashion</NavLink>
                            <div className='sublinks'>
                                {
                                    Fashiondata.map((item,index)=>{
                                        const[CompData] = useState(["Beauty","Men","Female"]);
                                        return(  
                                            <Link key={index} to={`/subcomp/${item}/${CompData}/Fashion`} >
                                                <span>{item}</span>
                                            </Link>                             
                                        )
                                    })
                                }

                            </div>
                        </li>
                        <li>
                            <NavLink className='navlinks' to='/furniture'>Furniture</NavLink>
                            <div className='sublinks'>
                                {
                                    furnituredata.map((item,index)=>{
                                        const[CompData] = useState(["Kitchen Cookware & Serveware","Kitchen Storeage","Cleaning Supplies","Furnishing","Home Decor"]);
                                        return(
                                            <Link key={index} to={`/subcomp/${item}/${CompData}/Furniture`} >
                                                <span>{item}</span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className='search'>
                    <input className='search-input' type='text'  placeholder='Search for Product or Brand & more' onChange={(e)=>setSearchval(e.target.value)}/>
                    <button className='searchBtn'><Link to='/searchcomp' state={searchdata}><AiOutlineSearch/></Link></button>
                </div>
                <span className='cart'><Link to='/cart' ><AiOutlineShoppingCart color='black'/></Link><span style={{fontSize:"24px" , color:"burlywood"}}>{cartItem.length}</span></span>
            <div className='profile'><RxAvatar/>
                <div className='prorile-menu'>
                  <span>{val.value}</span>
                  {
                    val.btn == "LogOut" ? <span onClick={handleClick}>{val.btn}</span> :  <span className='authStyle'><Link to='/authentication'>{val.btn}</Link></span>
                  }
                </div>
            </div>
            <span onClick={menutoggle} className='menu'>{menuval ? <HiMenuAlt1/> : <AiOutlineClose/> }</span>
        </div>
    </div>
  )
}

export default Navbar