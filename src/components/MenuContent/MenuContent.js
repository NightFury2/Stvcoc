import React, {Component, PropTypes} from 'react';

import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import ccLiveIcon from './ccLive';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';
import UserIcon from 'material-ui/svg-icons/action/account-circle';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import EyelIcon from 'material-ui/svg-icons/image/remove-red-eye';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ForumIcon from 'material-ui/svg-icons/communication/forum';
import ReportProblemIcon from 'material-ui/svg-icons/action/report-problem';
import HelpIcon from 'material-ui/svg-icons/action/help';
import SettingIcon from 'material-ui/svg-icons/action/settings';

export default class MenuContent extends Component {
  static propTypes = {
    menuClose: PropTypes.func.isRequired,
    user: React.PropTypes.object,
    openLogin: React.PropTypes.bool.isRequired,
    setOpenLogin: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired
  };
  handleLogin = () => {
    this.props.setOpenLogin();
    this.props.menuClose();
  };
  handleLogout = () => {
    this.props.logout();
    this.props.menuClose();
  };
  render() {
    return (
       <div>
         <AppBar
           title="Меню"
           iconElementLeft={<IconButton onTouchTap={this.props.menuClose}><NavigationCloseIcon/></IconButton>}
         />
         <ccLiveIcon/>
         <MenuItem primaryText="Главная" leftIcon={<HomeIcon/>} onTouchTap={this.props.menuClose} />
         <MenuItem primaryText="О Колледже" leftIcon={<EyelIcon/>} onTouchTap={this.props.menuClose} />
         <MenuItem primaryText="Абитуриенту" leftIcon={<SchoolIcon/>} onTouchTap={this.props.menuClose} />
         <MenuItem primaryText="Студенту" leftIcon={<SchoolIcon/>} onTouchTap={this.props.menuClose} />
         <Divider/>
         <MenuItem primaryText="Дистанционное обучение" leftIcon={<PeopleIcon/>} onTouchTap={this.props.menuClose} />
         <MenuItem primaryText="Дополнительное образование" leftIcon={<PeopleIcon/>} onTouchTap={this.props.menuClose} />
         <Divider/>
         <MenuItem primaryText="Форум" leftIcon={<ForumIcon/>} href="http://iccforum.ru"/>
         <MenuItem primaryText="Live" leftIcon={<ccLiveIcon/>} href="http://iccforum.ru"/>
         <Divider/>
         <MenuItem primaryText="Настройки" leftIcon={<SettingIcon/>} onTouchTap={this.props.menuClose} />
         <MenuItem primaryText="Справка" leftIcon={<HelpIcon/>} onTouchTap={this.props.menuClose} />
         <MenuItem primaryText="Сообщить об ошибке" leftIcon={<ReportProblemIcon/>} onTouchTap={this.props.menuClose} />
         <Divider/>
         {!this.props.user &&
            <MenuItem primaryText="Вход" leftIcon={<UserIcon/>} onTouchTap={this.handleLogin} />
         }
         {this.props.user &&
            <MenuItem primaryText="Выход" leftIcon={<UserIcon/>} onTouchTap={this.handleLogout} />
         }
       </div>
    );
  }
}
