import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

import Footer from './components/Footer';
import Facts from './components/Facts';
import Gallery from './components/Gallery';
import Services from './components/Services';

import Testinomial from './components/Testinomial';

import Priceing from './components/Priceing';
import Steps from './components/Steps';

import Contactus from './components/Contactus';

import About from './components/About';
import Team from './components/Team';



function App() {


  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<><Navbar></Navbar>

            <Carousel></Carousel>
            <Services></Services>
            <Steps></Steps>
            <Facts></Facts>
            <Testinomial></Testinomial>
            <Priceing></Priceing>

             <Gallery></Gallery> 
            <Footer></Footer></>}></Route>
          <Route path='/service' element={<><Navbar></Navbar>

            <Carousel></Carousel>
            <Services></Services>
            <Steps></Steps>
            <Facts></Facts>
            <Testinomial></Testinomial>
            <Priceing></Priceing>

            <Gallery></Gallery>
            <Footer></Footer></>}></Route>

          <Route path='/contactsection' element={<><Navbar></Navbar><Contactus></Contactus></>}></Route>
          <Route path='/about' element={<><Navbar></Navbar><About></About><Team></Team><Footer></Footer></>}></Route>
          <Route path='/contact' element={<><Contactus /></>}></Route>
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;


