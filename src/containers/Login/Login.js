import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';
import EyelIcon from 'material-ui/svg-icons/image/remove-red-eye';

import {email as emailUtils} from '../../utils/validation';

export default class Login extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    loggingIn: React.PropTypes.bool,
    loadedAuth: React.PropTypes.bool,
    mobile: React.PropTypes.bool.isRequired,
    tablet: React.PropTypes.bool.isRequired,
    desktop: React.PropTypes.bool.isRequired,
    openLogin: React.PropTypes.bool,
    setCloseLogin: React.PropTypes.func.isRequired,
    login: React.PropTypes.func.isRequired
  };
  state = {
    open: this.props.openLogin,
    showPassword: false,
    email: '',
    floatingLabelStyle: {
      fontSize: '24px'
    },
    password: '',
    error: false,
    errorMSG: ''
  };
  componentWillReceiveProps() {
    if (this.props.mobile) {
      this.setState({floatingLabelStyle: {
        fontSize: '15px'
      }});
    }
    if (this.props.tablet) {
      this.setState({floatingLabelStyle: {
        fontSize: '20px'
      }});
    }
    if (this.props.desktop) {
      this.setState({floatingLabelStyle: {
        fontSize: '24px'
      }});
    }
  }
  handleCloseLogin = () => {
    this.props.setCloseLogin();
  };
  handleLogin = () => {
    this.props.login(this.state.email, this.state.password);
    if (this.props.loadedAuth) {
      this.setState({error: false, errorMSG: ''});
      this.handleCloseLogin();
    } else {
      this.setState({error: true, errorMSG: 'Логин или пароль не верны'});
    }
  };
  handleChangeUsername = (event, newValue) => {
    event.preventDefault();
    if (emailUtils(newValue) !== 'Invalid email address') {
      this.setState({email: newValue});
      this.setState({error: false, errorMSG: ''});
    } else {
      this.setState({error: true, errorMSG: 'Не верно введен email адрес'});
    }
  };
  handleChangePassword = (event, newValue) => {
    event.preventDefault();
    this.setState({password: newValue});
  };
  handleShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };
  render() {
    const styles = require('./Login.scss');
    const showPassword = this.state.showPassword ? 'text' : 'password';
    const showPasswordTooltip = this.state.showPassword ? 'Скрыть пароль' : 'Показать пароль';
    const loading = this.props.loggingIn ? (<CircularProgress size={20} />) : '';
    const actions = [
      <FlatButton
        label="Закрыть"
        primary
        onTouchTap={this.handleCloseLogin}
      />,
      <RaisedButton
        label="Вход"
        primary
        icon={loading}
        onTouchTap={this.handleLogin}
        onSubmit={this.handleLogin}
      />
    ];
    return (
      <div>
        <Dialog
          title="Вход"
          actions={actions}
          modal={false}
          open={this.props.openLogin}
          onRequestClose={this.handleCloseLogin}
        >
          <div><br/>
            <TextField
              name={'username'}
              errorText={this.state.errorMSG}
              floatingLabelStyle={this.state.floatingLabelStyle}
              floatingLabelFocusStyle={this.state.floatingLabelStyle}
              floatingLabelText="Введите email адрес"
              onChange={this.handleChangeUsername}
              type={'text'}
              className={styles.inputs}
              fullWidth
            /><br/><br/>
            <div>
              <TextField
                name={'password'}
                style={{width: '90%'}}
                errorText={this.state.errorMSG}
                floatingLabelStyle={this.state.floatingLabelStyle}
                floatingLabelFocusStyle={this.state.floatingLabelStyle}
                floatingLabelText="Введите пароль"
                type={showPassword}
                onChange={this.handleChangePassword}
                className={styles.inputs}
              />
              <IconButton
                 tooltip={showPasswordTooltip}
                 tooltipPosition={'bottom-center'}
                 children={<EyelIcon/>}
                 onTouchTap={this.handleShowPassword}
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
