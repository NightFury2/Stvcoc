import React, { Component, PropTypes } from 'react';

import TopHeaderBox from '../../components/TopHeaderBox/TopHeaderBox';
import Partners from '../../components/Partners/Partners';
import News from '../../components/News/News';

import {connect} from 'react-redux';

@connect(
  state => ({
    user: state.auth.user,
    partners: state.partners.data,
    news: state.news.data,
    loading: state.partners.loading,
    loaded: state.partners.loaded,
    mobile: state.screenSize.mobile,
    tablet: state.screenSize.tablet,
    desktop: state.screenSize.desktop
  }))
export default class Home extends Component {
  static propTypes = {
    // partners
    partners: PropTypes.array,
    // news
    news: PropTypes.array,
    // auth
    user: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    // screenSize
    mobile: PropTypes.bool,
    tablet: PropTypes.bool,
    desktop: PropTypes.bool,
  };
  state = {
    title: 'Главная',
    headerLabelSize: '32px',
    infoButtonSize: '24px'
  };
  render() {
    return (
      <div className="row">
        <TopHeaderBox
           headerLabelSize={this.state.headerLabelSize}
           infoButtonSize={this.state.infoButtonSize}
           title={this.state.title}
           user={this.props.user}
        />
        <div className="col s12 m10 offset-m1">
          <div className="col s12 m8">
            <News loaded={this.props.loaded} loading={this.props.loading} mobile={this.props.mobile} tablet={this.props.tablet} desktop={this.props.desktop}/>
          </div>
          <div className="col m4 hide-on-small-only">
            <Partners loaded={this.props.loaded} loading={this.props.loading} partners={this.props.partners}/>
          </div>
        </div>
      </div>
    );
  }
}
