import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import { pagination } from 'violet-paginator';

import auth from './auth';
import news from './news';
import partners from './partners';
import screenSize from './screenSize';
import appBar from './appBar';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  news,
  partners,
  pagination,
  appBar,
  screenSize
});
