import React, { Component, PropTypes } from 'react';

import TopHeaderBox from '../../components/TopHeaderBox/TopHeaderBox';
import Partners from '../../components/Partners/Partners';
import News from '../../components/News/News';
import {login, logout, setCloseLogin, setOpenLogin} from '../../redux/modules/auth';
import {isLoaded as isPartnersLoaded, load as loadPartners} from '../../redux/modules/partners';
import {isLoaded as isNewsLoaded, load as loadHews} from '../../redux/modules/news';

import {connect} from 'react-redux';
import {asyncConnect} from 'redux-async-connect';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    if (!isPartnersLoaded(getState())) {
      promises.push(dispatch(loadPartners()));
    }
    if (!isNewsLoaded(getState())) {
      promises.push(dispatch(loadHews()));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    // auth
    user: state.auth.user,
    openLogin: state.auth.openLogin,
    // partners
    partners: state.partners.data,
    loadingPartners: state.partners.loadingPartners,
    loadedPartners: state.partners.loadedPartners,
    // news
    news: state.news.data,
    loadingNews: state.news.loadingNews,
    loadedNews: state.news.loadedNews,
    // screenSize
    mobile: state.screenSize.mobile,
    tablet: state.screenSize.tablet,
    desktop: state.screenSize.desktop
  }), {login, logout, setCloseLogin, setOpenLogin})
export default class Home extends Component {
  static propTypes = {
    // partners
    partners: PropTypes.array,
    loadingPartners: PropTypes.bool.isRequired,
    loadedPartners: PropTypes.bool.isRequired,
    // news
    news: PropTypes.array,
    loadingNews: PropTypes.bool.isRequired,
    loadedNews: PropTypes.bool.isRequired,
    // auth
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    openLogin: React.PropTypes.bool.isRequired,
    setOpenLogin: React.PropTypes.func.isRequired,
    setCloseLogin: React.PropTypes.func.isRequired,
    // screenSize
    mobile: PropTypes.bool,
    tablet: PropTypes.bool,
    desktop: PropTypes.bool,
  };
  state = {
    headerLabelSize: '32px',
    infoButtonSize: '24px'
  };
  render() {
    return (
      <div className="row">
        <TopHeaderBox
           mobile={this.props.mobile}
           logout={this.props.logout}
           setOpenLogin={this.props.setOpenLogin}
           headerLabelSize={this.state.headerLabelSize}
           infoButtonSize={this.state.infoButtonSize}
           login={this.props.login}
           title={this.state.title}
           user={this.props.user}
        />
        <div className="col s12 m10 offset-m1">
          <div className="col s12 m8">
            <News news={this.props.news} loadedNews={this.props.loadedNews} loadingNews={this.props.loadingNews} mobile={this.props.mobile} tablet={this.props.tablet} desktop={this.props.desktop}/>
          </div>
          <div className="col m4 hide-on-small-only">
            <Partners loadedPartners={this.props.loadedPartners} loadingPartners={this.props.loadingPartners} partners={this.props.partners}/>
          </div>
        </div>
      </div>
    );
  }
}
