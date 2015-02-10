import React from 'react';
import {LeftNav} from 'material-ui';
var Router = require('react-router');

var LeftNavComponent = React.createClass({
  mixins: [ Router.Navigation ],

  render: function () {
    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        menuItems={this.props.menuItems}
        onChange={this.onClick} className="left-nav" />
    );
  },

  toggle:function () {
    this.refs.leftNav.toggle();
  },

  close: function () {
    this.refs.leftNav.close()
  },

  onClick: function(e, selectedIndex, menuItem) {
    this.transitionTo('/about');
    this.refs.leftNav.close();
  }
});

export default LeftNavComponent;