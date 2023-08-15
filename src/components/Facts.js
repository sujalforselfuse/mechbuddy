import React from 'react';
import './facts.css';
import Mechanic from './assets/facts/mechaic.png';
import location from './assets/facts/location.png';
import orders from './assets/facts/orders.png';

export default function Facts() {
    return (
        
            <section class="text-gray-600 body-font " style={{backgroundColor:'#7c7c7c'}}>
                <div class=" container px-5 py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="ku sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">KNOW US</h1>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-dark inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4 text-center sm:justify-center">
                        <div class=" p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div class="bg-dark text-light border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img src={orders} alt="" srcset="" /></div>
                                <h2 class="title-font font-medium text-3xl ">1500 +</h2>
                                <p class="leading-relaxed" id='numbers'>Orders Completed</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div class="bg-dark text-light border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img src={Mechanic} alt="" srcset="" /></div>
                                <h2 class="title-font font-medium text-3xl ">250 +</h2>
                                <p class="leading-relaxed" id='numbers'>Vendors</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div class="bg-dark text-light border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img src={location} alt="" srcset="" /></div>
                                <h2 class="title-font font-medium text-3xl ">4</h2>
                                <p class="leading-relaxed" id='numbers'>Cities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    )
}
