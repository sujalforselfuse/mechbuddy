import React from 'react'
import about from './assets/About/about.png'

export default function About() {
    return (
        <div>
            <div class="bg-white py-16">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img
                                src={about}
                                alt="image"
                                width=""
                                height=""
                            />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl font-bold text-gray-900 md:text-4xl">
                                Making A Revoultionary Change In AutoService Industry
                            </h2>
                            <p class="text-justify mt-6 text-gray-600">
                            Discover MechBuddy, the innovative startup reshaping auto services. With our seamless online platform, scheduling vehicle care is a breeze. Enjoy services like car washes, repairs, and electrical work from certified mechanics. Skip the hassle and wasted time at the shop – book with ease and keep your busy schedule intact. Our skilled team, armed with cutting-edge tech, ensures your vehicle runs its best. Experience unmatched customer service and convenience with MechBuddy – your go-to for auto care.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
