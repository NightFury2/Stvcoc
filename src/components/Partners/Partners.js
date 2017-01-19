import React, {Component, PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';

export default class Partners extends Component {
  static propTypes = {
    partners: PropTypes.array,
    loadingPartners: PropTypes.bool.isRequired,
    loadedPartners: PropTypes.bool.isRequired
  };
   render() {
     const {loadingPartners, loadedPartners} = this.props;
     const partnersList = (
        <List>
              <Subheader>Наши партнеры</Subheader>
              {loadedPartners && this.props.partners.map((partners) => (
                 <ListItem
                    key={partners.id}
                    primaryText={partners.name}
                    href={partners.href}
                    leftAvatar={<Avatar>{partners.name[0]}</Avatar> }
                  />
              ))}
            </List>
     );
     const failLoaded = <Subheader>Не удалось подключиться к серверу</Subheader>;
     const content = loadedPartners ? partnersList : failLoaded;
     return (
       <div>
         {loadingPartners &&
            <CircularProgress size={80} thickness={5} />
         }
         {!loadingPartners &&
            content
         }
       </div>
     );
   }
}
