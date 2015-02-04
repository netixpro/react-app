'use strict';

import React from 'react';
import MainView from './component/MainView';
import Home from './component/Home';
import NotFound from './component/404';
import injectTapEvent from 'react-tap-event-plugin';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } = Router;

injectTapEvent();

var routes = (
  <Route handler={ MainView } path="/">
    <DefaultRoute handler={ Home } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

Router.run(routes, function (Handler, state) {
  console.log('route', state);
  React.render(<Handler params={ state.params } />, document.body);
});
