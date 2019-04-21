import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LandingPage from './pages/LandingPage';
import UpdateOrganizationProfile from './pages/UpdateOrganizationProfile';
import './assets/css/_style.scss';
import { Router, Route } from 'react-router-dom';
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
import ListPendaftarEventOrganisasi from './pages/ListPendaftarEventOrganisasi'
import DisplayProfileUser from './pages/ProfilePage'
import DashboardNotVerify from './pages/Dashboards'
import ListPendaftarEvent from './pages/ListPendaftarEvent'
import TermsandConditions from './pages/TermsandConditions'
import UserCertificationPage from './pages/UserCertificationPage'
import UserCertificationDetailsPage from './pages/UserCertificationDetailsPage'
import UserEventPage from './pages/UserEventPage'
import Register from './pages/Register'
import UserEventDetailsPage from './pages/UserEventDetailsPage'
import Login from './pages/LoginPage'
import VerifiedAccount from './pages/VerifiedAccount'
import LoginAdmin from './pages/admin/Login'
import DashboardAdmin from './layout/Admin/DashboardPage'
import AddNewArticle from './pages/admin/AddNewArticle'
import UserPage from './layout/Admin/UserPage'
import SkillSet from './layout/Admin/SkillSet'
import AddNewSkillSet from './components/AddNewSkillSet'
import ArticlePage from './layout/Admin/ArticlePage'
import OrganizationPage from './layout/Admin/OrganizationPage'
import EventPage from './layout/Admin/EventPage'

import OrganizationProfilePage from './pages/OrganizationProfilePage'
import EventDetailOrgPage from './pages/EventDetailOrgPage'
import ArticleListOrgPage from './pages/ArticleListOrgPage';
import ArticleDetailOrgPage from './pages/ArticleDetailOrgPage';
import EventEditPage from './pages/EventEditPage'
import FindVolunteer from './pages/FindVolunteer'
import FindActivity from './pages/FindActivity'
import UpdateOrganizationPhoto from './pages/UpdateOrganizationPhoto'
import EventPhotoEditPage from './pages/EventPhotoEditPage'
import history from './history'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Route path="/" exact component={LandingPage}/>
            <Route path="/register-success" exact component={RegisterSuccess}/>
            <Route path="/organization/update-profile" exact component={UpdateOrganizationProfile}/>        
            <Route path="/organization/update-profile/success" exact component={UpdateOrgProfileSuccess}/>
            <Route path="/user/update-profile/success" exact component={UpdateUserProfileSuccess}/>
            <Route path="/user/update-profile" exact component={UpdateProfile}/>
            <Route path="/organization/dashboard" exact component={OrganizationDashboardPage}/>
            <Route path="/dashboard" exact component={DashboardPage}/>
            <Route path="/organization/event" exact component={EventListPage}/>
            <Route path="/organization/create-event" exact component={CreateEventPage}/>
            <Route path="/user/article" exact component={ArticleListPage}/>
            <Route path="/forgot-password" exact component={ForgotPassword}/>
            <Route path="/user/article/detail/:article_id" exact component={ArticleDetailPage}/>
            <Route path="/organization/event/list/register" exact component={ListPendaftarEventOrganisasi} />
            <Route path="/user/profile/" exact component={DisplayProfileUser} />
            <Route path="/dashboards" exact component={DashboardNotVerify} />
            <Route path="/event/list-register" exact component={ListPendaftarEvent} />
            <Route path='/register' component={Register} exact />
            <Route path='/register/success' exact component={RegisterSuccess} />
            <Route path='/terms' component={TermsandConditions} exact />
            <Route path='/user/event' component={UserEventPage} exact />
            <Route path='/user/event/details' component={UserEventDetailsPage} exact />
            <Route path='/user/certification' component={UserCertificationPage} exact /> 
            <Route path='/user/certification/details' component={UserCertificationDetailsPage} exact />  
            <Route path='/login' component={Login} exact />
            <Route path="/account-verified" exact component={VerifiedAccount}/>
            <Route path="/admin/login" exact component={LoginAdmin} />
            <Route path="/admin/dashboard" exact component={DashboardAdmin} />
            <Route path="/admin/article/add-new" exact component={AddNewArticle} />
            <Route path="/admin/users" exact component={UserPage} />
            <Route path="/admin/skill-set" exact component={SkillSet} />
            <Route path="/admin/skill-set/add" exact component={AddNewSkillSet} />
            <Route path="/admin/article" exact component={ArticlePage} />
            <Route path="/admin/organization" exact component={OrganizationPage} />
            <Route path="/admin/events" exact component={EventPage} />
            <Route path="/organization/profile" exact component={OrganizationProfilePage} />
            <Route path="/organization/event/detail/:event_id" exact component={EventDetailOrgPage}/>
            <Route path="/organization/article" exact component={ArticleListOrgPage}/>
            <Route path="/organization/article/detail/:article_id" exact component={ArticleDetailOrgPage}/>
            <Route path="/organization/event/edit/:event_id" exact component={EventEditPage}/>
            <Route path="/find-volunteer" exact component={FindVolunteer}/>
            <Route path="/find-activity" exact component={FindActivity}/>
            <Route path="/organization/update-photo" exact component={UpdateOrganizationPhoto}/>
            <Route path="/organization/event-photo/edit/:event_id" exact component={EventPhotoEditPage}/>         
          </div>
        </Router>
        </Provider>
    );
  }
}


export default App;

