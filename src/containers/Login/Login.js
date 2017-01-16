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
    password: ''
  };

  handleCloseLogin = () => {
    this.props.setCloseLogin();
  };
  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.state.username);
  };
  handleChangeUsername = () => {
    this.setState({username: this.value});
  };
  handleShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };
  render() {
    const styles = require('./Login.scss');
    const showPassword = this.state.showPassword ? 'text' : 'password';
    const showPasswordTooltip = this.state.showPassword ? 'Скрыть пароль' : 'Показать пароль';
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
                floatingLabelStyle={{fontSize: '24px'}}
                floatingLabelFocusStyle={{fontSize: '24px'}}
                floatingLabelText="Введите пароль"
                type={showPassword}
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
