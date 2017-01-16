import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import screenSize from './screenSize';
import auth from './auth';
import partners from './partners';
import news from './news';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  partners,
  news,
  screenSize,
});
