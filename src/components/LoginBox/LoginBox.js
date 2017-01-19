import React, {Component, PropTypes} from 'react';

import LoginBoxSuccess from '../LoginBoxSuccess/LoginBoxSuccess';

import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import IconUser from 'material-ui/svg-icons/action/account-circle';
import {
   cyan500
} from 'material-ui/styles/colors';

export default class LoginBox extends Component {
  static propTypes = {
    // auth
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    setOpenLogin: PropTypes.func.isRequired,
    // screenSize
    mobile: PropTypes.bool.isRequired
  };
  handleOpenLogin = () => {
    this.props.setOpenLogin();
  };
  render() {
    const {user, mobile} = this.props;
    const labelFlatButtonLogin = mobile ? '' : 'Вход';
    const Login = (
       <FlatButton
         label={labelFlatButtonLogin}
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
    const content = user ? <LoginBoxSuccess logout={this.props.logout} user={user}/> : Login;
    return (
       <div>
          {content}
       </div>
    );
  }
}
