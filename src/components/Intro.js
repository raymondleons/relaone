import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import phone from '../assets/images/phone.png';
import playstorebutton from '../assets/images/get-it-on-the-google-play-store-button.png';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';

class Intro extends Component {
  render() {
    return (
      <div className="section intro" id="intro" name="intro">
          <Container>
            <Row>
                <Col sm="0" md="1" lg="1"></Col>
                <Col sm="12" md="5" lg="5" className="intro-text">
                    <h1>{this.props.introTitle}</h1>
                    <h5><span className="bold-text">{this.props.relaOne}</span> {this.props.introParagraph1}</h5>
                    <h5><span className="bold-text">{this.props.relaOneOrganization}</span> {this.props.introParagraph2}</h5>
                      <a href="https://play.google.com/store" target = "_blank" rel="noopener noreferrer"> 
                      <img className="intro-button" src={playstorebutton} alt="get it on playstore"/>
                    </a>
                </Col>
                <Col sm="0" md="1" lg="1"></Col>
                <Col sm="12" md="5" lg="4">
                    <img src={phone} alt="RelaOne Application" className="intro-image"/>
                </Col>
            </Row>
          </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    introTitle: state.landingPage.introTitle,
    relaOne: state.landingPage.relaOne,
    relaOneOrganization: state.landingPage.relaOneOrganization,
    introParagraph1: state.landingPage.introParagraph1,
    introParagraph2: state.landingPage.introParagraph2
  }
}

export default connect(mapStateToProps)(Intro);


