import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./testinomial.css";
const data = [

    {
        image: require('./assets/testinomial/keshav.jpg'),
        name: "Keshav Sundaram",
        city: 'Jabalpur',
        description: '- Amazing customization work done by mech-buddy at best price . Best quality parts used by the vendor . Completely satisfied by the work.'
    },
    {
        image: require('./assets/testinomial/lalit.jpg'),
        name: "Lalit Mali",
        city: 'Indore',
        description: '- Found a wide range of two-wheeler services on the same platform with the best deals.'
    },
    {
        image: require('./assets/testinomial/Ashish.jpeg'),
        name: "Ashish Gehlot",
        city: 'Indore',
        description: '- I have been really amazed at the work done by Mech-buddy. They converted my Activa 3g into an electrical vehicle. They take a very reasonable amount to make this change in my vehicle. I really appreciate the work.'
    },
]


function HomeCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className activeIndex={index} onSelect={handleSelect}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item >

                        <section
                            class="bg-dark rounded-md p-6 h-100 text-center shadow-lg md:p-12 md:text-left"
                            /* style={{ backgroundImage: 'url(https://tecdn.b-cdn.net/img/Photos/Others/background2.jpg)' }} */>
                            <h2 className="tn text-white pt-6 pb-2 sm:text-4xl text-3xl">TESTIMONIALS</h2>
                            <div class="flex mt-6 justify-center">
                                <div class="w-16 h-1 rounded-full bg-gray-500 inline-flex"></div>
                            </div>
                            <div class="flex justify-center">
                                <div class="max-w-3xl">
                                    <div
                                        class="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">

                                        <div class="md:flex md:flex-row">
                                            <div
                                                class="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                                                <img
                                                    src={slide.image}
                                                    class="rounded-full shadow-md dark:shadow-black/30 h-32 w-32"
                                                    alt="woman avatar" />
                                            </div>
                                            <div class="md:ml-6">
                                                <p
                                                    class="descript mb-6 h-44 sm:h-20 font-light text-neutral-500 dark:text-neutral-300">
                                                    {slide.description}
                                                </p>
                                                <p
                                                    class="bg-red-400 mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                                                    {slide.name}
                                                </p>
                                                <p
                                                    class="city mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                                    {slide.city}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </Carousel.Item>
                )
            })}


        </Carousel>
    );
}
export default HomeCarousel;