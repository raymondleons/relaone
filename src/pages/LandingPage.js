import React, { Component } from 'react';
import Intro from '../components/Intro';
import HowToJoin from '../components/HowToJoin';
import ContactUs from '../components/ContactUs';
import Testimony from '../components/Testimony';
import NavBar from '../layout/NavBar';

class LandingPage extends Component {
  render() {
    return (
        <div className="landing-page">
          <NavBar/>
          <Intro/>
          <HowToJoin/>
          <Testimony/>
          <ContactUs/>
        </div>      
    )
  }
}

export default LandingPage;