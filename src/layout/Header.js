import React, { Component } from 'react';
import bluelogo from '../assets/images/blue-logo.png';
import { Button } from 'reactstrap';
import { Link as Links} from 'react-router-dom';

class Header extends Component {

  // handleSignOut = () =>{
  //   localStorage.removeItem('token');
  //   this.setState({token: false});
  // }


  render() {
    return (
        <div className="header">
            <div>
            <Links to="/"><img className="header-logo" src={bluelogo} alt='RelaOne logo'></img></Links>
            </div>
            <div>
            <Links to="/login"><Button className="logout" outline color="primary">Log Out</Button></Links>
            </div>
        </div>
        

    )
  }
}

export default Header;

