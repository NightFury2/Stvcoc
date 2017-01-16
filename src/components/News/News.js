import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import NewsView from './NewsView';
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

const tilesData = [
  {
    id: 1,
    img: img1,
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    id: 2,
    img: img1,
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    id: 3,
    img: img1,
    title: 'Camera',
    author: 'Danson67',
  },
  {
    id: 4,
    img: img1,
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    id: 5,
    img: img1,
    title: 'Hats',
    author: 'Hans',
  },
  {
    id: 6,
    img: img1,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    id: 7,
    img: img1,
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    id: 8,
    img: img1,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

export default class News extends React.Component {
  static propTypes = {
    mobile: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    desktop: React.PropTypes.bool,
    loading: React.PropTypes.bool.isRequired,
    loaded: React.PropTypes.bool.isRequired
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
    return (
       <div style={styles.root}>
          <GridList
             cols={this.state.column}
             cellHeight={300}
             padding={1}
             style={styles.gridList}
          >
            {tilesData.map((tile) => (
              <GridTile
                key={tile.id}
                title={tile.title}
                onTouchTap={this.handleOpen}
                actionIcon={<NewsView openNew={this.state.openNew} news={tile} closeNew={this.handleClose}/>}
                actionPosition="left"
                titlePosition="bottom"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
    );
  }
}
