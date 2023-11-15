import React, { useState } from 'react'
import Singup from './Singup '
import Login from './Login'

const Authentication = () => {
  const[authVal,setauthVal] = useState(true)
  return (
    <div>
      {
        authVal? <Login/> : <Singup/>
      }
    </div>
  )
}

export default Authentication