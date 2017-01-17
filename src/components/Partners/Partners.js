import React, {Component, PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';

export default class Partners extends Component {
  static propTypes = {
    partners: PropTypes.array,
    loadingPartners: PropTypes.bool.isRequired,
    errorPartners: PropTypes.object.isRequired
  };
   render() {
     const {loadingPartners, errorPartners} = this.props;
     return (
       <div>
         {loadingPartners &&
            <CircularProgress size={80} thickness={5} />
         }
         {!loadingPartners && !errorPartners &&
            <List>
              <Subheader>Наши партнеры</Subheader>
              {this.props.partners.map((partners) => (
                 <ListItem
                    key={partners.id}
                    primaryText={partners.name}
                    secondaryText={partners.href}
                    leftAvatar={<Avatar>{partners.name[0]}</Avatar> }
                  />
              ))}
            </List>
         }
         {errorPartners &&
            <List><Subheader>Не удалось подключиться к серверу</Subheader></List>
         }
       </div>
     );
   }
}
