import React, { Component } from 'react';


import Intro from '../components/Intro';
import HowToJoin from '../components/HowToJoin';
import ContactUs from '../components/ContactUs';
import Testimony from '../components/Testimony';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';



class LandingPage extends Component {


  render() {
    return (
                  <div className="landing-page">
                  <NavBar/>
                  <Intro/>
                  <HowToJoin/>
                  <Testimony/>
                  <ContactUs/>
                  <Footer/>
                </div>  
    )
  }
}

export default LandingPage;

