import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import UpdateOrganizationProfile from './pages/UpdateOrganizationProfile';
import './assets/css/_style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UpdateOrgProfileSuccess from './pages/UpdateOrgProfileSuccess';
import UpdateUserProfileSuccess from './pages/UpdateUserProfileSuccess';
import UpdateProfile from './pages/UpdateProfile'
import RegisterSuccess from './pages/RegisterSuccess';
import OrganizationDashboardPage from './pages/OrganizationDashboardPage';
<<<<<<< HEAD
import EventListPage from './pages/EventListPage';
=======
import CreateEventPage from './pages/CreateEventPage';
import ForgotPassword from './pages/ForgotPassword';
>>>>>>> 08d6958b31222cec40e1c93a1588d55d7c8c72b8

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LandingPage}/>
          <Route path="/register-success" exact component={RegisterSuccess}/>
          <Route path="/organization/update-profile" exact component={UpdateOrganizationProfile}/>
          <Route path="/organization/update-profile/success" exact component={UpdateOrgProfileSuccess}/>
          <Route path="/user/update-profile/success" exact component={UpdateUserProfileSuccess}/>
          <Route path="/users/update-profile" exact component={UpdateProfile}/>
          
          <Route path="/organization/dashboard" exact component={OrganizationDashboardPage}/>
<<<<<<< HEAD
          <Route path="/event" exact component={EventListPage}/>
=======
          <Route path="/create-event" exact component={CreateEventPage}/>
          <Route path="/forgot-password" exact component={ForgotPassword}/>

>>>>>>> 08d6958b31222cec40e1c93a1588d55d7c8c72b8
        </div>
      </Router>
    );
  }
}

export default App;

