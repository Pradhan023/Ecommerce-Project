import React from 'react'
import '../../Style/cart.css'
import { useSelector } from 'react-redux'
import { RemoveItem } from '../../../Feature/cartslice'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const dispatch =useDispatch()
  const data = useSelector((state)=>state.Cart.cart);
  const price = data.map((item)=> item.price)
  let sum = 0;
  for(let i = 0 ; i < price.length ; i++)
  {
    sum = price[i]+sum
  }

  return (
    <div>
      <h2 className='headcart'>Cart</h2>
      
      <div className='cart-content'>

        <div className='headOfcart'>
          <h4>Product</h4>
          <h4>Title</h4>
          <h4>Price</h4>
        </div>

        <div>
          {
            data && data.map((item,index)=>{
              
              return(
                <div className='content-cart' key={index}>
                  <img src={item.img} alt='Loading...' />
                  <div className='cart-subcontent'>
                  <h2>{item.heading}</h2>
                  <button className='remove-cart' onClick={()=>dispatch(RemoveItem({id:item.id}))}>Remove Cart</button>
                  </div>
                  <h2 className='cartprice'>{"₹ " +item.price}</h2>
                </div>
              )
            })
          }
        </div>
        
        <div className='total'>
          <h2>Total </h2>
          <h1>{sum}</h1>
        </div>

        <div className='buy'>
          <button >Buy Now</button>
        </div>

      </div>
    </div>
  )
}

export default Cart