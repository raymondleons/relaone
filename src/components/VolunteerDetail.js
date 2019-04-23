import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVolunteer } from '../actions/organizationActions' ;
import { withRouter } from 'react-router-dom';

class VolunteerDetail extends Component {

  componentDidMount(){
    this.props.getVolunteer();
  }

  render() {
    const volunteers = this.props.volunteers ? (
        <div className="article-detail">
          <h1 className="bold-text">{this.props.volunteers.fullname}</h1>
          <p className="text-muted">{this.props.volunteers.address}</p>
          <div>
              <img className="article-detail-image" src={this.props.volunteers.photo} alt={this.props.volunteers.fullName}></img>
          </div>
          <div>
              <p className="article-paragraph">{this.props.volunteers.bio}</p>
          </div>
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


