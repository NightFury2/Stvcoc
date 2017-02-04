import React, { Component, PropTypes } from 'react';
import {loadNewsView} from '../../redux/modules/news';
import {setTitle} from '../../redux/modules/appBar';
import NewsViewed from '../../components/NewsView/NewsView';

import CircularProgress from 'material-ui/CircularProgress';

import {connect} from 'react-redux';
import {push} from 'react-router-redux';

@connect(
  state => ({
    user: state.auth.user,
    news: state.news.news,
    loadingNewsView: state.news.loadingNewsView,
    loadedNewsView: state.news.loadedNewsView,
  }),
  {setTitle, loadNewsView, pushState: push})
export default class NewsView extends Component {
  static propTypes = {
    params: PropTypes.object,
    user: PropTypes.object,
    news: PropTypes.object,
    loadNewsView: PropTypes.func,
    loadingNewsView: PropTypes.bool,
    loadedNewsView: PropTypes.bool,
    setTitle: PropTypes.func,
    pushState: PropTypes.func
  };
  componentDidMount() {
    this.props.loadNewsView(this.props.params.slug);
    this.props.setTitle('Просмотр новости');
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.slug !== nextProps.params.slug) {
      this.props.loadNewsView(nextProps.params.slug);
    }
    this.props.setTitle('Просмотр новости');
  }
  render() {
    const loading = this.props.loadingNewsView ? <CircularProgress style={{left: '50%', top: '50%'}} size={80} thickness={5}/> : '';
    return (
      <div className="row" style={{marginTop: '60px'}}>
        <div className="col s12 m10 offset-m1">
          {loading}
          {this.props.loadedNewsView &&
             <NewsViewed news={this.props.news} setTitle={this.props.setTitle}/>
          }
        </div>
      </div>
    );
  }
}
