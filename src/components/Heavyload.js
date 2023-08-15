import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./testinomial.css";
import ashok from './assets/gallery/heavy vehicle/Ashok-Leyland.png'
import bharat from './assets/gallery/heavy vehicle/Bharat benz.png'
import eicher from './assets/gallery/heavy vehicle/Eicher-Motors.webp'
import force from './assets/gallery/heavy vehicle/Force-Motors.png'
import tata from './assets/gallery/heavy vehicle/TATA.png'
const data = [

    {
        image_one: ashok,
        image_two: bharat,
        image_three: eicher
    },

    {
        image_one: force,
        image_two: tata,
        image_three: bharat
    }

]


function Heavyload

    () {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className activeIndex={index} onSelect={handleSelect} indicators={false} controls={false} interval={1000}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item className="sm:hidden">

                        <div className="grid grid-cols-3 place-items-center tw-space-x-8  tw-gap-4 tw-p-6 sm:tw-gap-52 lg:tw-gap-[21rem] xl:tw-gap-[26rem] tw-h-36">
                            <div>
                                <img src={slide.image_one} alt="" srcset="" />
                            </div>
                            <div>
                                <img src={slide.image_two} alt="" srcset="" />
                            </div>
                            <div>
                                <img src={slide.image_three} alt="" srcset="" />
                            </div>
                        </div>


                    </Carousel.Item>
                )
            })}


        </Carousel>
    );
}
export default Heavyload

    ;