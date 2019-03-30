import React, { Component } from 'react';
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../assets/css/_style.scss'

class EventList extends Component {
  render() {
    return (
      <div className="event">
        <div className="content-title">
            <h3 className="title bold-text">Event</h3>
        </div>
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Quota</th>
                        <th>Deadline</th>
                        <th>Required skill-set</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Lombok Earthquake</td>
                        <td>Lombok</td>
                        <td>45</td>
                        <td>8 August 2018</td>
                        <td>Counseling</td>
                        <td><a>Details</a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Sunda Strait Tsunami</td>
                        <td>Banten</td>
                        <td>30</td>
                        <td>26 December 2018</td>
                        <td>Medical Aid</td>
                        <td><a>Details</a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Sentani Flash Flood</td>
                        <td>Sentani, Papua</td>
                        <td>25</td>
                        <td>21 March 2019</td>
                        <td>Medical Aid</td>
                        <td><a>Details</a></td>
                    </tr>
                </tbody>
            </Table>
        </div>
      </div>
    )
  }
}

export default EventList;

