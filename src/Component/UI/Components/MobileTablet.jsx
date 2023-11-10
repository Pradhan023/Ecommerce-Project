import React, { useContext , useState } from 'react'
import CompUI from '../CompUI'
import Store from '../../Content/Store'
import '../../Style/CompUi.css'

const MobileTablet = () => {
  const Data = useContext(Store)
  const[Mobiledata] = useState(["iphone","Oneplus","Samsung","Motorola","Oppo"]);
  const filtered = Data && Data.filter((item)=>item.category === "Mobile")

  return (
    <div>
      <CompUI data = {filtered}  CompData={Mobiledata} head={"Mobile & Tablet"} />
    </div>
  )
}

export default MobileTablet