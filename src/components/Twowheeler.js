import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./testinomial.css";
import bajaj from './assets/gallery/two wheeler/Bajaj.png';
import ducati from './assets/gallery/two wheeler/Ducati.png';
import honda from './assets/gallery/two wheeler/Honda Bike.png';
import kawasaki from './assets/gallery/two wheeler/Kawasaki.png';
import ktm from './assets/gallery/two wheeler/KTM.png';
import suzuki from './assets/gallery/two wheeler/Suzuki.png';
import yamaha from './assets/gallery/two wheeler/yamaha.png';
import tvs from './assets/gallery/two wheeler/tvs-logo.png';

const data = [

    {
        image_one: bajaj,
        image_two: ducati,
        image_three: honda
    },

    {
        image_one: kawasaki,
        image_two: ktm,
        image_three: suzuki
    },

    {
        image_one: yamaha,
        image_two: tvs,
        image_three: kawasaki
    },

]


function Twowheeler
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
export default Twowheeler
    ;