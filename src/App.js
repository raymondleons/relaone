import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import UpdateOrganizationProfile from './pages/UpdateOrganizationProfile';
import './assets/css/_style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UpdateOrgProfileSuccess from './pages/UpdateOrgProfileSuccess';
<<<<<<< HEAD
import RegisterSuccess from './pages/RegisterSuccess';
=======
import OrganizationDashboardPage from './pages/OrganizationDashboardPage';
>>>>>>> 3e8fb49e1207296c0072373bc65995552b0f42c4

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LandingPage}/>
          <Route path="/register-success" exact component={RegisterSuccess}/>
          <Route path="/organization/update-profile" exact component={UpdateOrganizationProfile}/>
          <Route path="/organization/update-profile/success" exact component={UpdateOrgProfileSuccess}/>
          <Route path="/organization/dashboard" exact component={OrganizationDashboardPage}/>
        </div>
      </Router>
    );
  }
}

export default App;

