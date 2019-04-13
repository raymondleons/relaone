import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import '../assets/css/_style.scss'
import { getSkillset } from '../actions/organizationActions';

class EventList extends Component {

    componentDidMount(){
        this.props.getSkillset();
    }


  render() {
      const skillsets = this.props.skillsets
      

      const displayEvent = skillsets.length ? (
        skillsets.map(skillset => {
              return(
                  <tr>
                    <th scope="row"></th>
                    <td key={skillset._id}>{skillset.name}</td>
                    <td key={skillset._id}><a>x</a></td>
                </tr>
              )
          })
      ) : (
          <tr>Create more event</tr>
      );

    return (
      <div className="event">
        <div className="content-title">
            <h3 className="title bold-text">Event</h3>
        </div>
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayEvent}
                </tbody>
            </Table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        skillsets: state.skillset.skillsets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSkillset: () => { dispatch(getSkillset())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);



