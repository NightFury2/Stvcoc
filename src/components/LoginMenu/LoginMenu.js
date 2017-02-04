import React, {Component, PropTypes} from 'react';

import {Menu, MenuItem} from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import Popover from 'material-ui/Popover/Popover';

export default class LoginMenu extends Component {
  static propTypes = {
    user: PropTypes.object,
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object.isRequired,
    closedLoginMenu: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };
  handleAccount = () => {
    this.props.pushState(`/account/${this.props.user.nikname}`);
  };
  render() {
    return (
      <Popover
          open={this.props.open}
          anchorEl={this.props.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.props.closedLoginMenu}
      >
        <Menu onItemTouchTap={this.props.closedLoginMenu}>
          <MenuItem primaryText="Личный кабинет" onTouchTap={this.handleAccount}/>
          <Divider/>
          <MenuItem primaryText="Рассписание" />
          <MenuItem primaryText="Настройки" />
          <Divider/>
          <MenuItem primaryText="Выход" onTouchTap={this.props.logout} />
        </Menu>
      </Popover>
    );
  }
}
