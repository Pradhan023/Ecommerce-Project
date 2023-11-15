import React from 'react'
import '../../Style/footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const Nav = useNavigate();
  const ScrollTo = () =>{
    window.scrollTo(0,0)
  }
  return (
    <div className='foot-gridParent'>
        <div className="foot-grid1">
          <h2>AP Store</h2>
          <p>AP STore one time solution for buying latest , trendy Technology and kitchen & Tech accessories and many more.</p>
        </div>
        <div className="foot-grid2">
          <h2>About</h2>
          <div>
            <p onClick={()=>{
              Nav('/');
              ScrollTo();
              }}>Home</p>
            <p onClick={()=>{
              Nav('/mobile&tablet');
              ScrollTo();
              }}>Mobile & Tablets</p>
            <p onClick={()=>{
              Nav('/electronics');
              ScrollTo();
              }}>Electronics</p>
            <p onClick={()=>{
              Nav('/fashion');
              ScrollTo();
              }}>Fashion</p>
            <p onClick={()=>{
              Nav('/furniture');
              ScrollTo();
              }}>Furniture</p>
          </div>
        </div>
        <div className="foot-grid3">
          <h2>Contact Me</h2>
          <div>
            <p>anishpradha5523@gmail.com</p>
            <p>+916005043329</p>
          </div>
        </div>
    </div>
  )
}

export default Footer