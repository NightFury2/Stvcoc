import React, {Component, PropTypes} from 'react';

import Search from '../Search/Search';
import LoginBox from '../LoginBox/LoginBox';
import Notification from '../Notification/Notification';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

export default class RightMenuComponent extends Component {
  static propTypes = {
    // auth
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    setOpenLogin: PropTypes.func.isRequired,
    // screenSize
    mobile: PropTypes.bool.isRequired
  };
  render() {
    const {user, mobile, setOpenLogin, logout} = this.props;
    return (
       <Toolbar style={{background: 'transparent', marginTop: '-5px'}}>
         <ToolbarGroup>
           <Search/>
           {user && <Notification/>}
           <LoginBox
              logout={logout}
              mobile={mobile}
              setOpenLogin={setOpenLogin}
              user={user}
           />
         </ToolbarGroup>
       </Toolbar>
    );
  }
}
