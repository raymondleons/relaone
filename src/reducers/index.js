import { combineReducers } from 'redux';
import landingPage from './landingPage';
import article from './article';
import skillset from './skillset';

export default combineReducers({
    landingPage: landingPage,
    article: article,
    skillset: skillset
})

