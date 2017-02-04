import React, { Component, PropTypes } from 'react';

import ProfilePhoto from './ProfilePhoto';
import ProfileBio from './ProfileBio';

export default class AccountView extends Component {
  static propTypes = {
    account: PropTypes.object,
    setTitle: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.setTitle(this.props.account.name + ' ' + this.props.account.surname);
  }
  componentWillReceiveProps(nextProps) {
    this.props.setTitle(nextProps.account.name + ' ' + nextProps.account.surname);
  }
  render() {
    return (
       <div className="row" style={{paddingTop: '40px'}}>
         <div className="col s12 m6 l4">
           <ProfilePhoto/>
         </div>
         <div className="col s12 m6 l8">
           <ProfileBio account={this.props.account}/>
         </div>
       </div>
    );
  }
}
