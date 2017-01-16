import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconSearch from 'material-ui/svg-icons/action/search';

const styleIcon = {
  color: 'white'
};

export default class Search extends Component {
    render() {
      return (
         <IconButton iconStyle={styleIcon}><IconSearch/></IconButton>
      );
    }
}
