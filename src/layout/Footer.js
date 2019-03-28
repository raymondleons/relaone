import React, { Component } from 'react';
import '../assets/css/_style.scss';
import bluelogo from '../assets/images/blue-logo.png';
import { Link, animateScroll as scroll } from "react-scroll";
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
                      <Button className="footer-socmed-icon" color="primary">Get it on Playstore</Button>
                    </p>
                  </div>
                </Col>
            </Row>
            <Row>
              <Col lg="4">
                <br></br>
                <p>RelaOne is a service to facilitate both for volunteer and organization to meet needs related to voluntary activity</p>
                <br></br>
                <p>Nongsa, Batam, Indonesia</p>
              </Col>
              <Col lg="2"></Col>
              <Col lg="2">
                <br></br>
                <p><b>TAKE ACTION</b></p>
                <p>Join Event</p>
                <p>Find Volunteer</p>
              </Col>
              <Col lg="2">
                <br></br>
                <p><b>LEARN MORE</b></p>
                <Link
                    to="how-to-join"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >How to Join</Link>
              </Col>
              <Col lg="2">
                <br></br>
                <p><b>CONNECT</b></p>
                <Link
                    to="contact-us"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Contact Us</Link>
              </Col>
            </Row>
             <hr></hr>
             <Row>
               <p className="footer-copyright">Copyright © 2019 RelaOne All Rights Reserved</p>
             </Row>
         </Container>
      </div>
    )
  }
}

export default Footer;

