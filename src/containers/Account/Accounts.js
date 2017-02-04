import React, { Component, PropTypes } from 'react';
import {loadAccount} from '../../redux/modules/auth';
import {setTitle} from '../../redux/modules/appBar';

import AccountView from '../../components/AccountView/AccountView';

import CircularProgress from 'material-ui/CircularProgress';

import {connect} from 'react-redux';
import {push} from 'react-router-redux';

@connect(
  state => ({
    user: state.auth.user,
    account: state.auth.account,
    loadingAccount: state.auth.loadingAccount,
    loadedAccount: state.auth.loadedAccount,
  }),
  {setTitle, loadAccount, pushState: push})
export default class Accounts extends Component {
  static propTypes = {
    params: PropTypes.object,
    user: PropTypes.object,
    account: PropTypes.object,
    loadAccount: PropTypes.func,
    loadingAccount: PropTypes.bool,
    loadedAccount: PropTypes.bool,
    setTitle: PropTypes.func,
    pushState: PropTypes.func
  };
  componentDidMount() {
    this.props.loadAccount(this.props.params.nikname);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.nikname !== nextProps.params.nikname) {
      this.props.loadAccount(nextProps.params.nikname);
    }
    this.props.setTitle('Личный кабинет');
  }
  render() {
    const loading = this.props.loadingAccount ? <CircularProgress style={{left: '50%', top: '50%'}} size={80} thickness={5}/> : '';
    return (
      <div className="row" style={{marginTop: '60px'}}>
        <div className="col s12 m10 offset-m1">
          {loading}
          {this.props.loadedAccount &&
               <AccountView setTitle={this.props.setTitle} account={this.props.account}/>
          }
        </div>
      </div>
    );
  }
}
