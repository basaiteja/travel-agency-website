import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Navbar.css';
import { useState } from 'react';
import { SiYourtraveldottv } from "react-icons/si";
import { MdOutlineClose } from "react-icons/md";
import { PiDotsThreeCircleVerticalFill } from "react-icons/pi";

const Navbar = () => {
    const[active,setActive] =useState('navBar')
    const showNav =() =>{
        setActive('navBar activeNavbar')
    }
    const closeNav =() =>{
        setActive('navBar')
    }

    useEffect(() => {
        Aos.init({
          duration: 2000,
        });
      }, []);

  return (
    <section  className="navBarsection">
        <header className="header flex">
            <div data-aos="fade-up"  className="logoDiv">
            <a href='#' className="logo flex">
                <h1><SiYourtraveldottv className='icon'/>BAST.</h1>
            </a>
            </div>
            <div  className={active} >
                <ul className="navLists flex">
                    <li className='navItem'><a href="#"  className='navLink'>Home</a></li>
                    <li className='navItem'><a href="#Packages" className='navLink'>Packages</a></li>
                    <li className='navItem'><a href="#Shop" className='navLink'>Shop</a></li>
                    <li className='navItem'><a href="#About" className='navLink'>About</a></li>
                    <li className='navItem'><a href="#contact" className='navLink'>Contact</a></li>
                    <button className='btn'> <a href='#'> BOOK NOW</a></button>

                </ul>
                <div onClick={closeNav} className='closenavbar'>
                    <MdOutlineClose  className='icon'/>
                </div>
            </div>
            

            <div onClick={showNav} className='toggleNavbar'>
            <PiDotsThreeCircleVerticalFill className='icon' />
            </div>

        </header>
    </section>
  )
}

export default Navbar