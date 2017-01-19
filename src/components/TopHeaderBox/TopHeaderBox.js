import React, {Component, PropTypes} from 'react';

import {blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

import {Parallax} from 'react-parallax';

export default class TopHeaderBox extends Component {
  static propTypes = {
    // Size
    headerLabelSize: PropTypes.string.isRequired,
    infoButtonSize: PropTypes.string.isRequired,
  };
  render() {
    const {headerLabelSize, infoButtonSize} = this.props;
    const imageBG = require('./1.jpg');
    return (
      <div>
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
