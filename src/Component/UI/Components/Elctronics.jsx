import React, { useContext , useState } from 'react'
import CompUI from '../CompUI'
import Store from '../../Content/Store'
import '../../Style/CompUi.css'

const Elctronics = () => {
  const Data = useContext(Store)
  const filtered = Data && Data.filter((item)=> item.category === "Electronics")
  const[Mobiledata] = useState(["Mobile Accessories","Smart wearable Tech","Laptops","Tv & Appliances"]);
  
  return (
    <div>
      <CompUI data = {filtered} CompData={Mobiledata} head={"Electronics"} />
    </div>
  )
}

export default Elctronics