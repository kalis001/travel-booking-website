import React from 'react'
import { Routes} from 'react-router-dom'
import Homee from './Component/Home/Homee'
import Navbar from './Component/Navbar/Navbar'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'


export default function Router() {
  return (
    <div>
        <Routes>
            {/* <Route path='/'element={<Navbar/>}></Route> */}
            {/* <Route path='/' element={<Homee/>}></Route> */}
            {/* <Route path='/' element={<Main/>}></Route> */}
        </Routes>

        <Navbar/>
        <Homee/>
        <Main/>
        <Footer/>
    </div>
  )
}
