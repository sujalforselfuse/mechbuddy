import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

import './carousel.css';
const data = [
  
   {
    image:require('./assets/Hero/heavy-duty.jpg'), 
    caption:"We Offer Vehicle Repair",
    description:"We value your vehicles like they are ours"
   },
   {
    image:require('./assets/Hero/caferacer.jpg'), 
    caption:"We Offer vehicle Repair",
    description:"Let your car be in perfect condition"
   }, 
   {
    image:require('./assets/Hero/cover-car.jpeg'), 
    caption:"We Offer vehicle Repair",
    description:"Let your car be in perfect condition"
   }, 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className id="home_section" activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item > 
            <div className="carimg">
            <img
          className="crimg object-fit-cover d-block w-100 vh-100 "
          src={slide.image}
          alt="slider image"
        /></div>       
        
        <Carousel.Caption>
          <div className=" descr d-flex flex-column justify-content-center">
          <h4 className="caption">{slide.caption}</h4>
          <h1 className="display-1 lead font-weight-bold">{slide.description}</h1>
          

                         
                        
          </div>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
      
    </Carousel>
  );
}
export default HomeCarousel;


{/* <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span class="sm:block"> Increase Conversion. </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div> */}