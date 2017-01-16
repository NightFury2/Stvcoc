import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class NewsView extends React.Component {
  static propTypes = {
    openNew: React.PropTypes.bool.isRequired,
    closeNew: React.PropTypes.func.isRequired,
    news: React.PropTypes.object
  };
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.props.closeNew}
      />,
      <FlatButton
        label="Discard"
        primary
        onTouchTap={this.props.closeNew}
      />,
    ];
    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.openNew}
          onRequestClose={this.props.closeNew}
        >
          {this.props.news.id}
          {this.props.news.title}
          {this.props.news.author}
        </Dialog>
      </div>
    );
  }
}
