import React, { useContext , useState } from 'react'
import CompUI from '../CompUI'
import Store from '../../Content/Store'
import '../../Style/CompUi.css'


const Furniture = () => {
  const Data = useContext(Store)
  const filtered = Data && Data.filter((item)=> item.category === "Furniture")
  console.log(filtered);
  const[Mobiledata] = useState(["Kitchen Storeage","Cleaning Supplies","Furnishing","Home Decor"]);

  return (
    <div>
      <CompUI data = {filtered} CompData={Mobiledata} head={"Furniture"} />
    </div>
  )
}

export default Furniture