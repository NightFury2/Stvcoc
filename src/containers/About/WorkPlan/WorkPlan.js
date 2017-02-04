import React, { Component } from 'react';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

export default class WorkPlan extends Component {
  render() {
    return (
       <Card>
          <CardHeader
             title="План работ ГБПОУ СКС на 2016-2017 учебный год"
          />
          <Divider />
          <CardText>
            sdfs
          </CardText>
        </Card>
    );
  }
}
