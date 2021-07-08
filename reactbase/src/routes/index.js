import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Bingo from '../pages/Bingo';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Bingo} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
