import React, { Component } from 'react'
import NavigationBar from '../layout/NavigationBar'
import Footers from '../layout/Footers'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class FindVolunteer extends Component {

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <div className="find-volunteer-div">
        <div className="find-volunteer">
            <p>We have 94360 volunteers,
            <br/>they are ready to help you</p>
            <Link to="/register"><Button color="primary">See volunteer profile</Button></Link>
        </div>
        </div>
        <Footers/>
      </div>
    )
  }
}

export default FindVolunteer

