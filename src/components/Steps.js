import React from 'react';
import payment from './assets/steps/payment.png';
import vendor from './assets/steps/vendor.png';
import choose from './assets/steps/selct.png';
import './steps.css';

export default function Steps() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <h2 className='tit text-dark pt-14 pb-2 sm:text-4xl text-3xl'>STEPS TO BOOK SLOT</h2>
                <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                        </div>
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <img src={choose} alt="" srcset="" />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Select Details</h2>
                                <p class="leading-relaxed" id="descr">Choose your vehicle model, vehicle number, location, preferred time slot and other details.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <img src={vendor} alt="" srcset="" />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Choose Vendor</h2>
                                <p class="leading-relaxed" id="descr">Choose the favourable vendors from the list as per the rating,requirement and pricing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <img src={payment} alt="" srcset="" />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Payment Mode</h2>
                                <p class="leading-relaxed" id="descr">Choos the mode of payment from the available ones :- Debit card/ Credit card/ Upi/ Emi/ Pay on Delivery</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Booking Confirmed</h2>
                                <p class="leading-relaxed" id="descr">Preview your slot booking details and your booking will be confirmed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
