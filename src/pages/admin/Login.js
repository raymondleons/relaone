import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../../assets/css/_admin.scss';
import Logo from '../../assets/images/blue-logo.png'
import Foto from '../../assets/images/image1.png'


export default class Login extends Component {
  render() {
    return (
      <div>
        <Container>
            <div className=" my-4 logo" >
                <Link to="/"><img className="" src={Logo} alt=""/></Link>
            </div>
            <Row>
                c
            </Row>
        </Container>
      </div>
    )
  }
}
