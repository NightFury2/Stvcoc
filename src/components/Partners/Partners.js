import React, {Component, PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';

export default class Partners extends Component {
  static propTypes = {
    partners: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired
  };
   render() {
     const {loading, loaded} = this.props;
     const CircularProgressExampleSimple = () => (<CircularProgress size={80} thickness={5} />);
     return (
       <div>
         {loading &&
            <list>
              {CircularProgressExampleSimple}
            </list>
         }
         {!loading && loaded &&
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
         {!loaded &&
            <List><Subheader>Не удалось подключиться к серверу</Subheader></List>
         }
       </div>
     );
   }
}
