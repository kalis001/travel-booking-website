import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

export default function Navbar(){
    const [active ,setactive] = useState('navbar')
    
    const shownav = () =>{
      setactive('navbar activenavbar')
    }

    const removenav =() =>{
       setactive('navbar')
    }

    return (
      <div>
        <section className='navbar-section'>
          <header className='header flex'>

            <div className='logo-div'>
              <Link to={'/'} className='logo flex'>
                <h1><MdOutlineTravelExplore className='icon' /> Travel.</h1>
              </Link>
            </div>

            <div className={active}>
              <ul className='navlist flex'>
                <li className='navitem'>
                  <Link to={'/'} className='navlink'>Home</Link>
                </li>
                <li className='navitem'>
                  <Link to={'/'} className='navlink'>Packages</Link>
                </li>
                <li className='navitem'>
                  <Link to={'/'} className='navlink'>Shop</Link>
                </li>
                <li className='navitem'>
                  <Link to={'/'} className='navlink'>About</Link>
                </li>
                <li className='navitem'>
                  <Link to={'/'} className='navlink'>Pages</Link>
                </li>
                <li className='navitem'>
                  <Link to={'/'} className='navlink'>News</Link>
                </li>
                <li className='navitem'>
                  <Link to={'/'} className='navlink'>Contact</Link>
                </li>

                <button className='btn'>
                  <Link to={'/'} >BOOK NOW</Link>
                </button>

              </ul>
              <div onClick={removenav} className='closenavbar'>
                <AiFillCloseCircle className='icon' />
              </div>

            </div>
            <div onClick={shownav} className="togglenavbar">
              <TbGridDots className='icon' />
            </div>
          </header>

        </section>
      </div>
    )
  }

