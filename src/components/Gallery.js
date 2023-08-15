import React, { useState } from 'react';
import './gallery.css';
import first from './assets/gallery/1.jpg'
import second from './assets/gallery/2.jpg'
import third from './assets/gallery/3.jpg'
import fifth from './assets/gallery/5.jpg'
import Fourwheeler from './Fourwheeler';
/* car */
import aston from './assets/gallery/four wheeler/Aston Martin.png'
import bentley from './assets/gallery/four wheeler/bentley.png'
import bmw from './assets/gallery/four wheeler/BMW.png'
import chevrolet from './assets/gallery/four wheeler/Chevrolet.png'
import ferrari from './assets/gallery/four wheeler/Ferrari.png'
import kia from './assets/gallery/four wheeler/KIA.png'
import nissan from './assets/gallery/four wheeler/Nissan.png'
import landrover from './assets/gallery/four wheeler/Land Rover.png'
import volkswagen from './assets/gallery/four wheeler/Volkswagen.png'
import jaguar from './assets/gallery/four wheeler/Jaguar.png'

/* bike */

import bajaj from './assets/gallery/two wheeler/Bajaj.png';
import ducati from './assets/gallery/two wheeler/Ducati.png';
import honda from './assets/gallery/two wheeler/Honda Bike.png';
import kawasaki from './assets/gallery/two wheeler/Kawasaki.png';
import ktm from './assets/gallery/two wheeler/KTM.png';
import suzuki from './assets/gallery/two wheeler/Suzuki.png';
import yamaha from './assets/gallery/two wheeler/yamaha.png';
import tvs from './assets/gallery/two wheeler/tvs-logo.png';


/* //truck */

import ashok from './assets/gallery/heavy vehicle/Ashok-Leyland.png'
import bharat from './assets/gallery/heavy vehicle/Bharat benz.png'
import eicher from './assets/gallery/heavy vehicle/Eicher-Motors.webp'
import force from './assets/gallery/heavy vehicle/Force-Motors.png'
import tata from './assets/gallery/heavy vehicle/TATA.png'
import Twowheeler from './Twowheeler';
import Heavyload from './Heavyload';




export default function Gallery() {
    return (
        <div>

            <div class="bg-gray-900 flex justify-center  " id="portfolio_section">
                <div class="flex flex-col items-center justify-center">

                    <div class="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                        <div class="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                            <div class="title pt-14 pb-2 sm:text-4xl text-3xl text-white">
                                MULTIBRAND SERVICE</div>

                        </div>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>



                        {/* <div className='hidden sm:grid  grid-cols-3  sm:grid-cols-3 sm:gap-80  md:ml-24 md:mr-24  p-14 '>
                            <div className='grid  sm:grid-rows-8 sm:space-y-12'>

                                <div className='text-white text-xl font-medium  '>
                                    Four Wheelers
                                    <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>

                                </div>

                                <div >
                                    <img className="" src={nissan} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={kia} alt="" srcset="" />

                                </div>

                                <div>
                                    <img src={jaguar} alt="" srcset="" />

                                </div>
                                <div>
                                    <img src={bmw} alt="" srcset="" />

                                </div>

                                <div>
                                    <img src={landrover} alt="" srcset="" />

                                </div>
                                <div>
                                    <img src={volkswagen} alt="" srcset="" />

                                </div>

                            </div>
                            <div className='grid  sm:grid-rows-8 sm:space-y-12 '>

                                <div className='text-white text-xl font-medium '>
                                    Two Wheelers
                                    <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>

                                </div>


                                <div>
                                    <img src={ducati} alt="" srcset="" />

                                </div>
                                <div>
                                    <img src={honda} alt="" srcset="" />

                                </div>
                                <div>
                                    <img src={kawasaki} alt="" srcset="" />

                                </div>
                                <div>
                                    <img src={ktm} alt="" srcset="" />

                                </div>

                                <div>
                                    <img src={yamaha} alt="" srcset="" />

                                </div>
                                <div>
                                    <img src={tvs} alt="" srcset="" />

                                </div>

                            </div>
                            <div className='grid  sm:grid-rows-8  sm:space-y-12 -m-4'>

                                <div className='text-white text-xl font-medium m-4'>
                                    Heavy Duty
                                    <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>

                                </div>

                                <div>
                                    <img src={ashok} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={bharat} alt="" srcset="" />

                                </div>
                                <div>
                                    <img src={eicher} alt="" srcset="" />

                                </div>
                                <div>
                                    <img src={force} alt="" srcset="" />

                                </div>
                                <div>
                                    <img src={tata} alt="" srcset="" />

                                </div>


                            </div>
                        </div> */}

                        {/* <div className='sm:hidden'>
                            <div className='text-white text-xl font-medium  '>
                                Four Wheelers
                            </div>
                            <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                        </div> */}

                        <div >

                            <Fourwheeler />
                            
                        </div>

                        {/*  <div className='sm:hidden mt-8'>

                            <div className='text-white text-xl font-medium  '>
                                Two Wheelers
                            </div>
                            <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                        </div> */}

                        <Twowheeler />



                        {/*   <div className="sm:hidden mt-8">
                            <div className='text-white text-xl font-medium  '>
                                Heavy Load Vehicle
                            </div>
                            <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                        </div> */}

                        <Heavyload />
                        


                        {/* <div>
                            <div>
                                <div className='text-white text-xl font-medium  '>
                                    Four Wheelers
                                </div>
                                <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                                <div className='flex overflow-x-scroll w-screen'>
                                    <div className=''>
                                        <img src={nissan} alt="" srcset="" />
                                    </div>
                                    <div>
                                        <img src={kia} alt="" srcset="" />

                                    </div>

                                    <div>
                                        <img src={jaguar} alt="" srcset="" />

                                    </div>
                                    <div>
                                        <img src={jaguar} alt="" srcset="" />

                                    </div>
                                </div>
                            </div>

                        </div> */}




                        {/*  <div className="grid grid-cols-3 place-items-center">
                            <div>
                                <img src={bmw} alt="" srcset="" />
                            </div>
                            <div>
                                <img src={aston} alt="" srcset="" />
                            </div>
                            <div>
                                <img src={jaguar} alt="" srcset="" />
                            </div>
                        </div>
 */}






                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
        </div>
    )
}


{/* <div
class="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

<div class="lg:w-40 w-64 h-40   rounded-xl ">
    <img src={fifth} alt="" class="" />
</div>
<div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
    <div class="w-32 lg:w-40 h-32   rounded-xl ">
        <img src={third} alt="" class="" />
    </div>
    <div class="w-32 lg:w-40 h-48   rounded-xl ">
        <img src={second} alt="" class="" />
    </div>
</div>
<div class="lg:w-60 w-64 h-96   rounded-xl ">
    <img src={first} alt="" class="" />
</div>
<div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
    <div class="w-32 lg:w-40 h-48   rounded-xl ">
        <img src={fifth} alt="" class="" />
    </div>
    <div class="w-32 lg:w-40 h-32   rounded-xl ">
        <img src={third} alt="" class="" />
    </div>
</div>
<div class="lg:w-40 w-64 h-40   rounded-xl ">
    <img src={fifth} alt="" class="" />
</div>


</div>
 */}