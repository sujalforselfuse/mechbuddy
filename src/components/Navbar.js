import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import logo from './assets/navbar/navbar.png';

export default function Navbar() {
    const handleservice=()=>{
        const element=document.getElementById('service_section');

        if(element){
            element.scrollIntoView({behavior:'smooth'});
        }
    };
    const handleportfolio=()=>{
        const element=document.getElementById('portfolio_section');

        if(element){
            element.scrollIntoView({behavior:'smooth'});
        }
    };
    const handlehome=()=>{
        const element=document.getElementById('home_section');

        if(element){
            element.scrollIntoView({behavior:'smooth'});
        }
    };
    const handlecontact=()=>{
        const element=document.getElementById('contact_section');

        if(element){
            element.scrollIntoView({behavior:'smooth'});
        }
    };

    return (
        <div >

            <nav class="navbar  text-light  fixed-top navbar-expand-lg navbar-dark ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"> <div className="d-flex"><img src={logo} alt="Not Available" width="60" height="50" class="d-inline-block align-text-top" />
                        <div className="d-flex flex-column"><span className='logo_name fs-2'><span className="one font-bold">Mech</span><span className="two">Buddy</span></span><span className='tagline fs-6'>Apka Apna Mechanic</span></div></div></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" ></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul class=" navi navbar-nav ms-auto mb-2 mb-lg-0 rounded-pill">
                            <li class="nav-item">
                               
                                <Link class="nav-link mx-3 fs-5 text-white " aria-current="page" onClick={handlehome} to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link mx-3 fs-5 text-white " aria-current="page" onClick={handleservice} to="/service">Service</Link>
                            </li>
                            <li class="nav-item">
                               
                                <Link class="nav-link mx-3 fs-5 text-white " aria-current="page" onClick={handleportfolio} to="/">Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-3 fs-5 text-white " aria-current="page" to="/about">About Us</Link>
                            </li>


                        </ul>
                        <form class="d-flex justify-content-center ms-auto">

                            <button class="but btn" type="submit" style={{backgroundColor:'red'}} onClick={handlecontact}><Link style={{textDecoration:'none',color:'white'}} to="/contactsection">Contact Us</Link></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
