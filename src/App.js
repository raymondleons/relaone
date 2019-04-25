import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store';
import history from './history'

import LandingPage from './pages/LandingPage';
import UpdateOrganizationProfile from './pages/UpdateOrganizationProfile';
import './assets/css/_style.scss';
import UpdateOrgProfileSuccess from './pages/UpdateOrgProfileSuccess';
import UpdateUserProfileSuccess from './pages/UpdateUserProfileSuccess';
import UserProfileUpdate from './pages/member/UserProfileUpdatePage'
import RegisterSuccess from './pages/RegisterSuccess';
import OrganizationDashboardPage from './pages/OrganizationDashboardPage';
import DashboardPage from './pages/DashboardPage'
import EventListPage from './pages/EventListPage';
import CreateEventPage from './pages/CreateEventPage';
import ArticleListPage from './pages/ArticleListPage';
import ForgotPassword from './pages/ForgotPassword';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ListPendaftarEventOrganisasi from './pages/ListPendaftarEventOrganisasi'
import UserProfilePage from './pages/member/UserProfilePage'
import DashboardNotVerify from './pages/Dashboards'
import ListPendaftarEvent from './pages/ListPendaftarEvent'
import TermsandConditions from './pages/TermsandConditions'
import UserCertificationPage from './pages/UserCertificationPage'
import UserCertificationDetailsPage from './pages/UserCertificationDetailsPage'
import UserEventPage from './pages/member/UserEventPage'
import UserEventDetailsPage from './pages/member/UserEventDetailsPage'
import UserRegister from './components/member/UserRegister'
import UserDashboardPage from './pages/member/UserDashboardPage'
import UserJoinedEventPage from './pages/member/UserJoinedEventPage'
import UserPhotoUpdate from './pages/member/UserPhotoUpdatePage'
import OrganizationRegister from './components/organization/OrganizationRegister'
import Login from './pages/LoginPage'
import VerifiedAccount from './pages/VerifiedAccount'
import OrganizationProfilePage from './pages/OrganizationProfilePage'
import RegisterRoot from './pages/RegisterRoot'
import EventDetailOrgPage from './pages/EventDetailOrgPage'
import ArticleListOrgPage from './pages/ArticleListOrgPage';
import ArticleDetailOrgPage from './pages/ArticleDetailOrgPage';
import EventEditPage from './pages/EventEditPage'
import FindVolunteer from './pages/FindVolunteer'
import FindActivity from './pages/FindActivity'
import UpdateOrganizationPhoto from './pages/UpdateOrganizationPhoto'
import EventPhotoEditPage from './pages/EventPhotoEditPage'
import VoluteerRegistered from './pages/VolunteerRegistered'
import VolunteerAccepted from './pages/VolunteerAccepted'
import VolunteerRejected from './pages/VolunteerRejected'
import LoginOrganization from './pages/organization/LoginPage'
import VolunteerListPage from './pages/VolunteerListPage'
import VolunteerDetailPage from './pages/VolunteerDetailPage'
import LoginContoh from './pages/Login'

import SignInAdmin from './pages/admin/SignInAdmin'
import AdminPage from './pages/admin/'
import User from './pages/admin/user/User'
import Article from './pages/admin/article/Article'
import Organization from './pages/admin/organization/Organization'
import Event from './pages/admin/event/Event'
import SkillSet from './pages/admin/skillset/SkillSet'
import EditProfile from './pages/admin/user/EditProfile'
import CreateNewUser from './pages/admin/user/CreateNewUser'
import Admin from './pages/admin/User'

class App extends Component {
  render() {

    let days = 7;
    let now = new Date().getTime();
    let setupTime = localStorage.getItem('setupTime');
    if(now-setupTime > days*24*60*60*1000) {
            localStorage.clear()
        }
    

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" exact component={LandingPage}/>
            <Route path="/register-success" exact component={RegisterSuccess}/>
            <Route path="/organization/update-profile" exact component={UpdateOrganizationProfile}/>        
            <Route path="/organization/update-profile/success" exact component={UpdateOrgProfileSuccess}/>
            <Route path="/user/update-profile/success" exact component={UpdateUserProfileSuccess}/>
            <Route path="/user/profile/update" exact component={UserProfileUpdate}/>
            <Route path="/organization/dashboard" exact component={OrganizationDashboardPage}/>
            <Route path="/dashboard" exact component={DashboardPage}/>
            <Route path="/organization/event" exact component={EventListPage}/>
            <Route path="/organization/create-event" exact component={CreateEventPage}/>
            <Route path="/user/article" exact component={ArticleListPage}/>
            <Route path="/forgot-password" exact component={ForgotPassword}/>
            <Route path="/user/article/detail/:article_id" exact component={ArticleDetailPage}/>
            <Route path="/organization/event/list/register" exact component={ListPendaftarEventOrganisasi} />
            <Route path="/user/profile/" exact component={UserProfilePage} />
            <Route path="/dashboards" exact component={DashboardNotVerify} />
            <Route path="/event/list-register" exact component={ListPendaftarEvent} />
            <Route path='/register/success' exact component={RegisterSuccess} />
            <Route path='/terms' component={TermsandConditions} exact />
            <Route path='/user/event' component={UserEventPage} exact />
            <Route path='/user/event/details/:event_id' component={UserEventDetailsPage} exact />
            <Route path='/user/event/joined/' component={UserJoinedEventPage} exact />
            <Route path='/user/certification' component={UserCertificationPage} exact /> 
            <Route path='/user/certification/details' component={UserCertificationDetailsPage} exact />
            <Route path='/user/register' component={UserRegister} exact />
            <Route path='/user/dashboard' component={UserDashboardPage} exact />  
            <Route path='/user/photo/update' component={UserPhotoUpdate} exact />  
            <Route path='/login' component={Login} exact />
            <Route path="/account-verified" exact component={VerifiedAccount}/>
            <Route path="/organization/profile" exact component={OrganizationProfilePage} />
            <Route path='/register' component={RegisterRoot} exact />
            <Route path='/organization/register' component={OrganizationRegister} exact />
            <Route path="/event/detail/:event_id" exact component={EventDetailOrgPage}/>
            <Route path="/organization/event/detail/:event_id" exact component={EventDetailOrgPage}/>
            <Route path="/organization/article" exact component={ArticleListOrgPage}/>
            <Route path="/organization/article/detail/:article_id" exact component={ArticleDetailOrgPage}/>
            <Route path="/organization/event/edit/:event_id" exact component={EventEditPage}/>
            <Route path="/find-volunteer" exact component={FindVolunteer}/>
            <Route path="/find-activity" exact component={FindActivity}/>
            <Route path="/organization/update-photo" exact component={UpdateOrganizationPhoto}/>
            <Route path="/organization/event-photo/edit/:event_id" exact component={EventPhotoEditPage}/> 
            <Route path="/organization/volunteer" exact component={VoluteerRegistered}/>    
            <Route path="/organization/volunteer/accepted" exact component={VolunteerAccepted} />  
            <Route path="/organization/volunteer/rejected" exact component={VolunteerRejected}/>          
            <Route path="/login-org" exact component={LoginOrganization}/>
            <Route path="/organization/volunteer-list" exact component={VolunteerListPage}/>
            <Route path="/organization/volunteer/detail/:volunteer_id" exact component={VolunteerDetailPage}/>
            <Route path="/contohlogin" exact component={LoginContoh}/>   
            <Route path="/login-admin" exact component={SignInAdmin}/>
            <Route path="/admin" exact component={AdminPage}/>
            <Route path="/admin/users" exact component={User}/>
            <Route path="/admin/article" exact component={Article}/>
            <Route exact path="/admin/users/create" component={CreateNewUser}/>
            <Route exact path="/admin/article" component={Article}/>
            <Route exact path="/admin/organization" component={Organization}/>
            <Route exact path="/admin/event" component={Event}/>
            <Route exact path="/admin/skill-sett" component={SkillSet}/>
            <Route exact path="/admin/users/edit/:user_id" component={EditProfile}/>
            <Route exact path="/admin/list-admin" component={Admin}/>
        </Router>
        </Provider>
    );
  }
}


export default App;

