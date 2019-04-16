import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardTitle, Button } from 'reactstrap'
import {connect} from 'react-redux'
import { getUserProfile } from '../actions/memberActions';
import '../assets/css/_style2.scss';
import {Link} from 'react-router-dom'
import Moment from 'moment'

 class ProfilePageDetail extends Component {

    componentDidMount(){
        this.props.getUserProfile();
      }

  render() {

    let initbirthDate = this.props.birthDate
    Moment.locale('en');
    let DOB = Moment(initbirthDate).format('YYYY-MM-DD')

    return (
        <div className="event">
        <div className="content-title">
            <h3 className="title bold-text">Profile</h3>
        </div>
        <br></br>
        <Row>
            <Col md="4">
                <Card>
                    <CardImg src={this.props.photo} alt="user photo"></CardImg>
                </Card>
            </Col>
            <Col md="8">
                
                    <CardTitle>Nama: {this.props.fullname}</CardTitle>
                    <CardTitle>Email: {this.props.email}</CardTitle>
                    <CardTitle>Username:{this.props.username}</CardTitle>
                    <CardTitle>Kontak Person: {this.props.phoneNumber}</CardTitle>
                    <CardTitle>Alamat: {this.props.address}</CardTitle>
                    <CardTitle>No. KTP: {this.props.idCard}</CardTitle>
                    <CardTitle>Bio: {this.props.bio}</CardTitle>
                    <CardTitle>DOB: {DOB}</CardTitle>
                    <Link to="/user/profile/update"><Button color="primary">Edit Profile</Button></Link>
                
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
      email: state.userProfile.email,
      username: state.userProfile.username,
      phoneNumber: state.userProfile.phoneNumber,
      address: state.userProfile.address,
      idCard: state.userProfile.idCard,
      bio: state.userProfile.bio,
      birthDate: state.userProfile.birthDate
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getUserProfile: () => { dispatch(getUserProfile()) }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageDetail);