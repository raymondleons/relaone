import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Intro from '../components/Intro';
import HowToJoin from '../components/HowToJoin';
import ContactUs from '../components/ContactUs';
import Testimony from '../components/Testimony';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import Register from './Register'
import Login from './LoginPage.js'
import TermsandConditions from './TermsandConditions'

class LandingPage extends Component {


  render() {
    return (
      <Router>
        <Route exact path="/" component={() => (
                  <div className="landing-page">
                  <NavBar/>
                  <Intro/>
                  <HowToJoin/>
                  <Testimony/>
                  <ContactUs/>
                  <Footer/>
                </div>  
        )} />
        <Route path='/Register' component={Register} exact />
        <Route path='/Login' component={Login} exact />
        <Route path='/TermsandConditions' component={TermsandConditions} exact />
      </Router>
    )
  }
}

export default LandingPage;

