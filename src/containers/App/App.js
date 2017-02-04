import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import Login from '../../containers/Login/Login';
import RightMenuComponent from '../../components/RightMenuComponent/RightMenuComponent';
import MenuContent from '../../components/MenuContent/MenuContent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavogationMenu from 'material-ui/svg-icons/navigation/menu';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

import {setTitle} from '../../redux/modules/appBar';
import {sizeUpdate} from '../../redux/modules/screenSize';
import {isLoaded as isAuthLoaded, load as loadAuth, login, logout, setCloseLogin, setOpenLogin} from '../../redux/modules/auth';
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
    loadedAuth: state.auth.loadedAuth,
    loggingIn: state.auth.loggingIn,
    mobile: state.screenSize.mobile,
    tablet: state.screenSize.tablet,
    desktop: state.screenSize.desktop,
    title: state.appBar.title
  }),
  {setTitle, sizeUpdate, login, logout, setCloseLogin, setOpenLogin, pushState: push})
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
    loggingIn: PropTypes.bool,
    loadedAuth: PropTypes.bool,
    logout: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    openLogin: React.PropTypes.bool.isRequired,
    setCloseLogin: React.PropTypes.func.isRequired,
    setOpenLogin: React.PropTypes.func.isRequired,
    // react-router-redux
    pushState: PropTypes.func.isRequired,
    // appBar
    title: PropTypes.string,
    setTitle: PropTypes.func,
  };
  state = {
    openMenu: false
  };
  componentDidMount() {
    window.addEventListener('resize', this.setSize);
    this.props.setTitle('Главная');
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState(`/account/${nextProps.user.nikname}`);
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
  menuOpen = () => {
    this.setState({openMenu: true});
  };
  menuClose = () => {
    this.setState({openMenu: false});
  };
  render() {
    const {openMenu} = this.state;
    const styles = require('./App.scss');
    return (
       <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          <div>
            <div className={'row ' + styles.app}>
              <AppBar
                 style={{position: 'fixed'}}
                 title={this.props.title ? this.props.title : 'Загрузка...'}
                 iconElementLeft={<IconButton onTouchTap={this.menuOpen}><NavogationMenu/></IconButton>}
                 iconElementRight={
                   <RightMenuComponent
                      pushState={this.props.pushState}
                      user={this.props.user}
                      setOpenLogin={this.props.setOpenLogin}
                      logout={this.props.logout}
                      mobile={this.props.mobile}
                   />
                 }
              />
              <Drawer
                width={340}
                docked={false}
                open={openMenu}
                onRequestChange={this.menuClose}
              >
                <MenuContent
                   setTitle={this.props.setTitle}
                   pushState={this.props.pushState}
                   logout={this.props.logout}
                   menuClose={this.menuClose}
                   openLogin={this.props.openLogin}
                   setOpenLogin={this.props.setOpenLogin}
                   user={this.props.user}
                />
              </Drawer>
              <Login
                 loadedAuth={this.props.loadedAuth}
                 loggingIn={this.props.loggingIn}
                 openLogin={this.props.openLogin}
                 setCloseLogin={this.props.setCloseLogin}
                 user={this.props.user}
                 mobile={this.props.mobile}
                 tablet={this.props.tablet}
                 desktop={this.props.desktop}
                 login={this.props.login}
              />
              <Helmet {...config.app.head}/>
            </div>
           <div className={'s12 '}>
              {this.props.children}
            </div>
          </div>
       </MuiThemeProvider>
    );
  }
}
