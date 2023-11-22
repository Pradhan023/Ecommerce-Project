import React from 'react'
import NavRoutes from './Routes/NavRoutes'
import Footer from './Component/UI/Components/Footer'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavRoutes/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App