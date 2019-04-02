import React, { Component } from 'react';
import EventDetail from './EventDetail'

export default class DashboardPage extends Component {
  render() {
    return (
    <div>
        <div className="content-title">
            <h3 className="bold-text">Dashboard</h3>
        </div>
        <div>
            <EventDetail/>
        </div>
      </div>
    )
  }
}
