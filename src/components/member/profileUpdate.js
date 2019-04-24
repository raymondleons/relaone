import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../../assets/css/_style.scss'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile, editUserProfile, getUserSkillset } from '../../actions/memberActions';
import Moment from 'moment'

class profileUpdate extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      skillsets: state.skillset.skillsets,
      userProfile : state.userProfile
  }
} 

const mapDispatchToProps = dispatch => {
  return {
      getUserSkillset: () => { dispatch(getUserSkillset()) },
      getUserProfile: () => { dispatch(getUserProfile()) }, 
      editUserProfile: (fullname, username, email, phoneNumber, idCard, address, bio, birthDate, _id, emergencyContact, confirmed, skillSet) => { dispatch(editUserProfile(fullname, username, email, phoneNumber, idCard, address, bio, birthDate, _id, emergencyContact, confirmed, skillSet))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(profileUpdate));
