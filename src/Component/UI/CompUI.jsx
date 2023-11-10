import React, { useState } from 'react'
import '../Style/CompUi.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../Feature/cartslice';

const CompUI = ({data,CompData,head}) => {
  const [Data] = useState(data);
  const [Compdata] = useState(CompData)
  const dispatch = useDispatch();

  return (
        <div className="grid-parent">

          <div className="grid-1">
            <h2>{head}</h2>
            {
              Compdata && Compdata.map((item,index)=>{
                return(
                  <div key={index}>
                    <p>{item}</p>
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
                    <Link className='linkcard'  to={`/rendercard/${index}/${item.category}` } state={CompData} >
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

export default CompUI