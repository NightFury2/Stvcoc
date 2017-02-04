import React, { Component, PropTypes } from 'react';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import {setTitle} from '../../../redux/modules/appBar';
import {connect} from 'react-redux';

@connect(
   state => ({
     user: state.auth.user
   }),
   {setTitle})
export default class Antiterrorist extends Component {
  static propTypes = {
    setTitle: PropTypes.func
  };
  componentDidMount() {
    this.props.setTitle('Антитеррористическая деятельность');
  }
  render() {
    return (
       <Card>
          <CardHeader
             title="Антитеррористическая деятельность"
          />
          <Divider />
          <CardText>
            sdfs
          </CardText>
        </Card>
    );
  }
}
