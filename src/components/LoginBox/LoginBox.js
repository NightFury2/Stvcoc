import React, {Component, PropTypes} from 'react';

import LoginMenu from '../LoginMenu/LoginMenu';

import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import IconUser from 'material-ui/svg-icons/action/account-circle';
import {
   cyan500
} from 'material-ui/styles/colors';

export default class LoginBox extends Component {
  static propTypes = {
    // auth
    user: PropTypes.array,
    logout: PropTypes.func.isRequired,
    setOpenLogin: PropTypes.func.isRequired,
    // screenSize
    mobile: PropTypes.bool.isRequired
  };
  state = {
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
    const {user, logout, setOpenLogin, mobile} = this.props;
    const labelFlatButton = mobile ? '' : 'Вход';
    const Login = (
       <FlatButton
         label={labelFlatButton}
         style={{color: 'white'}}
         icon={
           <Avatar
              icon={<IconUser/>}
              color={cyan500}
              backgroundColor={'white'}
              size={30}
           />
         }
         onTouchTap={setOpenLogin}
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
    const content = user ? LoginSuccess : Login;
    return (
       <div>
         <LoginMenu
            open={this.state.openLoginMenu}
            anchorEl={this.state.anchorEl}
            closedLoginMenu={this.handleCloseLoginMenu}
            logout={logout}
         />
          {content}
       </div>
    );
  }
}
