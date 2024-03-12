
import './Main.css';
import { IoLocationSharp } from "react-icons/io5";
import pic1 from "./../../assets/15.jpg";
import pic2 from "./../../assets/24.jpg";
import pic3 from "./../../assets/25.jpg";
import pic4 from "./../../assets/4.jpg";
import pic5 from "./../../assets/26.jpg";
import pic6 from "./../../assets/22.jpg";

import { FiCommand } from "react-icons/fi";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'


const indianTourismData = [
  {
    id: 1,
    imgSrc: pic1,
    destTitle: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    grade: 4.5,
    fees: 5000,
    description: 'Explore the iconic Taj Mahal, a symbol of eternal love and a UNESCO World Heritage Site.'
  },
  {
    id: 2,
    imgSrc:pic2,
    destTitle: 'Jaipur Pink City',
    location: 'Jaipur, Rajasthan',
    grade: 4.2,
    fees: 18300,
    description: 'Discover the vibrant culture and heritage of Jaipur, known for its pink-hued buildings and historic forts.'
  },
  {
    id: 3,
    imgSrc:pic3,
    destTitle: 'Goa Beaches',
    location: 'Goa',
    grade: 4.7,
    fees: 10000,
    description: 'Relax on the beautiful beaches of Goa, known for its lively nightlife, water sports, and Portuguese architecture.'
  },
  {
    id: 4,
    imgSrc:pic4,
    destTitle: 'Kerala Backwaters',
    location: 'Kerala',
    grade: 4.8,
    fees: 6000,
    description: 'Cruise through the tranquil backwaters of Kerala, surrounded by lush green landscapes and traditional houseboats.'
  },
  {
    id: 5,
    imgSrc:pic5,
    destTitle: 'Rishikesh Adventure',
    location: 'Rishikesh, Uttarakhand',
    grade: 4.3,
    fees: 8000,
    description: 'Experience thrilling adventure activities and spiritual vibes in the yoga capital of the world, Rishikesh.'
  },
  {
    id: 6,
    imgSrc:pic6,
    destTitle: 'leh Adavebture',
    location: 'ladakh',
    grade: 4.3,
    fees: 40000,
    description: 'Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals.'
  }
];

// You can now use indianTourismData as your dummy data for Indian tourism in your JavaScript application.


const Main = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section data-aos="fade-up" className='main container section'>

      <div data-aos="fade-up" className='secTitle'>
        <h3 data-aos="fade-up" className='title'>
          most visited destinations
        </h3>
      </div>

      <div data-aos="fade-up" className='destinations grid'>
        {
          indianTourismData.map(({id,imgSrc,destTitle,location,grade,fees,description}) =>{
            return (
              <div data-aos="fade-up" className='destinations__item' key={id}>
                <div className='destinations__img'>
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div  className='destinations__content'>
                  <h4  className='destinations__title'>
                    {destTitle}
                  </h4>
                  <div  className='destinations__location flex'>
                  <p >
                    <IoLocationSharp  className='icon'/>
                    <span className='location'>
                    {location}
                    </span>
                  </p>
                  </div>

                  <div  className='destinations__fees flex'>
                      <div  className='destinations__grade flex'>
                        <span> {grade}<small>+1</small></span>
                      </div>
                      <div className='price'>
                        <h5> ₹
                        {fees}
                        </h5>
                      </div>
                  </div>
                  <div  className='destinations__description flex'>
                       <p>
                         {description}
                       </p>
                  </div>
                        
                   <button  className='btn flex'>
                     DETAILS
                     <FiCommand   className="icon"/>
                   </button>

                </div>
              </div>
            )
          })
        }


      </div>


    </section>
  )
}

export default Main