import React, { useEffect } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import video2 from './videoplayback (2).mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'




export default function Footer() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div>
      <section className="footer">
        <div className="video-div">
          <video src={video2} autoPlay muted loop></video>
        </div>
        <div className="sea-content container">
          <div className="contact-div flex">
            <div data-aos='fade-up' className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div className="input-div flex">
              <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
              <button data-aos='fade-up' className='btn flex' type='submit'>
                SEND <FiSend className='icon' />
              </button>
            </div>
          </div>

          <div className="footer-card flex">
            <div className="footer-intro flex">
              <div className="logo-div">
                <Link to={'/'} className='logo flex'>
                  <MdOutlineTravelExplore className='icon' />
                  Travel.
                </Link>
              </div>

              <div data-aos='fade-up' className="footer-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut, corporis nam ut facere harum itaque. Ullam repellendus incidunt, doloremque, facere quidem voluptates, dicta iste nobis suscipit nostrum quisquam nisi.
              </div>

              <div data-aos='fade-up' className="footer-social flex">
                <AiOutlineTwitter className='icon' />
                <AiFillYoutube className='icon' />
                <AiFillInstagram className='icon' />
                <FaTripadvisor className='icon' />

              </div>
            </div>

            <div className="footer-links grid">
              <div data-aos='fade-up' data-aos-duration='3000' className="link-group">
                <span className="group-tittle">
                  OUR AGENCY
                </span>

                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  services
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Insurance
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Agency
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Tourism
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Payment
                </li>
              </div>

              <div data-aos='fade-up' data-aos-duration='4000' className="link-group">
                <span className="group-tittle">
                  PARTNERS
                </span>

                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Bookings
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Rentcars
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  HostelWorld
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Trivago
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  TripAdvisor
                </li>
              </div>

              <div data-aos='fade-up' data-aos-duration='5000'  className="link-group">
                <span className="group-tittle">
                  LAST MINUTE
                </span>

                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  London
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  California
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Indonesia
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Europe
                </li>
                <li className="footer-list flex">
                  <FiChevronRight className='icon' />
                  Oceania
                </li>
              </div>

            </div>

             <div className="footer-div flex ">
               <small>BEST TRAVEL WEBSITE THEME</small>
               <small>COPYRIGHTS RESERVED - KALISWARAN 2025</small>

             </div>

          </div>
        </div>
      </section>
    </div>
  )
}
