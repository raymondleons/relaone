import { combineReducers } from 'redux';
import landingPage from './landingPage';
import article from './article';
import skillset from './skillset';
import event from './event';
import orgProfile from './orgProfile';
import authReducer from './authReducer'

export default combineReducers({
    landingPage: landingPage,
    article: article,
    skillset: skillset,
    event: event,
    orgProfile: orgProfile,
    auth: authReducer

});
