import React, { Component } from 'react';
import '../assets/css/_style.scss';
import { Row, Col, Card, CardImg, CardTitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getProfile } from '../actions/organizationActions';
import { Link } from 'react-router-dom';

class OrganizationProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      organizationName : props.organizationName,
      username : props.username,
      email : props.email,
      phoneNumber : props.phoneNumber,
      photo : props.photo
    }
  }

  componentWillMount(){
    this.props.getProfile();
  }

  componentWillReceiveProps(props){
    this.setState({
      organizationName : props.organizationName,
      username : props.username,
      email : props.email,
      phoneNumber : props.phoneNumber,
      photo : props.photo
  })
  }


  render() {
    console.log(this.state.photo)
    return (
      <div className="form-organization-profile">
        <div>
            <h3><b>Organization Profile</b></h3>
        </div>
        <hr></hr>
       <Row>
            <Col md="4">
                <Card>
                    <CardImg src={this.props.photo}></CardImg>
                </Card>
            </Col>
            <Col md="8">
                <Card className="profile-card">
                    <CardTitle><h5>Organization Name: {this.state.organizationName}</h5></CardTitle>
                    <CardTitle><h5>Email: {this.state.email}</h5></CardTitle>
                    <CardTitle><h5>Username: {this.state.username}</h5></CardTitle>
                    <CardTitle><h5>Phone number: {this.props.phoneNumber}</h5></CardTitle>
                    <Link to="/organization/update-profile"><Button color="primary">Edit Profile</Button></Link>
                </Card>
            </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    organizationName: state.orgProfile.organizationName,
    username: state.orgProfile.username,
    email: state.orgProfile.email,
    phoneNumber : state.orgProfile.phoneNumber,
    photo: state.orgProfile.photo,
    confirmed: state.orgProfile.confirmed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => { dispatch(getProfile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationProfile);


