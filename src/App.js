import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import UpdateOrganizationProfile from './pages/UpdateOrganizationProfile';
import './assets/css/_style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UpdateOrgProfileSuccess from './pages/UpdateOrgProfileSuccess';
import UpdateProfile from './pages/UpdateProfile'
import RegisterSuccess from './pages/RegisterSuccess';
import OrganizationDashboardPage from './pages/OrganizationDashboardPage';
import DashboardPage from './pages/DashboardPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LandingPage}/>
          <Route path="/register-success" exact component={RegisterSuccess}/>
          <Route path="/organization/update-profile" exact component={UpdateOrganizationProfile}/>
          <Route path="/organization/update-profile/success" exact component={UpdateOrgProfileSuccess}/>
          <Route path="/users/update-profile" exact component={UpdateProfile}/>
          <Route path="/organization/dashboard" exact component={OrganizationDashboardPage}/>
          <Route path="/dashboard" exact component={DashboardPage}/>
        </div>
      </Router>
    );
  }
}


export default App;

