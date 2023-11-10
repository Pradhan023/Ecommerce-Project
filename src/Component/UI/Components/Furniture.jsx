import React, { useContext , useState } from 'react'
import CompUI from '../CompUI'
import Store from '../../Content/Store'
import '../../Style/CompUi.css'


const Furniture = () => {
  const Data = useContext(Store)
  const[Mobiledata] = useState(["Kitchen, Cookware & Serveware","Kitchen Storeage","Cleaning Supplies","Furnishing","Home Decor"]);

  return (
    <div>
      <CompUI data = {Data} CompData={Mobiledata} head={"Furniture"} />
    </div>
  )
}

export default Furniture