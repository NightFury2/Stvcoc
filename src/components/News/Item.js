import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Link from 'react-router/lib/Link';
import moment from 'moment';
import 'moment/locale/ru';

const img1 = require('./1.jpg');

export default class Item extends React.Component {
  render() {
    const news = this.props;
    return (
       <Card>
          <CardHeader
             title={<Link to={'account/' + news.author.nikname}>{news.author.name + ' ' + news.author.surname}</Link>}
             subtitle={<time dateTime={news.date_added}>{moment(news.date_added).fromNow()}</time>}
             avatar={<Link to={'account/' + news.author.nikname}><Avatar>{news.author.name[0]}</Avatar></Link>}
          />
          <Link to={'news/' + news.slug}>
              <CardMedia
              overlay={<CardTitle title={news.header} subtitle={news.message} />}
            >
              <img src={img1}/>
            </CardMedia>
          </Link>
          <CardActions>
            <Link to={'news/' + news.slug}><FlatButton label="Подробнее" primary/></Link>
          </CardActions>
       </Card>
    );
  }
}
