import React, { useContext , useState } from 'react'
import CompUI from '../CompUI'
import Store from '../../Content/Store'
import '../../Style/CompUi.css'

const MobileTablet = () => {
  const Data = useContext(Store)
  console.log(Data , "jj");
  const filtered = Data.filter((item)=>item.category === "Mobile")
  console.log(filtered);
  const[Mobiledata] = useState(["Iphone","Oneplus","Samsung","Motorola","Oppo"]);

  return (
    <div>
      <CompUI data = {filtered}  CompData={Mobiledata} head={"Mobile & Tablet"} />
    </div>
  )
}

export default MobileTablet