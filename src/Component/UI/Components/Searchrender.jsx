import React, {useEffect, useState} from 'react'
import '../../Style/CompUi.css'
import {Link, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../../Feature/cartslice';

const SearchRender = () => {
    const dispatch = useDispatch();

    const loc = useLocation()
    const Data = loc.state
    // console.log(Data);

    const [side,setSide] = useState([])
    const [head,sethead] = useState("")

    const sideData = {
      Mobile:["Iphone","Oneplus","Samsung","Motorola","Oppo"],
      Electronics:["Mobile Accessories","Smart wearable Tech","Laptops","Tv & Appliances"],
      Fashion:["Beauty","Men","Female"],
      Furniture:["Kitchen Cookware & Serveware","Kitchen Storeage","Cleaning Supplies","Furnishing","Home Decor"]
    }


    if(side.length < 1 )
    {
      return(
        <div className='nosearch'>
          <img src='https://img.freepik.com/premium-vector/search-result-find-illustration_585024-17.jpg' />
        </div>
      )
    }
    else{
      useEffect(()=>{
        if(Data[0].category == "Mobile"){
          sethead("Mobile & Tablet")
          return setSide(sideData.Mobile)
        }
        if(Data[0].category == "Electronics"){
          sethead("Electronics")
          return setSide(sideData.Electronics)
        }
        if(Data[0].category == "Fashion"){
          sethead("Fashion")
          return setSide(sideData.Fashion)
        }
        if(Data[0].category == "Furniture"){
          sethead("Furniture")
          return setSide(sideData.Furniture)
        }
      },[loc])
  
      return (
            <div className="grid-parent">
     
              <div className="grid-1">
                <h2>{head}</h2>
                {
                  side && side.map((item,index)=>{
                    return(
                      <div key={index}>
                        <Link to={`/subcomp/${item}/${side}/${head}`} >
                        <p style={{textDecoration:"none" , color:"black"}}>{item}</p>
                        </Link>
                        <hr/>
                      </div>
                    )
                  })
                }
              </div>
    
              <div className='grid-2'>
              <div className='heroimg'>
                <p>Trend on Market Check Below</p>
                <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70" alt='Loading...'/>
              </div>
              {
                Data && Data.map((item,index)=>{
                  const{id=item.id,img=item.img,heading=item.heading,price=item.price} = item
                  return(
                    <div className='card' key={index}>
                        <Link className='linkcard'  to={`/rendercard/${item.id}/${item.category}` } >
                        <img src={item.img} alt='Loading ...'/>
                        <h2>{item.heading}</h2>
                        <span>⭐⭐⭐⭐⭐</span>
                        <h3>{"₹ " +item.price}</h3> 
                        </Link>
                        <button onClick={()=>dispatch(addtoCart({id,img,heading,price}))}>Add to cart</button>
                      </div>
                  )
                })
              } 
                
            </div> 
            </div>
      )
    }
}

export default SearchRender