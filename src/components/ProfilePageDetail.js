import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardTitle, Button } from 'reactstrap'
import {connect} from 'react-redux'
import { getProfile } from '../actions/memberActions';
import '../assets/css/_style2.scss';
import {Link} from 'react-router-dom'

 class ProfilePageDetail extends Component {

    componentDidMount(){
        this.props.getProfile();
      }

  render() {
    return (
        <div className="event">
        <div className="content-title">
            <h3 className="title bold-text">Profile</h3>
        </div>
        <br></br>
        <Row>
            <Col md="4">
                <Card>
                    <CardImg src={this.props.photo}></CardImg>
                </Card>
            </Col>
            <Col md="8">
                <Card>
                    <CardTitle><h5>Nama: {this.props.fullname}</h5></CardTitle>
                    <CardTitle><h5>Email: {this.props.email}</h5></CardTitle>
                    <CardTitle><h5>Password: {this.props.password}</h5></CardTitle>
                    <CardTitle><h5>Username: ********</h5></CardTitle>
                    <CardTitle><h5>Kontak Person: {this.props.phoneNumber}</h5></CardTitle>
                    <CardTitle><h5>Alamat: {this.props.address}</h5></CardTitle>
                    <CardTitle><h5>No. KTP: {this.props.idCard}</h5></CardTitle>
                    <CardTitle><h5>Bio: {this.props.bio}</h5></CardTitle>
                    <Link to="/user/update-profile"><Button color="primary">Edit Profile</Button></Link>
                </Card>
            </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      fullname: state.userProfile.fullname,
      photo: state.userProfile.photo,
      confirmed: state.userProfile.confirmed,
      email: state.userProfile.email,
      password: state.userProfile.password,
      username: state.userProfile.username,
      phoneNumber: state.userProfile.phoneNumber,
      address: state.userProfile.address,
      idCard: state.userProfile.idCard
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getProfile: () => { dispatch(getProfile()) }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageDetail);