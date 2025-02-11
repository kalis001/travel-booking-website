import React, { useEffect } from 'react'
import './Homee.css'
import video1 from './videoplayback.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsList } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Homee() {

  useEffect(()=>{
    Aos.init({duration:2000})

    
  },[]) 

  return (
    <div>
      <section className='home'>
        <div className="overlay">

        </div>
        <video src={video1} autoPlay muted loop></video>

        <div className="homecontent container">
          <div className="text-div">
            <span data-aos="fade-up" className="small-text">
              Our Packages
            </span>
            <h1 data-aos="fade-up" className="home-tittle">
              Search your holidays
            </h1>
          </div>

          <div data-aos="fade-up" className="card-div grid">
            <div className="destination-input">
              <label htmlFor="city">Search Your destination :</label>
              <div className="input flex">
                <input type="text" placeholder='Enter name here...' />
                <GrLocation className='icon' />
              </div>
            </div>
            <div className="date-input">
              <label htmlFor="city">select Your date :</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>
            <div className="price-input">
              <div className="label-total flex">
                <label htmlFor="price">Max Price : </label>
                <h3 className="total"> $5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max='5000' min='500' />
              </div>
            </div>
            <div className="search-option flex">
              <HiFilter className='icon' />
              <span>MORE FILTERS</span>
            </div>
          </div>

          <div data-aos="fade-up" className="homefooter-icon flex">
            <div className="right-icon">
              <FiFacebook className='icon' />
              <AiOutlineInstagram className='icon' />
              <SiTripadvisor className='icon' />
            </div>
            
            <div className="left-icon">
              <BsList className='icon' />
              <TbApps className='icon' />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
