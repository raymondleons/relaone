import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import UpdateOrganizationProfile from './pages/UpdateOrganizationProfile';
import './assets/css/_style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UpdateOrgProfileSuccess from './pages/UpdateOrgProfileSuccess';
<<<<<<< HEAD
import UpdateUserProfileSuccess from './pages/UpdateUserProfileSuccess';
=======
import UpdateProfile from './pages/UpdateProfile'
import RegisterSuccess from './pages/RegisterSuccess';
import OrganizationDashboardPage from './pages/OrganizationDashboardPage';
>>>>>>> 3d8ce7840d02daef7d0ac1b0eaa06172fd040d8c

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LandingPage}/>
          <Route path="/register-success" exact component={RegisterSuccess}/>
          <Route path="/organization/update-profile" exact component={UpdateOrganizationProfile}/>
          <Route path="/organization/update-profile/success" exact component={UpdateOrgProfileSuccess}/>
<<<<<<< HEAD
          <Route path="/user/update-profile/success" exact component={UpdateUserProfileSuccess}/>
=======
          <Route path="/users/update-profile" exact component={UpdateProfile}/>
          
          <Route path="/organization/dashboard" exact component={OrganizationDashboardPage}/>
>>>>>>> 3d8ce7840d02daef7d0ac1b0eaa06172fd040d8c
        </div>
      </Router>
    );
  }
}

export default App;

