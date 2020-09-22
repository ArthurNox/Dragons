import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Create from '../pages/Create';


export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/create" component={Create} />
    </Switch>
  )
}