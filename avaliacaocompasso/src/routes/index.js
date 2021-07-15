import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Users from '../pages/Users';
import Repos from '../pages/Repos';
import Starred from '../pages/Starred';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users/" component={Users} />
      <Route exact path="/repos/" component={Repos} />
      <Route exact path="/starred" component={Starred} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
