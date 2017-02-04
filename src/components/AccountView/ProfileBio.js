import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

import {blue500} from 'material-ui/styles/colors';

export default class ProfileBio extends Component {
  static propTypes = {
    account: PropTypes.object,
  };
  state ={
    expanded: false
  };
  showFullBio = () => {
    this.setState({expanded: !this.state.expanded});
  };
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
  render() {
    const lableRaiseButton = this.state.expanded ? 'Скрыть подробную информацию' : 'показать подробную информацию';
    const name = this.props.account.fathername !== '' ? this.props.account.name + ' ' + this.props.account.surname + ' ' + this.props.account.fathername
       : this.props.account.name + ' ' + this.props.account.surname;
    return (
       <div className="row">
         <div className="col s12">
           <div style={{height: 'auto'}}>
             <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
               <CardHeader
                  title={name}
                  subtitle="Любой дурак сможет написать код, который поймет машина. Хорошие программисты пишут код, который сможет понять человек.	Martin Fowler"
                  actAsExpander
                  showExpandableButton
                />
               <Divider />
               <CardText>
                  <Subheader>Дата рождения: {this.props.account.date_of_birth}</Subheader>
                  <Subheader>город: Ставрополь</Subheader>
                  <Subheader><span>Классный руководитель: </span>
                    <Chip
                      backgroundColor={blue500}
                      labelColor={'white'}
                    >
                      <Avatar size={32} color={blue500} backgroundColor={'white'}>
                        МВ
                      </Avatar>
                      Марченко Валентина Федоровна
                    </Chip>
                  </Subheader>
                  <Subheader>
                    <span>группа: </span>
                    <Chip
                        backgroundColor={blue500}
                      >
                        <Avatar size={32} color={blue500} backgroundColor={'white'}>
                          П
                        </Avatar>
                        П-141
                      </Chip>
                  </Subheader>
               </CardText>
               <Divider />
               <CardActions>
                 <RaisedButton fullWidth primary label={lableRaiseButton} onTouchTap={this.showFullBio}/>
               </CardActions>
               <CardTitle title="Основная информация" expandable/>
               <CardText expandable>
                  <Subheader>Родной город: Ставрополь</Subheader>
               </CardText>
               <Divider />
               <CardTitle title="Контактная информация" expandable/>
               <CardText expandable>
                  <Subheader>Телефон: <FlatButton primary label={this.props.account.phone}/></Subheader>
                  <Subheader>Email: <FlatButton primary label={this.props.account.email}/></Subheader>
                  <Subheader>Skype: <FlatButton primary label="energetick26rus"/></Subheader>
                 {this.props.account.link_VK !== '' && <FlatButton secondary label="Вконтакте" href={this.props.account.link_VK}/>}
                 <FlatButton secondary label="Facebook"/>
                 <FlatButton secondary label="Google+"/>
               </CardText>
               <Divider />
             </Card>
           </div>
         </div>
       </div>
    );
  }
}
