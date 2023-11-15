import React, { useContext, useState } from 'react'
import '../Style/CompUi.css'
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../Feature/cartslice';
import Store from '../Content/Store';

const Subcomp = () => {
    const dispatch = useDispatch();
    const Data = useContext(Store)
    const params = useParams()
    const subCategory = params.subcategory;
    const subRoute = params.subroutes
    const head = params.heading
    console.log(subRoute);
    const array = subRoute.split(",")
    console.log(array);
    const filtered = Data && Data.filter((item)=> item.subcategory == subCategory)
    console.log(filtered);
  
    return (
          <div className="grid-parent">
   
            <div className="grid-1">
              <h2>{head}</h2>
              {
                array && array.map((item,index)=>{
                  return(
                    <div key={index}>
                      <Link to={`/subcomp/${item}/${array}/${head}`} >
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
              filtered && filtered.map((item,index)=>{
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

export default Subcomp