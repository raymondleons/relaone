import React, { Component } from 'react';


import Intro from '../components/Intro';
import HowTo from '../components/HowTo';
import ContactUs from '../components/ContactUs';
import Testi from '../components/Testi';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';



class LandingPage extends Component {


  render() {
    return (
                  <div className="landing-page">
                  <NavBar/>
                  <Intro/>
                  <HowTo/>
                  <Testi/>
                  <ContactUs/>
                  <Footer/>
                </div>  
    )
  }
}

export default LandingPage;

