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
export default class Anticorruption extends Component {
  static propTypes = {
    setTitle: PropTypes.func
  };
  componentDidMount() {
    this.props.setTitle('Аникоррупционная деятельность');
  }
  render() {
    return (
       <Card>
          <CardHeader
             title="Аникоррупционная деятельность"
          />
          <Divider />
          <CardText>
            sdfs
          </CardText>
        </Card>
    );
  }
}
