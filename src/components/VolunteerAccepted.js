import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import '../assets/css/_style.scss';
import noevent from '../assets/images/noevent.png';
import { Link } from 'react-router-dom';

class FormOrganizationProfile extends Component {
  render() {
    return (
      <div className="organization-dashboard">
        <div className="content-title content-header">
            <div>
              <h3>Volunteers Accepted</h3>
            </div>
            <div className="event-count">
                <h4>0</h4>
                <p>VOLUNTEERS FOUND</p>
            </div>
        </div>
        <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Event</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Makan Bersama</td>
                  <td>10 Juni 2019</td>
                  <td>Accepted</td>
                  <td>Delete</td>
                </tr>
                </tbody>
        <tbody>
        </tbody>
      </Table>
        </div>
        
      </div>
    )
  }
}

export default FormOrganizationProfile;

