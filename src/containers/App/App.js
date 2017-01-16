import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import Login from '../../containers/Login/Login';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

import {sizeUpdate} from '../../redux/modules/screenSize';
import {isLoaded as isAuthLoaded, load as loadAuth, login, logout, setCloseLogin, setOpenLogin} from '../../redux/modules/auth';
import {isLoaded as isPartnersLoaded, load as loadPartners} from '../../redux/modules/partners';
import {isLoaded as isNewsLoaded, load as loadHews} from '../../redux/modules/news';
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-async-connect';
import {push} from 'react-router-redux';

const muiTheme = {
  spacing: spacing,
  fontFamily: 'Roboto, sanc-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: fullBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
};
injectTapEventPlugin();

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    if (!isPartnersLoaded(getState())) {
      promises.push(dispatch(loadPartners()));
    }
    if (!isNewsLoaded(getState())) {
      promises.push(dispatch(loadHews()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }
    return Promise.all(promises);
  }
}])

@connect(
  state => ({
    user: state.auth.user,
    openLogin: state.auth.openLogin,
    mobile: state.screenSize.mobile,
    tablet: state.screenSize.tablet,
    desktop: state.screenSize.desktop
  }),
  {sizeUpdate, login, logout, setCloseLogin, setOpenLogin, pushState: push})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    // screenSize
    sizeUpdate: PropTypes.func.isRequired,
    mobile: PropTypes.bool,
    tablet: PropTypes.bool,
    desktop: PropTypes.bool,
    // auth
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    openLogin: React.PropTypes.bool,
    setCloseLogin: React.PropTypes.func.isRequired,
    // react-router-redux
    pushState: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('resize', this.setSize);
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/');
      console.log(this.props.user);
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
      console.log(this.props.user);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setSize);
  }
  setSize = () => {
    if (window.innerHeight) {
      const scrHeight = window.innerHeight;
      const scrWidth = window.innerWidth;
      this.props.sizeUpdate(scrHeight, scrWidth);
    } else if (window.height) {
      const scrHeight = window.height;
      const scrWidth = window.width;
      this.props.sizeUpdate(scrHeight, scrWidth);
    }
  };
  render() {
    const styles = require('./App.scss');
    return (
       <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          <div className={'row ' + styles.app}>
            <Login openLogin={this.props.openLogin} setCloseLogin={this.props.setCloseLogin} user={this.props.user} login={this.props.login}/>
            <Helmet {...config.app.head}/>
            {this.props.children}
          </div>
       </MuiThemeProvider>
    );
  }
}
