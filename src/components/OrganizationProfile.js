import React, { Component } from 'react';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { getProfile } from '../actions/organizationActions';

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
            <h3><b>Profile</b></h3>
        </div>
        <hr></hr>
                <p style={{fontWeight: 'bold'}}>Name</p>
                <p>{this.state.organizationName}</p>
                <p style={{fontWeight: 'bold'}}>Username</p>
                <p>{this.state.username}</p>
                <p style={{fontWeight: 'bold'}}>Email</p>
                <p>{this.state.email}</p>
                <p style={{fontWeight: 'bold'}}>Phone Number</p>
                <p>{this.state.phoneNumber}</p>  
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


