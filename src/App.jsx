import React, { useEffect, useState } from 'react'
import NavRoutes from './Routes/NavRoutes'
import Footer from './Component/UI/Components/Footer'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import Store from './Component/Content/Store'
import { Circles } from 'react-loader-spinner'

const App = () => {
  const [data , setData] = useState([])

    useEffect(()=>{
        axios.get("https://ecommerce-backend-s1ya.onrender.com/api/findData")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log("catch error"+err))
    },[])

    const [Data] = useState(Store)
    console.log(data);
    if(data.length === 0){
      return(
        <div style={{height:"100vh" , display:"flex", justifyContent:"center", alignItems:"center" , backgroundColor:"#e2e7f0"}}>
          <Circles
          height="100"
          width="100"
          color="#1f7678"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          />
          </div>
      )
    }
    else{
      return (
        <div>
          <BrowserRouter>
          <Data.Provider value={data}>
            <NavRoutes/>
            <Footer/>
          </Data.Provider>
          </BrowserRouter>
        </div>
      )
    }
}

export default App