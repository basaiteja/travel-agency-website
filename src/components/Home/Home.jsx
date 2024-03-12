import { useEffect } from 'react';
import './Home.css';
import video from './../../assets/18.mp4';
import { ImLocation2 } from "react-icons/im";
import { TbFilterSearch } from "react-icons/tb";
import { TiSocialInstagram,TiSocialTwitter } from "react-icons/ti";
import { IoMdList } from "react-icons/io";
import { TbAppsFilled } from "react-icons/tb";
import { FaTripadvisor } from "react-icons/fa";

import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
  
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);



  return (
    <section data-aos="fade-up" className='home'>
      <div className='overlay'>
      </div>
      
      <video src={video} muted autoPlay loop  type='video/mp4' className=''></video>

      <div className="homeContent container" >
          <div className='textDiv'>
              <span data-aos="fade-up" className="smallText">
                  Our Packages
              </span>
              <h1 data-aos="fade-up" className="homeTitle">
                  Search your Holiday
              </h1>
          </div>
      

          <div data-aos="fade-up" className="cardDiv grid">

              <div className='desinationInput'>
                  <label htmlFor="city" >Search your destination : </label>
                  <div className='input flex' >
                      <input type='text' placeholder='Enter name here .... '/>
                      <ImLocation2  className='icon'/>
                  </div>     
                </div>
              
                <div className='dateInput'>
                  <label htmlFor="date" >select your date: </label>
                  <div className='input flex' >
                      <input type='date'/>
                  </div>     
                </div>
            
                <div className='priceInput'>
                  <div className='label_total flex' >
                     <label htmlFor='price'>Max price:</label>
                     <h3 className='total'> ₹50000</h3>
                  </div> 
                  <div className='input flex'>
                    <input type='range'   max= "50000" min="1000" />
                  </div>    
                </div>
              
                <div className='searchOptions flex'>
                  <TbFilterSearch  className='icon'/>
                  <span className='smallText'>
                      More Filter
                  </span>
                </div>
              
          </div> 

          <div data-aos="fade-up" className='homeFooterIcons flex'>
            <div className='rightIcons flex'>
              <TiSocialInstagram className='icon'/>
              <TiSocialTwitter className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
            <div className='leftIcons flex'>
            <IoMdList className='icon' />
            <TbAppsFilled />

            </div>
          </div>


      </div>
    </section>
  )
}

export default Home