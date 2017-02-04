import React from 'react';

import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';
import {grey100} from 'material-ui/styles/colors';
import Item from './Item';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: '8px',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    backgroundColor: grey100
  },
};

export default class News extends React.Component {
  static propTypes = {
    mobile: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    desktop: React.PropTypes.bool,
    news: React.PropTypes.array,
    loadingNews: React.PropTypes.bool.isRequired,
    loadedNews: React.PropTypes.bool.isRequired,
    pushState: React.PropTypes.func.isRequired
  };
  state = {
    column: 2,
    openNew: false
  };
  componentWillReceiveProps() {
    if (this.props.mobile) {
      this.setState({column: 1});
    } else if (this.props.tablet) {
      this.setState({column: 1});
    } else if (this.props.desktop) {
      this.setState({column: 2});
    }
  }
  render() {
    const {loadingNews, loadedNews} = this.props;
    const news = this.props.loadedNews ? this.props.news.map(item => <Item {...item} key={item.id} />) : '';
    const newsList = (
      <GridList
        cols={this.state.column}
        cellHeight={370}
        padding={4}
        style={styles.gridList}
      >
        {news}
      </GridList>
    );
    const failLoadNews = <Subheader>Не удалось подключиться к серверу</Subheader>;
    const content = loadedNews ? newsList : failLoadNews;
    return (
       <div style={styles.root}>
         {loadingNews &&
           <CircularProgress size={80} thickness={5} />
         }
         {!loadingNews &&
            content
         }
        </div>
    );
  }
}
