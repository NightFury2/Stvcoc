import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    NotFound,
    Accounts,
    NewsView,
// About
    About,
    AboutCollage,
    HistoryCollage,
    Anticorruption,
    Antiterrorst,
    EducationWork,
    WorkPlan,
    RecreationCenter,
    TradeUnion,
    Administration
  } from 'containers/index';

export default () => {
  /**
    const requriLogin = (nextState, replace, cb) => {
      function checkAuth() {
        const {auth: {auth}} = store.getState();
        if (!user) {
          replace('/');
        }
        cb();
      }
      if (!isAuthLoaded(store.getState())) {
        store.dispatch(loadAuth()).then(checkAuth);
      } else {
        checkAuth();
      }
    };
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>
      { /* Catch all route */ }
      <Route path="/news/(:slug)" component={NewsView}/>
      <Route path="/account/(:nikname)" component={Accounts}/>
      <Route component={About}>
        <Route path="/about" component={AboutCollage}/>
        <Route path="/history" component={HistoryCollage}/>
        <Route path="/administration" component={Administration}/>
        <Route path="/educationWork" component={EducationWork}/>
        <Route path="/tradeUnion" component={TradeUnion}/>
        <Route path="/anticorryption" component={Anticorruption}/>
        <Route path="/antiterrorist" component={Antiterrorst}/>
        <Route path="/recreationCenter" component={RecreationCenter}/>
        <Route path="/workPlan" component={WorkPlan}/>
      </Route>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
