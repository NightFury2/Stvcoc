import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <h1>Hello App</h1>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
