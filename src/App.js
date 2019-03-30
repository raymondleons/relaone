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
import EventListPage from './pages/EventListPage';
import CreateEventPage from './pages/CreateEventPage';
import ArticleListPage from './pages/ArticleListPage';
import ForgotPassword from './pages/ForgotPassword';

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
          <Route path="/event" exact component={EventListPage}/>
          <Route path="/create-event" exact component={CreateEventPage}/>
          <Route path="/article" exact component={ArticleListPage}/>
          <Route path="/forgot-password" exact component={ForgotPassword}/>

        </div>
      </Router>
    );
  }
}

export default App;

