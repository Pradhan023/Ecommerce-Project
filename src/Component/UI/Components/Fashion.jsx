import React, { useContext , useState } from 'react'
import CompUI from '../CompUI'
import Store from '../../Content/Store'
import '../../Style/CompUi.css'

const Fashion = () => {
  const Data = useContext(Store)
  const filtered = Data && Data.filter((item)=> item.category === "Fashion")
  const[Mobiledata] = useState(["Beauty","Men","Female"]);
  return (
    <div>
      <CompUI data = {filtered} CompData={Mobiledata} head={"Fashion"} />
    </div>
  )
}

export default Fashion