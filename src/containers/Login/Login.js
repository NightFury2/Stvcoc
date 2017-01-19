import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import EyelIcon from 'material-ui/svg-icons/image/remove-red-eye';

export default class Login extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    openLogin: React.PropTypes.bool,
    setCloseLogin: React.PropTypes.func.isRequired,
    login: React.PropTypes.func.isRequired
  };
  state = {
    open: this.props.openLogin,
    showPassword: false,
    username: '',
    password: '',
    error: false
  };

  handleCloseLogin = () => {
    this.props.setCloseLogin();
  };
  handleLogin = (event) => {
    event.preventDefault();
    this.handleCloseLogin();
    this.props.login(this.state.username, this.state.password);
  };
  handleChangeUsername = (event, newValue) => {
    event.preventDefault();
    this.setState({username: newValue});
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
    const errorText = this.state.error ? 'Пароль или логин не заполнены' : '';
    const actions = [
      <FlatButton
        label="Закрыть"
        primary
        onTouchTap={this.handleCloseLogin}
      />,
      <FlatButton
        label="Вход"
        primary
        onTouchTap={this.handleLogin}
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
              errorText={errorText}
              floatingLabelStyle={{fontSize: '24px'}}
              floatingLabelFocusStyle={{fontSize: '24px'}}
              floatingLabelText="Введите имя пользователя"
              onChange={this.handleChangeUsername}
              type={'text'}
              className={styles.inputs}
              ref="username"
              fullWidth
            /><br/><br/>
            <div>
              <TextField
                name={'password'}
                errorText={errorText}
                floatingLabelStyle={{fontSize: '24px'}}
                floatingLabelFocusStyle={{fontSize: '24px'}}
                floatingLabelText="Введите пароль"
                type={showPassword}
                onChange={this.handleChangePassword}
                className={styles.inputs}
                ref="password"
                fullWidth
              /><br/><br/>
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
