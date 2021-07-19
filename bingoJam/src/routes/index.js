import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Bingo from '../pages/Bingo';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Bingo} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
