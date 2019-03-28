import React, { Component } from 'react';
import '../assets/css/_style.scss';
import bluelogo from '../assets/images/blue-logo.png';
import { Link, animateScroll as scroll } from "react-scroll";
import playstorebutton from '../assets/images/get-it-on-the-google-play-store-button.png';
import {
    Container,
    Row,
    Col,
    Button
  } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF, faTwitter, faInstagram); 

class Footer extends Component {
  render() {
    return (
      <div className="footer">
         <Container>
             <Row>
                <Col lg="3"><div><img src={bluelogo} alt="RelaOne Logo"></img></div></Col>
                <Col lg="4"></Col>
                <Col lg="5">
                  <div>
                    <p >Find us on : 
                      <FontAwesomeIcon className="footer-socmed-icon" icon={['fab', 'facebook-f']}/> 
                      <FontAwesomeIcon className="footer-socmed-icon" icon={['fab', 'twitter']}/> 
                      <FontAwesomeIcon className="footer-socmed-icon" icon={['fab', 'instagram']}/>
                      <a><img className="footer-button" src={playstorebutton} alt="get it on playstore"/></a>
                    </p>
                  </div>
                </Col>
            </Row>
            <Row className="footer-content-all">
              <Col lg="4" className="footer-content">
                <p>RelaOne is a service to facilitate both for volunteer and organization to meet needs related to voluntary activity</p>
                <p>Nongsa, Batam, Indonesia</p>
              </Col>
              <Col lg="2"></Col>
              <Col lg="2" className="footer-content">
                <p className="bold-text">TAKE ACTION</p>
                <p>Join Event</p>
                <p>Find Volunteer</p>
              </Col>
              <Col lg="2" className="footer-content">
                <p className="bold-text">LEARN MORE</p>
                <Link
                    to="how-to-join"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >How to Join</Link>
              </Col>
              <Col lg="2" className="footer-content">
                <p className="bold-text">CONNECT</p>
                <Link
                    to="contact-us"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Contact Us</Link>
              </Col>
            </Row>
             <Row>
               <p className="footer-copyright">Copyright © 2019 RelaOne All Rights Reserved</p>
             </Row>
         </Container>
      </div>
    )
  }
}

export default Footer;

