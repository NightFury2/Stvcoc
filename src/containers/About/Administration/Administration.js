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
export default class Administration extends Component {
  static propTypes = {
    setTitle: PropTypes.func
  };
  componentDidMount() {
    this.props.setTitle('Администрация. Отделения колледжа');
  }
  render() {
    return (
       <Card>
          <CardHeader
             title="Администрация. Отделения колледжа"
          />
          <Divider />
          <CardText>
            sdfs
          </CardText>
        </Card>
    );
  }
}
