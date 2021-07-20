import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../page/Home';
import Page404 from '../page/page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="*" component={Page404} />
    </Switch>
  );
}
