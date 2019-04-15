import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col
} from 'reactstrap';
import { getProfile } from '../actions/memberActions';

class ProfileBadge extends Component {

  componentDidMount(){
    this.props.getProfile();
  }

  render() {
    const verified = this.props.confirmed;
    const verifiedFunction= verified ?
      (<p>verified</p>) : (<p>not verified</p>)


    return (
        <div className="profile-badge">
          <Row>
            <Col xs="3" sm="3" md="4">
              <img className="organization-picture" src={this.props.photo} alt={this.props.fullname}></img>
            </Col>
            <Col xs="9" sm="9" md="8">
              <p className="profile-name"><b>{this.props.fullname}</b><br></br>{verifiedFunction}</p>
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
    getProfile: () => { dispatch(getProfile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBadge);

