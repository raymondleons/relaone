import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVolunteer } from '../actions/organizationActions' ;
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class VolunteerDetail extends Component {

  componentDidMount(){
    this.props.getVolunteer();
  }

  render() {
    let people = {}
    if (this.props.volunteers) {
      people = this.props.volunteers
    }

    let skills = []
    if (people.skillSet){
      skills = people.skillSet
    }

    const displaySkillset = skills.map(skill => {
      return (
        <li>{skill.name}</li>
      )
    })

    const volunteers = this.props.volunteers ? (
        <div className="article-detail">
        <Container>
          <Row>
            <Col sm="12" md="6">
              <img className="volunteer-avatar" src={this.props.volunteers.photo} alt={this.props.volunteers.fullName}></img> 
            </Col>
            <Col sm="12" md="6">           
              <h3 className="bold-text">{this.props.volunteers.fullname}</h3>
              <p className="text-muted">{this.props.volunteers.address}</p>
              <p className="article-paragraph">About me : {this.props.volunteers.bio}</p>
              <div>Skillset : 
                <ul>{displaySkillset}</ul>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
    ) : (
      <div>Loading volunteer detail...</div>
    )

    return (
      <div>
        {volunteers}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.volunteer_id;
  return {
    volunteers: state.volunteer.volunteers.find(volunteer => volunteer._id === id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getVolunteer: () => { dispatch(getVolunteer()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VolunteerDetail));


