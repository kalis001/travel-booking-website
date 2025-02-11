import React from 'react'
import Homee from './Component/Home/Homee'
import Navbar from './Component/Navbar/Navbar'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'


export default function Router() {
  return (
    <div>
      <Navbar />
      <Homee />
      <Main />
      <Footer />
    </div>
  )
}
