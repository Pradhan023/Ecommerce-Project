import React, { useContext } from 'react'
import {Link, useParams } from 'react-router-dom'
import Store from '../../Content/Store';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../../Feature/cartslice';
import '../../Style/rendercard.css'

const RenderCArd = () => {
  const params = useParams()
  const paramId = params.id
  const paramcat = params.category
  const Data = useContext(Store);
  console.log(Data[paramId]);
  const {id=Data[paramId].id,img=Data[paramId].img,heading=Data[paramId].heading,price=Data[paramId].price} = Data

  const dispatch = useDispatch();

  const ScrollTo = () =>{
    window.scrollTo(0,0)
  }

  return (
    <div className='newpage-parent'>
      <h2>{paramcat}</h2>
      <div className='container-newpage'>

        <img src={Data[paramId].img} /> 
        <div className='newpage-subpage'>
          <h1>{Data[paramId].heading}</h1>
          <p>⭐⭐⭐⭐⭐</p>
          <h1>{"₹ " +Data[paramId].price}</h1>
          <button onClick={()=> dispatch(addtoCart({id,img,heading,price}))} >Add To Cart</button>
        </div>

      </div>
      <div className='newpage-gif'>
        <img src="https://f.hubspotusercontent10.net/hubfs/6410061/hub_generated/resized/090af29a-9380-4c29-986a-fa483eb69cfb.gif"  />
      </div>

      <div className='more-card'>
        {
          Data.filter((item)=> item.category === paramcat).map((item,index)=>{
            if(index < 4){
              return(
                <div className='more-card-content' >
                  <Link onClick={ScrollTo} to={`/rendercard/${index}/${item.category}`} className='link-more-card-content'>
                  <img src={item.img} />
                  <h2>{item.heading}</h2>
                  <p>⭐⭐⭐⭐⭐</p>
                  <h2>{item.price}</h2>
                  </Link>
                  <button onClick={()=> dispatch(addtoCart({id,img,heading,price}))}>Add To Cart</button>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default RenderCArd