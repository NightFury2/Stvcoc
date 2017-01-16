import React, {Component, PropTypes} from 'react';

import RightMenuComponent from '../RightMenuComponent/RightMenuComponent';
import MenuContent from '../../components/MenuContent/MenuContent';

import {blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavogationClose from 'material-ui/svg-icons/navigation/close';
import NavogationMenu from 'material-ui/svg-icons/navigation/menu';

import {Parallax} from 'react-parallax';

export default class TopHeaderBox extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    headerLabelSize: PropTypes.string.isRequired,
    infoButtonSize: PropTypes.string.isRequired,
    user: PropTypes.object
  };
  state = {
    openMenu: false
  };
  menuOpen = () => {
    this.setState({openMenu: true});
  };
  menuClose = () => {
    this.setState({openMenu: false});
  };
  render() {
    const {title, headerLabelSize, infoButtonSize} = this.props;
    const {openMenu} = this.state;
    const imageBG = require('./1.jpg');
    const menuIcon = openMenu ? <IconButton><NavogationClose/></IconButton> : <IconButton onTouchTap={this.menuOpen}><NavogationMenu/></IconButton>;
    return (
      <div>
        <AppBar
           style={{position: 'fixed'}}
           title={title}
           iconElementLeft={menuIcon}
           iconElementRight={<RightMenuComponent user={this.props.user}/>}
        />
        <Drawer
          width={340}
          docked={false}
          open={this.state.openMenu}
          onRequestChange={(open) => this.setState({openMenu: open})}
        >
          <MenuContent title={title} menuClose={this.menuClose}/>
        </Drawer>
        <div className="row" >
          <div className="col s12 m10 offset-m1" style={{marginTop: '63px'}}>
            <Parallax bgImage={imageBG} strength={200}>
              <div className="row">
                <div className="col s12 m10 offset-m1">
                  <div className="row">
                    <div className="col s12" style={{marginTop: '10px'}}>
                      <center>
                        <Subheader style={{fontSize: headerLabelSize, color: 'white', fontFamily: 'Philosopher,  sanc-serif'}}>Ставропольский колледж связи</Subheader>
                      </center>
                    </div>
                    <div className="col s12" style={{marginTop: '50px'}}>
                      <FlatButton rippleColor={blue500} labelStyle={{fontSize: infoButtonSize, color: 'white'}} label="Информация для поступающих"/>
                    </div>
                    <div className="col s12" style={{marginTop: '10px'}}>
                      <FlatButton rippleColor={blue500} labelStyle={{fontSize: infoButtonSize, color: 'white'}} label="Информация для Студентов"/>
                    </div>
                    <div className="col s12" style={{marginTop: '10px'}}>
                      <FlatButton rippleColor={blue500} labelStyle={{fontSize: infoButtonSize, color: 'white'}} label="Дистанционное образование"/>
                    </div>
                    <div className="col s12" style={{marginTop: '50px'}}>
                      <center>
                        <FlatButton rippleColor={blue500} labelStyle={{color: 'white'}} label="+7 (8652) 24-25-27"/>
                        <FlatButton rippleColor={blue500} labelStyle={{color: 'white'}} label="collage@stvcc.ru"/>
                        <FlatButton className="hide-on-small-only" rippleColor={blue500} labelStyle={{color: 'white'}} label="Сведения об образовательной организации"/>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    );
  }
}
