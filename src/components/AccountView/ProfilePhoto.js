import React, { Component } from 'react';
import {Card, CardMedia, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FileUpLoad from 'material-ui/svg-icons/file/file-upload';
import CropFree from 'material-ui/svg-icons/image/crop-free';

export default class ProfilePhoto extends Component {
  state = {
    showSettingPhoto: false
  };
  showSettingPhoto = () => {
    this.setState({showSettingPhoto: true});
  };
  hideSettingPhoto = () => {
    this.setState({showSettingPhoto: false});
  };
  render() {
    const image = require('./1.jpg');
    const settingPhoto = this.state.showSettingPhoto ? (
      <CardActions>
        <FlatButton primary icon={<FileUpLoad/>} label="Обновить фотографию" />
        <FlatButton primary icon={<CropFree/>} label="Изменить миниатюру" />
      </CardActions>
    ) : <CardText/>;
    return (
       <div className="row">
         <div className="col s12" >
           <Card
              style={{padding: '20px'}}
           >
             <div
                style={{height: '300px'}}
                onMouseEnter={this.showSettingPhoto}
                onMouseLeave={this.hideSettingPhoto}
             >
                <CardMedia
                  overlay={settingPhoto}
                >
                  <img src={image}/>
                </CardMedia>
            </div>
           </Card>
         </div>
       </div>
    );
  }
}
