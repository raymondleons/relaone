import { combineReducers } from 'redux';
import landingPage from './landingPage';
import article from './article';
import skillset from './skillset';
import event from './event';
import orgProfile from './orgProfile';
import userProfile from './userProfile'
import authReducer from './authReducer'
import user from './user'
import volunteer from './volunteer'
import admin from './admin'
import organization from './organization'

export default combineReducers({
    landingPage: landingPage,
    article: article,
    skillset: skillset,
    event: event,
    orgProfile: orgProfile,
    userProfile: userProfile,
    auth: authReducer,
    user: user,
    volunteer: volunteer,
    admin: admin,
    organization: organization

});
