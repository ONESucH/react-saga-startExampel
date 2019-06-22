import React from 'react';
import {renderRoutes} from 'react-router-config';
import * as routers from './helpers/routers';
import Main from './pages/main/container';

function Root({location, route}) {
  return (
    <Main location={location}>{renderRoutes(route.routes)}</Main>
  )
}

const list = [
  {
    path: routers.defaultRouting(),
    exact: true,
    component: require('./App').default
  },
  {
    path: routers.main(),
    exact: true,
    component: require('./pages/main/container').default
  }
];

const rootRoute = [
  {
    component: Root,
    routes: list
  }
];

export default renderRoutes(rootRoute);