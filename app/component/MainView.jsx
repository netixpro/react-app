import React from 'react';
import LeftNavComponent from './layout/LeftNavComponent.jsx';
import {AppCanvas, AppBar, RaisedButton, LeftNav} from 'material-ui';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } = Router;

var MainView = React.createClass({

  _onMenuIconButtonTouchTap: function () {
    this.refs.leftNav.toggle();
  },

  render: function () {
    var menuItems = [
      { payload: 'home', text: 'menu1' },
      { payload: 'home', text: 'menu2' }
    ];

    return (
      <AppCanvas predefinedLayout={1}>

        <LeftNav ref='leftNav' docked={false} menuItems={menuItems} />

        <AppBar
          className="mui-dark-theme"
          title={'kikoou'}
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          zDepth={0}>
        </AppBar>
        
        <div className='page'>
          <RouteHandler />
        </div>

      </AppCanvas>
    );
  }
});

export default MainView;
