import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

import "./testinomial.css";
import aston from './assets/gallery/four wheeler/Aston Martin.png'
import bentley from './assets/gallery/four wheeler/bentley.png'
import bmw from './assets/gallery/four wheeler/BMW.png'
import chevrolet from './assets/gallery/four wheeler/Chevrolet.png'
import ferrari from './assets/gallery/four wheeler/Ferrari.png'
import kia from './assets/gallery/four wheeler/KIA.png'
import nissan from './assets/gallery/four wheeler/Nissan.png'
import landrover from './assets/gallery/four wheeler/Land Rover.png'
import volkswagen from './assets/gallery/four wheeler/Volkswagen.png'
import fiat from './assets/gallery/four wheeler/Fiat.png'
import ford from './assets/gallery/four wheeler/Ford.png'
import gmc from './assets/gallery/four wheeler/gmc.png'
import honda from './assets/gallery/four wheeler/honda.png'
import hyundai from './assets/gallery/four wheeler/Hyundai.png'
import jaguar from './assets/gallery/four wheeler/Jaguar.png'
import jeep from './assets/gallery/four wheeler/Jeep.png'
import mercedeze from './assets/gallery/four wheeler/Mercedeze.png'
import Mitsubishi from './assets/gallery/four wheeler/Mitsubishi.png'

const data = [

    {
        image_one: aston,
        image_two: bentley,
        image_three: bmw
    },

    {
        image_one: chevrolet,
        image_two: ferrari,
        image_three: kia
    },

    {
        image_one: nissan,
        image_two: landrover,
        image_three: volkswagen
    },
    {
        image_one: fiat,
        image_two: ford,
        image_three: gmc
    },
    {
        image_one: honda,
        image_two: hyundai,
        image_three: jaguar
    },
    {
        image_one: jeep,
        image_two: mercedeze,
        image_three: Mitsubishi
    },

]


function Fourwheeler
    () {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className activeIndex={index} onSelect={handleSelect} indicators={false} controls={false} wrap={true} interval={1000}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item className="">

                        <div className=" grid grid-cols-3 place-items-center tw-space-x-8  tw-gap-4 tw-p-6 sm:tw-gap-52 lg:tw-gap-[21rem] xl:tw-gap-[26rem] tw-h-36">
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
export default Fourwheeler
    ;