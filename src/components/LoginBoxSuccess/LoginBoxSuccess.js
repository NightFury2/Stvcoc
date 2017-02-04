import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import {
   cyan500
} from 'material-ui/styles/colors';
import LoginMenu from '../LoginMenu/LoginMenu';

export default class LoginBoxSuccess extends Component {
  static propTypes = {
    user: React.PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };
  state = {
    openLoginMenu: false,
    anchorEl: {}
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
    return (
       <div>
           <LoginMenu
              user={this.props.user}
              pushState={this.props.pushState}
              open={this.state.openLoginMenu}
              anchorEl={this.state.anchorEl}
              closedLoginMenu={this.handleCloseLoginMenu}
              logout={this.props.logout}
           />
          <FlatButton
             label={this.props.user.name + ' ' + this.props.user.surname}
             style={{color: 'white'}}
             icon={
                <Avatar
                  color={cyan500}
                  backgroundColor={'white'}
                  size={30}
                >
                  {this.props.user.name[0]}
                </Avatar>
             }
             onTouchTap={this.handleOpenLoginMenu}
          />
       </div>
    );
  }
}
