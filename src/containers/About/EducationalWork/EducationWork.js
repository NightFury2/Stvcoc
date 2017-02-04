import React, { Component } from 'react';

import {Card, CardHeader} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

export default class EducationWork extends Component {
  render() {
    return (
       <Card>
          <CardHeader
             title="Воспитательная работа"
          />
          <Divider />
        </Card>
    );
  }
}
