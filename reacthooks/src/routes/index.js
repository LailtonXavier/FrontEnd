import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../page/Home';
import UseStates from '../page/UseStates';
import UseEffects from '../page/UseEffects';
import UseReffs from '../page/UseRefs';
import UseContexts from '../page/UseContexts';
import UseReducer from '../page/UseReducers';
import UseLayoutEffects from '../page/UseLayoutEffects';
import UseMemo from '../page/UseMemo';
import UseCalbackes from '../page/UseCalbackes';
import Page404 from '../page/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/useState" component={UseStates} />
      <Route exact path="/useEffect" component={UseEffects} />
      <Route exact path="/useRef" component={UseReffs} />
      <Route exact path="/useContext" component={UseContexts} />
      <Route exact path="/useReducer" component={UseReducer} />
      <Route exact path="/useLayoutEffect" component={UseLayoutEffects} />
      <Route exact path="/useMemo" component={UseMemo} />
      <Route exact path="/useCalback" component={UseCalbackes} />
      <Route exact path="*" component={Page404} />
    </Switch>
  );
}
