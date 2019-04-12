import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/css/_style.scss';
// import { connect } from 'react-redux';
// import { getEvent } from '../actions/organizationActions';

class EventEdit extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       title : props.title,
//       description : props.description,
//       loaction : props.location,
//       deadline : props.deadline,
//       quotaMax : props.quoraMax
//     }
//   }

//   componentWillMount(){
//     this.props.getEvent();
//   }

//   componentWillReceiveProps(props){
//     this.setState({
//         title : props.title,
//         description : props.description,
//         loaction : props.location,
//         deadline : props.deadline,
//         quotaMax : props.quotaMax
//   })
//   }

//   onChange = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//     })
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     this.props.editEvent(this.state.title, this.state.description, this.state.location, this.state.deadline, this.state.quotaMax);
// }

  render() {
    return (
      <div className="form-organization-profile">
        <div>
            <h3><b>Update Event</b></h3>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleTitle">Title</Label>
                {/* <Input defaultValue={this.state.title} onChange={this.onChange} className="form-control" type="text" name="title" id="exampleTitle"/>
             */}
                <Input type="text"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleDescription">Description</Label>
                {/* <Input defaultValue={this.state.description} onChange={this.onChange} type="textarea" name="description" id="exampleDescription" /> */}
                <Input type="textarea"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleLocation">Location</Label>
                {/* <Input defaultValue={this.state.loaction} onChange={this.onChange} type="text" name="location" id="exampleLocation"/> */}
                <Input type="text"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleQuotaMax">Maximal Quota</Label>
                {/* <Input defaultValue={this.state.quotaMax} onChange={this.onChange} type="text" name="quotaMax" id="exampleQuotaMax"/> */}
                <Input type="text"/>
            </FormGroup>
            <Button color="primary">Save</Button>
        </Form>
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//     let id = ownProps.match.params.event_id;
//     return {
//       events: state.event.events.find(event => event._id === id)
//     }
//   }

// const mapDispatchToProps = dispatch => {
//   return {
//     getEvent: () => { dispatch(getEvent()) },
//     // editEvent: (title, description, location, deadline, quotaMax) => { dispatch(editEvent(title, description, location, deadline, quotaMax))}

//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EventEdit);

export default EventEdit;

