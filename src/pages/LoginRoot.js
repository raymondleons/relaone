import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'reactstrap'
import '../assets/css/_style2.scss'
import Img from '../assets/images/image1.png'
import Logo from '../assets/images/blue-logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle, faHome);
export default class RegisterHomeRoot extends Component {
  render() {
    return (
      <div>
        <div className="container2">
          <div className=" my-4 logo" >
            <Link to="/"><img className="" src={Logo} alt=""/></Link>
          </div>
          <Row className="whitebg mbot">
            <Col md={6} className="nopadding">
              <img className="width" src={Img} alt=""/>
            </Col>
            <Col md={6} className="right">
            <h3 className="text-center mb-5">Login Now!</h3>
            <div className="d-flex justify-content-around mt-5">
            <Link to='/login'><FontAwesomeIcon icon='user-circle' className="fa-6x"/></Link>
            <Link to='/login-org'><FontAwesomeIcon icon='home' className="fa-6x"/></Link>
            <Link to='/login-admin'><FontAwesomeIcon icon='user-circle' className="fa-6x"/></Link>
            
            
            </div>
            <div className="d-flex justify-content-around text-center mt-3 mb-5">
            <p className="para"> Login as Volunteer</p>
            <p className="para">Login as Organization</p>
            <p className="para">Login as Admin</p>
            </div>
            <div className="mt-5">
              <p className="para text-center">Don't have an account yet ? <Link to='/register'>Register here.</Link></p>
            </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
