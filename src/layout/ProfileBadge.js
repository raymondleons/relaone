import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col
} from 'reactstrap';
import { getProfile } from '../actions/organizationActions';

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
            <Col xs="4" sm="4" md="4">
              <img className="organization-picture" src={this.props.photo} alt={this.props.organizationName}></img>
            </Col>
            <Col xs="8" sm="8" md="8">
              <div className="profile-name"><b><Link to='/organization/profile' exact="true">{this.props.organizationName}</Link></b><br></br>{verifiedFunction}</div>
            </Col>
          </Row>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    organizationName: state.orgProfile.organizationName,
    photo: state.orgProfile.photo,
    confirmed: state.orgProfile.confirmed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => { dispatch(getProfile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBadge);

