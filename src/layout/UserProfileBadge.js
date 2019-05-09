import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {
  Row,
  Col
} from 'reactstrap';
import {getUserProfile } from '../actions/memberActions';

class ProfileBadge extends Component {

  componentDidMount(){
    this.props.getUserProfile();
  }

  render() {
    const verified = this.props.confirmed;
    const verifiedFunction= verified ?
      (<p>verified</p>) : (<p>not verified</p>)


    return (
        <div className="profile-badge">
          <Row>
            <Col xs="3" sm="3" md="4" className="">
              <img className="organization-picture" src={this.props.photo} alt={this.props.fullname}></img>
            </Col>
            <Col xs="9" sm="9" md="8">
              <p className="profile-name"><Link to="/user/profile"><b>{this.props.fullname}</b></Link><br></br>{verifiedFunction}</p>
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
    confirmed: state.userProfile.confirmed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: () => { dispatch(getUserProfile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBadge);

