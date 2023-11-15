import React from 'react'
import '../../Style/cart.css'
import { useSelector } from 'react-redux'
import { RemoveItem , increaseQuantity , decreaseQuantity } from '../../../Feature/cartslice'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const dispatch =useDispatch()

  const data = useSelector((state)=>state.Cart.cart);
 
  //price sum
  const sum = data.reduce((acc, item) => {
    console.log(item);
    return acc + item.price * item.quantity;
  }, 0);


  return (
    <div>
      <h2 className='headcart'>Cart</h2>
      
      <div className='cart-content'>

        <div className='headOfcart'>
          <h4>Product</h4>
          <h4>Title</h4>
          <h4>Price</h4>
        </div>

        <div className='cartcontent-outter'>
          {
            data && data.map((item,index)=>{
              const {id=item.id,price=item.price} = item
              return(
                <div className='content-cart' key={index}>
                  <img src={item.img} alt='Loading...' />
                  <div className='cart-subcontent'>
                  <h2>{item.heading}</h2>
                  <button className='remove-cart' onClick={()=>dispatch(RemoveItem({id:id}))}>Remove Cart</button>
                  </div>
                  <h2 className='cartprice'>{"₹ " +price}</h2>

                    {/* increase decrese quantity*/}
                    <div className='IncreDecre'>  
                      <button className="incre" onClick={() => dispatch(decreaseQuantity({ id }))}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button className="decre" onClick={() => dispatch(increaseQuantity({ id }))}>+</button>
                    </div>
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