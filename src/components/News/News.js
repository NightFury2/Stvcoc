import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';
import {grey100} from 'material-ui/styles/colors';

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
const img1 = require('./1.jpg');

export default class News extends React.Component {
  static propTypes = {
    mobile: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    desktop: React.PropTypes.bool,
    news: React.PropTypes.array,
    loadingNews: React.PropTypes.bool.isRequired,
    errorNews: React.PropTypes.object.isRequired
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
  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };
  render() {
    const {loadingNews, errorNews} = this.props;
    return (
       <div style={styles.root}>
         {!loadingNews && !errorNews &&
            <GridList
               cols={this.state.column}
               cellHeight={300}
               padding={1}
               style={styles.gridList}
            >
              {this.props.news.map((news) => (
                <GridTile
                  key={news.id}
                  title={news.title}
                  onTouchTap={this.handleOpen}
                  actionPosition="left"
                  titlePosition="bottom"
                  subtitle={news.body_min}
                  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img src={img1} />
                </GridTile>
              ))}
            </GridList>
         }
         {loadingNews &&
            <CircularProgress size={80} thickness={5} />
         }
         {errorNews &&
            <Subheader>Не удалось подключиться к серверу</Subheader>
         }
        </div>
    );
  }
}
