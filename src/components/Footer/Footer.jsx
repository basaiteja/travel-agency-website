import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Footer.css';
import video2 from './../../assets/17.mp4';
import { SiYourtraveldottv } from "react-icons/si";
import { BsFillSendFill } from "react-icons/bs";


const Footer = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);


  return (
    <section data-aos="fade-up" className='Footer'>
      <div  className='videoDev'>
        <video src={video2} muted autoPlay loop  type='video/mp4' ></video>
      </div>
    <div className='secContent container'>
      <div  className='contactDiv flex'>
        <div className='text'>
          <small >KEEP IN TOUCH</small>
          <h2 >TraveI with us</h2>
        </div>
        <div  className="inputDiv flex">
          <input type='text' placeholder='Enter Email Address' />
          <button className= 'btn flex' type='submit' >
            SEND <BsFillSendFill className= 'icon' />
          </button>
        </div>
      </div>

      <a href='#'  className="logo flex">
        <h1><SiYourtraveldottv className='icon'/>BAST.</h1>
    </a>
    </div>

    

  </section>


  )
}

export default Footer