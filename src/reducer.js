import { combineReducers } from 'redux';

import authReducer from './containers/login/reducer';
import gallerytReducer from './containers/gallery/reducer';

export default combineReducers({
    auth: authReducer,
    gallery: gallerytReducer
});
