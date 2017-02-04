import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    NotFound,
    Accounts,
    NewsView,
    Reference,
    Contacts,
    AdditionalEducation,
    Entrant,
    RemoteEducation,
    ReportAnError,
    Student,
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
    Administration,
    Settings,
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
      <Route path="/news/(:slug)" component={NewsView}/>
      <Route path="/account/(:nikname)" component={Accounts}/>
      <Route path="/entrant" component={Entrant}/>
      <Route path="/student" component={Student}/>
      <Route path="/remoteEducation" component={RemoteEducation}/>
      <Route path="/additionalEducation" component={AdditionalEducation}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/reference" component={Reference}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/reportAnError" component={ReportAnError}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
