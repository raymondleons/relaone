import React, { Component } from 'react';
import bluelogo from '../assets/images/blue-logo.png';
import { Button } from 'reactstrap';

class Header extends Component {
  render() {
    return (
        <div className="header">
            <div>
                <img className="header-logo" src={bluelogo} alt='RelaOne logo'></img>
            </div>
            <div>
                <Button className="logout" outline color="primary">Log Out</Button>
            </div>
        </div>
        

    )
  }
}

export default Header;

