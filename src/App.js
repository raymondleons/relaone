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
import DashboardPage from './pages/DashboardPage'
import EventListPage from './pages/EventListPage';
import CreateEventPage from './pages/CreateEventPage';
import ArticleListPage from './pages/ArticleListPage';
import ForgotPassword from './pages/ForgotPassword';
import ArticleDetailPage from './pages/ArticleDetailPage';
import TermsandConditions from './pages/TermsandConditions'
import UserEvent from './pages/UserEvent'
import UserEventDetails from './pages/UserEventDetails'
import UserCertificationPage from './pages/UserCertificationPage'
import UserCertificationDetailsPage from './pages/UserCertificationDetailsPage'
import UserEventPage from './pages/UserEventPage'
import Register from './pages/Register'
import UserEventDetailsPage from './pages/UserEventDetailsPage'
import Login from './pages/LoginPage'

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
          <Route path="/user/update-profile" exact component={UpdateProfile}/>
          <Route path="/organization/dashboard" exact component={OrganizationDashboardPage}/>
          <Route path="/dashboard" exact component={DashboardPage}/>
          <Route path="/event" exact component={EventListPage}/>
          <Route path="/create-event" exact component={CreateEventPage}/>
          <Route path="/article" exact component={ArticleListPage}/>
          <Route path="/forgot-password" exact component={ForgotPassword}/>
          <Route path="/article/detail" exact component={ArticleDetailPage}/>
          <Route path='/register' component={Register} exact />
          <Route path='/terms' component={TermsandConditions} exact />
          <Route path='/user/event' component={UserEventPage} exact />
          <Route path='/user/event/details' component={UserEventDetailsPage} exact />
          <Route path='/user/certification' component={UserCertificationPage} exact /> 
          <Route path='/user/certification/details' component={UserCertificationDetailsPage} exact />  
          <Route path='/login' component={Login} exact />
        </div>
      </Router>
    );
  }
}


export default App;

