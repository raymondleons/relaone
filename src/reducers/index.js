import { combineReducers } from 'redux';
import landingPage from './landingPage';
import article from './article';

export default combineReducers({
    landingPage: landingPage,
    article: article
})

