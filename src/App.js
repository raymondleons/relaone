import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import './assets/css/_style.scss';
import UpdateOrganizationProfile from './pages/UpdateOrganizationProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LandingPage/> */}
        <UpdateOrganizationProfile/>
      </div>
    );
  }
}

export default App;
