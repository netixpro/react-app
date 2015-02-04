import React from 'react';
import {RaisedButton} from 'material-ui';
var Router = require('react-router');

var Home = React.createClass({
  mixins: [ Router.Navigation ],

  render: function () {
    return (
      <div>
        <h1>material-ui</h1>
        <h2>example project</h2>
        <RaisedButton label="Super Secret Password" primary={true} onClick={this.onClick}/>
      </div>
    );
  },

  onClick() {
    this.transitionTo('/login');
  }
});

export default Home;