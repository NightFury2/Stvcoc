import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.masthead}>
        <h1>Helo Home</h1>
      </div>
    );
  }
}
