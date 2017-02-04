import React, { Component, PropTypes } from 'react';

import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import {setTitle} from '../../redux/modules/appBar';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

@connect(
   state => ({
     user: state.auth.user
   }),
  {setTitle, pushState: push})
export default class About extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    setTitle: PropTypes.func,
    pushState: PropTypes.func
  };
  componentDidMount() {
    this.props.setTitle('О Колледже');
  }
  render() {
    return (
      <div className="row" style={{marginTop: '80px'}}>
        <div className="col s12 m10 offset-m1">
          <div className="row">
            <div className="col s12 m8 l8">
              {this.props.children}
            </div>
            <div className="col s12 m4 l4">
              <Paper zDepth={3}>
                <List>
                  <ListItem primaryText="О Колледже" onTouchTap={() => {this.props.setTitle('О Колледже'); this.props.pushState('/about');}}/>
                  <ListItem primaryText="История создания колледжа" onTouchTap={() => {this.props.setTitle('История создания колледжа'); this.props.pushState('/history');}}/>
                  <ListItem primaryText="Администрация. Отделанеия колледжа" onTouchTap={() => {this.props.setTitle('Администрация. Отделанеия колледжа'); this.props.pushState('/administration');}}/>
                  <ListItem primaryText="Воспитательные работы" onTouchTap={() => {this.props.setTitle('Воспитательные работы'); this.props.pushState('/educationWork');}}/>
                  <ListItem primaryText="Первичная профсоюзная организация" onTouchTap={() => {this.props.setTitle('Первичная профсоюзная организация'); this.props.pushState('/tradeUnion');}}/>
                  <ListItem primaryText="Антикоррупционная деятельность" onTouchTap={() => {this.props.setTitle('Антикоррупционная деятельность'); this.props.pushState('/anticorryption');}}/>
                  <ListItem primaryText="Антитеррористическая деятельность" onTouchTap={() => {this.props.setTitle('Антитеррористическая деятельность'); this.props.pushState('/antiterrorist');}}/>
                  <ListItem primaryText="База отдыха" onTouchTap={() => {this.props.setTitle('База отдыха'); this.props.pushState('/recreationCenter');}}/>
                  <ListItem primaryText="План работы ГБПОУ СКС на 2016-2017 учебный год" onTouchTap={() => {this.props.setTitle('План работы ГБПОУ СКС на 2016-2017 учебный год'); this.props.pushState('/workPlan');}}/>
                </List>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
