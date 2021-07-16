import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Users from '../pages/Users';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users/" component={Users} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
