import React, {Component, PropTypes} from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';
import Item from './Item';

export default class Partners extends Component {
  static propTypes = {
    partners: PropTypes.array,
    loadingPartners: PropTypes.bool.isRequired,
    loadedPartners: PropTypes.bool.isRequired
  };
   render() {
     const {loadingPartners, loadedPartners} = this.props;
     const partners = this.props.loadedPartners ? this.props.partners.map(item => <Item {...item} key={item.id}/>) : '';
     const partnersList = (
        <List>
          <Subheader>Наши партнеры</Subheader>
          {partners}
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
