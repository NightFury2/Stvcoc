import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class NewsView extends React.Component {
  static propTypes = {
    news: React.PropTypes.object,
    setTitle: React.PropTypes.func
  };
  componentDidMount() {
    this.props.setTitle(this.props.news.header);
  }
  componentWillReceiveProps() {
    this.props.setTitle(this.props.news.header);
  }
  render() {
    const imageBG = require('./1.jpg');
    return (
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
        />
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={imageBG} />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          {this.props.news.message}
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}
