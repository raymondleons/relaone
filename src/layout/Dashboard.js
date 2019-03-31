import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Event from '../assets/images/event/banjir.jpg'


export default class Dashboard extends Component {

    ComponentDidMount = (
        document.title = "Dashboard - RelaOne"
    )

  render() {
    return (
        <div className="form-update-profile">
        <div>
            <h3 className="title"><b>Dashboard</b></h3>
        </div>
        <hr></hr>
        <div>
            <h5>List Event</h5>
        </div>
        <div className="col-md-4">
            
        </div>
      </div>
    )
  }
}


