import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';
import bikeimage from './assets/service_section/bike.png';
import spares from './assets/service_section/spares.png';
import modification from './assets/service_section/modification.png';


export default function Services() {
    return (
        <div className='sct' id="service_section">
            <section class="sct text-gray-600 body-font">
                <div class="sct container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="textservice sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">OUR SERVICES</h1>

                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 sm:justify-between md:justify-around lg:justify-between -mb-10 -mt-4 md:space-y-0 space-y-6 md:space-x-4">
                        <div class="cardbg p-4 md:w-1/3 lg:w-1/4 flex flex-col text-center items-center ">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                                <img src={bikeimage} alt="" srcset="" />
                            </div>
                            {/* justify-content: space-between;
                            display: flex;
                            flex-direction: column;
                            align-items: center; */}
                            <div class="flex-grow flex flex-col items-center justify-between">
                                <h2 class="titletext text-red-600 text-lg title-font font-medium mb-3">Service By Slot Booking</h2>
                                <p class="leading-relaxed text-base" id="descr">We Offer A Way To Book Your Service
                                    Slot In Advance. You Can Also Schedule Your Service With Us And Get It Done In Time.
                                </p>
                                <Link to="/contact" class="mt-8 text-red-500 inline-flex items-center">Book Slot
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div class="cardbg p-4 md:w-1/3 lg:w-1/4 flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                                <img src={modification} alt="" srcset="" />
                            </div>
                            <div class="flex-grow flex flex-col items-center justify-between">
                                <h2 class="titletext text-red-600 text-lg title-font font-medium mb-3">Modification</h2>
                                <p class="leading-relaxed text-base" id="descr">With Our Help, You Can Get Your Vehicle Customized And Modified
                                    According To Your Own Need With The Help Of Our Best Team. From Getting Your Enfiled A New
                                    Bobber Look To Giving Your SUV A Luxury Touch</p>
                                <Link to="/contact" class="mt-3 text-red-500 inline-flex items-center">Book Slot
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div class="cardbg p-4 md:w-1/3 lg:w-1/4 flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                                <img src={spares} alt="" srcset="" />
                            </div>
                            <div class="flex-grow flex flex-col items-center justify-between">
                                <h2 class="titletext text-red-600 text-lg title-font font-medium mb-3">Spares and Accessories</h2>
                                <p class="leading-relaxed text-base" id="descr">Servicing Is Just A Part We Do, Spare Parts?
                                    Absolutely!! Great Quality At Affordable Prices. With Us, You Can Find All The Best Parts
                                    And Accessories You Need Need For Your Car, Bike From Legit Stores In A Fair Price</p>
                                <Link to="/contact" class="mt-3 text-red-500 inline-flex items-center">Book Slot
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
