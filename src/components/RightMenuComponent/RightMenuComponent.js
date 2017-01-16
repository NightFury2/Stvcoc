import React, {Component, PropTypes} from 'react';

import Search from '../Search/Search';
import LoginBox from '../LoginBox/LoginBox';
import Notification from '../Notification/Notification';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

export default class RightMenuComponent extends Component {
  static propTypes = {
    user: PropTypes.object
  };
  render() {
    const {user} = this.props;
    return (
       <Toolbar style={{background: 'transparent', marginTop: '-5px'}}>
         <ToolbarGroup>
           <Search/>
           {user && <Notification/>}
           <LoginBox/>
         </ToolbarGroup>
       </Toolbar>
    );
  }
}
