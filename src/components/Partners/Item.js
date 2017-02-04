import React from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class Item extends React.Component {
  render() {
    const partners = this.props;
    return (
       <ListItem
         primaryText={partners.name}
         href={partners.href}
         leftAvatar={<Avatar>{partners.name[0]}</Avatar> }
       />
    );
  }
}
