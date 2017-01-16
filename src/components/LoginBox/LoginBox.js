import React, {Component} from 'react';

import {logout, setOpenLogin} from '../../redux/modules/auth';
import LoginMenu from '../LoginMenu/LoginMenu';

import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import IconUser from 'material-ui/svg-icons/action/account-circle';


import {
   cyan500
} from 'material-ui/styles/colors';

import {connect} from 'react-redux';
@connect(
  state => ({
    user: state.auth.user,
    openLogin: state.auth.openLogin
  }),
  {setOpenLogin, logout})
export default class LoginBox extends Component {
  static propTypes = {
    user: React.PropTypes.object,
    openLogin: React.PropTypes.bool.isRequired,
    setOpenLogin: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired
  };
  state = {
    user: null,
    openLoginMenu: false,
    anchorEl: {}
  };
  handleOpenLogin = () => {
    this.props.setOpenLogin();
  };
  handleOpenLoginMenu = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openLoginMenu: true,
      anchorEl: event.currentTarget,
    });
  };
  handleCloseLoginMenu = () => {
    this.setState({
      openLoginMenu: false,
    });
  };
  render() {
    const Login = (
       <FlatButton
         label={'Вход'}
         style={{color: 'white'}}
         icon={
           <Avatar
              icon={<IconUser/>}
              color={cyan500}
              backgroundColor={'white'}
              size={30}
           />
         }
         onTouchTap={this.handleOpenLogin}
       />
    );
    const LoginSuccess = (
      <FlatButton
        label={'Вова'}
        style={{color: 'white'}}
        icon={
          <Avatar
            color={cyan500}
            backgroundColor={'white'}
            size={30}
          >
            {'В'}
          </Avatar>
        }
        onTouchTap={this.handleOpenLoginMenu}
      />
    );
    const content = this.props.user ? LoginSuccess : Login;
    return (
       <div>
         <LoginMenu
            open={this.state.openLoginMenu}
            anchorEl={this.state.anchorEl}
            closedLoginMenu={this.handleCloseLoginMenu}
            logout={this.props.logout}
         />
          {content}
       </div>
    );
  }
}
