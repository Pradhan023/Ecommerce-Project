import React from 'react'
import '../../Style/cart.css'
import { useSelector } from 'react-redux'
import { RemoveItem , increaseQuantity , decreaseQuantity } from '../../../Feature/cartslice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'

const Cart = () => {
  const dispatch =useDispatch()

  const Nav = useNavigate()

  const data = useSelector((state)=>state.Cart.cart);
 
  //price sum
  const sum = data.reduce((acc, item) => {
    console.log(item);
    return acc + item.price * item.quantity;
  }, 0);

  const stripePayment = async()=>{
    const stripe =await loadStripe("pk_test_51OFIngSEzJx90BYMsS58schJO5W4mfb11nhMesoKWfuGwRPqPNyK7cRkpqoxSPdrZZjAHcwlKx1UHmOHvad4Xx0X00jzoYxvbR")

  const body ={
    products:data
  }
  const headers={
    "Content-Type":"application/json"
  }
  const response = await fetch("https://ecommerce-backend-s1ya.onrender.com/api/out/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
  })
  const session= await response.json();

  const result =stripe.redirectToCheckout({
    sessionId:session.id
  })
  if(result.error){
    console.log(result.error)
  }

  }

  return (
    <div>
      <h2 className='headcart'>Cart</h2>

      {
        data.length > 0 ? 
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
          <button onClick={stripePayment} >Buy Now</button>
        </div>
      </div>

      : <div className='noitem'>
        <img src="https://shop.millenniumbooksource.com/static/images/cart1.png" />
      </div>
      }

    </div>
  )
}

export default Cart