import React, { Component } from 'react'
import { Container, Row } from 'reactstrap';
import DashboardPage from '../components/DashboardPage'
import '../assets/css/_style.scss';



export default class Dashboard extends Component {

    ComponentDidMount = (
        document.title = "Dashboard - RelaOne"
    )

  render() {
    return (
        <div className="form-update-profile">
          <Container>
            <DashboardPage/>
          </Container>
        </div>
    )
  }
}

