import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardText, Spinner} from 'reactstrap'
import {connect} from 'react-redux'
import { getUserProfile } from '../../actions/memberActions';
import '../../assets/css/_style2.scss'
import {Link} from 'react-router-dom'
import Moment from 'moment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faUserEdit);

 class userProfile extends Component {

    componentDidMount(){
        this.props.getUserProfile();
      }

  render() {
    console.log(this.props.birthDate)
    let initbirthDate = this.props.birthDate
    Moment.locale('en');
    let DOB = Moment(initbirthDate).format('YYYY-MM-DD')

    // let DOB = (deadline) =>{
    //   Moment.locale('en');
    //   let DOB = Moment(deadline).format('YYYY-MM-DD')
    //   return <p>{DOB}</p>
    // }


    let emergencyContact = {}
      if (this.props.emergencyContact ){
        emergencyContact = this.props.emergencyContact
      }
      console.log(emergencyContact)

    const skillSets = this.props.skillSet
    const displaySkillset = skillSets ? (
      skillSets.map(skillset => {
        return (
            <li key={skillset._id}>{skillset.name}</li>
        )
      })
    ) : (
        <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
        </div>
    );
      
    return (
      <div className="article-list">
        <div className="content-title d-flex justify-content-between align-items-center">
          <h3 className="bold-text">{this.props.fullname}'s Profile</h3>
          <Link to='/user/profile/update'><FontAwesomeIcon icon='user-edit' className="fa-1x"/> Edit Profile</Link>
        </div>
        <Card className="no-border">
          <Row>
            <Col sm={6}>
              <CardImg className="heigth" src={this.props.photo} alt="user photo"></CardImg>
            </Col>
            <Col sm={6}>
              <CardText className="font-weight-bold">Fullname</CardText>
              <CardText>{this.props.fullname}</CardText>
              <CardText className="font-weight-bold">Username</CardText>
              <CardText>{this.props.username}</CardText>
              <CardText className="font-weight-bold">Email</CardText>
              <CardText>{this.props.email}</CardText>
            </Col>
          </Row>
            <hr />
          <Row>
            <Col sm={6}>
              <CardText className="font-weight-bold">Identity Card</CardText>
              <CardText>{this.props.idCard}</CardText>
              <CardText className="font-weight-bold">Date of Birth</CardText>
              <CardText>{DOB}</CardText>
            </Col>
            <Col sm={6}>
              <CardText className="font-weight-bold">Address</CardText>
              <CardText>{this.props.address}</CardText>
              <CardText className="font-weight-bold">Phone Number</CardText>
              <CardText>{this.props.phoneNumber}</CardText>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={6}>
            <CardText className="font-weight-bold">Bio</CardText>
            <CardText>{this.props.bio}</CardText>
            <CardText className="font-weight-bold">Skill Set</CardText>
            <ul>
              {displaySkillset}
            </ul>
           
            </Col>
            <Col sm={6}>
            <CardText className="font-weight-bold">Emergency Contact</CardText>
            <CardText>Name: {this.props.emergencyContact.name}</CardText>
            <CardText>Relationship: {this.props.emergencyContact.relationship}</CardText>
            <CardText>Address: {this.props.emergencyContact.address}</CardText>
            <CardText>Phone: {this.props.emergencyContact.phoneNumber}</CardText>
            </Col>
          </Row>
        </Card>
      </div>  
    )
  }
}

const mapStateToProps = state => {
    return {
      photo: state.userProfile.photo,
      fullname: state.userProfile.fullname,
      username: state.userProfile.username,
      email: state.userProfile.email,
      idCard: state.userProfile.idCard,
      birthDate: state.userProfile.birthDate,
      address: state.userProfile.address,
      phoneNumber: state.userProfile.phoneNumber,
      bio: state.userProfile.bio,
      skillSet: state.userProfile.skillSet,
      emergencyContact: state.userProfile.emergencyContact
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getUserProfile: () => { dispatch(getUserProfile()) }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(userProfile);